<script lang="ts">
	let { images = [] as string[], alt = '' }: { images?: string[]; alt?: string } = $props();

	let current = $state(0);

	function prev() { current = (current - 1 + images.length) % images.length; }
	function next() { current = (current + 1) % images.length; }
	function go(i: number) { current = i; }
</script>

<!-- COMPONENT: IMAGE CAROUSEL -->
<div class="carousel" role="region" aria-label="Image gallery" data-name="carousel">
	<div class="carousel-track" data-name="carousel-track">
		{#each images as src, i}
			<div class="carousel-slide" class:active={i === current} data-name="slide-{i}">
				<img src={src} alt="{alt} — {i + 1}" loading="lazy" data-name="carousel-img-{i}" />
			</div>
		{/each}

		<button class="carousel-btn carousel-prev" onclick={prev} aria-label="Previous" data-name="carousel-prev"><i class="fas fa-chevron-left"></i></button>
		<button class="carousel-btn carousel-next" onclick={next} aria-label="Next" data-name="carousel-next"><i class="fas fa-chevron-right"></i></button>
	</div>

	<div class="carousel-footer" data-name="carousel-footer">
		<div class="carousel-counter" data-name="carousel-counter">{current + 1} / {images.length}</div>
		<div class="carousel-dots" data-name="carousel-dots">
			{#each images as _, i}
				<button class="carousel-dot" class:active={i === current} onclick={() => go(i)} aria-label="Go to slide {i + 1}" data-name="dot-{i}"></button>
			{/each}
		</div>
	</div>
</div>

<style>
	.carousel {
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		overflow: hidden;
		background: var(--bg-surface);
	}

	.carousel-track {
		position: relative;
		height: 580px;
		background: #0a0a0a;
	}

	.carousel-slide {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.4s;
	}

	.carousel-slide.active { opacity: 1; }

	.carousel-slide img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		display: block;
	}

	.carousel-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 2;
		background: rgba(0, 0, 0, 0.5);
		border: none;
		color: rgba(255, 255, 255, 0.8);
		width: 36px;
		height: 36px;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.85rem;
		transition: all 0.2s;
	}

	.carousel-btn:hover { background: rgba(0, 0, 0, 0.7); color: #fff; }
	.carousel-prev { left: 12px; }
	.carousel-next { right: 12px; }

	.carousel-footer {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 0.5rem 1rem;
		border-top: 1px solid var(--border);
	}

	.carousel-counter { font-size: 0.72rem; color: var(--text-dim); }
	.carousel-dots { display: flex; gap: 5px; }

	.carousel-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		border: none;
		background: rgba(255, 255, 255, 0.2);
		cursor: pointer;
		transition: all 0.3s;
		padding: 0;
	}

	.carousel-dot.active {
		background: var(--primary);
		width: 18px;
		border-radius: 3px;
	}

	@media (max-width: 768px) { .carousel-track { height: 260px; } }
</style>
