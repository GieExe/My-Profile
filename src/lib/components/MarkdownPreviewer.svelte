<script lang="ts">
	let input = $state(`# Markdown Previewer

Type **markdown** on the left, see it *rendered* on the right.

## Features
- **Bold** and *italic* text
- \`inline code\` snippets
- [Links](https://svelte.dev)
- Blockquotes

### Code Blocks

\`\`\`
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

### Lists

1. Ordered item one
2. Ordered item two

- Unordered item
- Another item

> This is a blockquote

---

Try editing the text above!`);

	let rendered = $derived(parseMarkdown(input));

	function parseMarkdown(md: string): string {
		let html = md;

		html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');

		html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" />');

		html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer nofollow">$1</a>');

		const lines = html.split('\n');
		const result: string[] = [];
		let inCodeBlock = false;

		for (let i = 0; i < lines.length; i++) {
			let line = lines[i];

			if (line.startsWith('<pre>')) {
				inCodeBlock = true;
				result.push(line);
				continue;
			}
			if (line.startsWith('</pre>')) {
				inCodeBlock = false;
				result.push(line);
				continue;
			}
			if (inCodeBlock) {
				result.push(line);
				continue;
			}

			if (line.match(/^#{1,6}\s/)) {
				const level = line.match(/^(#{1,6})/)![1].length;
				const text = line.replace(/^#{1,6}\s/, '');
				line = `<h${level}>${text}</h${level}>`;
			} else if (line.match(/^>\s/)) {
				const text = line.replace(/^>\s/, '');
				line = `<blockquote>${text}</blockquote>`;
			} else if (line.match(/^[-*+]\s/)) {
				const text = line.replace(/^[-*+]\s/, '');
				line = `<li>${text}</li>`;
			} else if (line.match(/^\d+\.\s/)) {
				const text = line.replace(/^\d+\.\s/, '');
				line = `<li>${text}</li>`;
			} else if (line.match(/^---+$/)) {
				line = '<hr />';
			} else if (line.trim() !== '') {
				line = `<p>${line}</p>`;
			}

			line = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
			line = line.replace(/__(.+?)__/g, '<strong>$1</strong>');
			line = line.replace(/\*(.+?)\*/g, '<em>$1</em>');
			line = line.replace(/_(.+?)_/g, '<em>$1</em>');
			line = line.replace(/`([^`]+)`/g, '<code>$1</code>');

			result.push(line);
		}

		html = result.join('\n');

		html = html.replace(/(<\/li>\n<li>)/g, '$1');
		html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');

		return html;
	}
</script>

<!-- COMPONENT: MARKDOWN PREVIEWER -->
<div class="md-container" data-name="md-container">
	<div class="md-pane" data-name="md-pane-input">
		<div class="md-pane-header" data-name="md-header-input">Markdown</div>
		<textarea bind:value={input} class="md-input" spellcheck="false" data-name="md-textarea"></textarea>
	</div>
	<div class="md-pane" data-name="md-pane-output">
		<div class="md-pane-header" data-name="md-header-output">Preview</div>
		<div class="md-output" data-name="md-rendered">{@html rendered}</div>
	</div>
</div>

<style>
	.md-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		background: var(--border);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		overflow: hidden;
		min-height: 420px;
	}

	.md-pane {
		background: var(--bg-card);
	}

	.md-pane-header {
		font-family: var(--font-sans);
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--text-dim);
		padding: 0.6rem 1rem;
		border-bottom: 1px solid var(--border);
	}

	.md-input {
		width: 100%;
		height: calc(100% - 33px);
		min-height: 380px;
		background: transparent;
		border: none;
		color: var(--text-muted);
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		font-size: 0.82rem;
		line-height: 1.7;
		padding: 1rem;
		resize: none;
		outline: none;
	}

	.md-input:focus {
		color: var(--text);
	}

	.md-output {
		padding: 1rem;
		font-size: 0.85rem;
		line-height: 1.7;
		color: var(--text-muted);
		overflow-y: auto;
		height: calc(100% - 33px);
		min-height: 380px;
	}

	.md-output :global(h1) { font-size: 1.5rem; color: var(--text); margin-bottom: 0.5rem; }
	.md-output :global(h2) { font-size: 1.2rem; color: var(--text); margin: 1rem 0 0.5rem; }
	.md-output :global(h3) { font-size: 1rem; color: var(--text); margin: 0.8rem 0 0.4rem; }
	.md-output :global(p) { margin-bottom: 0.5rem; }
	.md-output :global(strong) { color: var(--text); }
	.md-output :global(code) {
		background: var(--primary-dim);
		color: var(--primary);
		padding: 0.1rem 0.3rem;
		border-radius: 4px;
		font-size: 0.78rem;
	}
	.md-output :global(pre) {
		background: var(--bg-surface);
		padding: 0.8rem;
		border-radius: 8px;
		margin-bottom: 0.5rem;
		overflow-x: auto;
	}
	.md-output :global(pre code) {
		background: none;
		color: var(--text-muted);
		padding: 0;
	}
	.md-output :global(blockquote) {
		border-left: 2px solid var(--primary);
		padding-left: 0.8rem;
		margin: 0.5rem 0;
		color: var(--text-muted);
		font-style: italic;
	}
	.md-output :global(ul), .md-output :global(ol) {
		padding-left: 1.2rem;
		margin-bottom: 0.5rem;
	}
	.md-output :global(li) { margin-bottom: 0.15rem; }
	.md-output :global(hr) {
		border: none;
		border-top: 1px solid var(--border);
		margin: 0.8rem 0;
	}
	.md-output :global(a) { color: var(--primary); text-decoration: none; }
	.md-output :global(a:hover) { text-decoration: underline; }
	.md-output :global(img) { max-width: 100%; border-radius: 4px; }

	@media (max-width: 700px) {
		.md-container {
			grid-template-columns: 1fr;
			min-height: auto;
		}
		.md-input, .md-output { min-height: 240px; }
	}
</style>
