<script lang="ts">
	let { images = [] as string[], open = false, onclose }: { images?: string[]; open?: boolean; onclose?: () => void } = $props();

	let currentIndex = $state(0);
	let visible = $state(false);

	$effect(() => { visible = open; });

	function prev(e: MouseEvent) { e.stopPropagation(); currentIndex = (currentIndex - 1 + images.length) % images.length; }
	function next(e: MouseEvent) { e.stopPropagation(); currentIndex = (currentIndex + 1) % images.length; }
	function close() { onclose?.(); }

	$effect(() => {
		if (typeof window === 'undefined') return;
		function onKeydown(e: KeyboardEvent) {
			if (!visible) return;
			if (e.key === 'Escape') close();
			if (e.key === 'ArrowLeft') currentIndex = (currentIndex - 1 + images.length) % images.length;
			if (e.key === 'ArrowRight') currentIndex = (currentIndex + 1) % images.length;
		}
		window.addEventListener('keydown', onKeydown);
		return () => window.removeEventListener('keydown', onKeydown);
	});
</script>

<!-- COMPONENT: LIGHTBOX GALLERY -->
{#if visible}
	<div class="lightbox-overlay" onclick={close} role="dialog" aria-modal="true" tabindex="-1" data-name="lightbox-overlay">
		<img src={images[currentIndex]} alt={`Gallery ${currentIndex + 1} of ${images.length}`} data-name="lightbox-image" />
		<button class="lightbox-btn lightbox-close" onclick={close} aria-label="Close" data-name="lightbox-close">&times;</button>
		<button class="lightbox-btn lightbox-prev" onclick={prev} aria-label="Previous" data-name="lightbox-prev">&lsaquo;</button>
		<button class="lightbox-btn lightbox-next" onclick={next} aria-label="Next" data-name="lightbox-next">&rsaquo;</button>
	</div>
{/if}

<style>
	.lightbox-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.94);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2000;
		backdrop-filter: blur(12px);
	}

	.lightbox-overlay img {
		max-width: 92%;
		max-height: 92%;
		border-radius: 8px;
		box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6);
	}

	.lightbox-btn {
		position: fixed;
		z-index: 2100;
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.1);
		color: #aaa;
		cursor: pointer;
		font-family: system-ui;
		border-radius: 8px;
		transition: all 0.2s;
	}

	.lightbox-btn:hover { background: rgba(255, 255, 255, 0.12); color: #fff; }
	.lightbox-close { top: 20px; right: 20px; font-size: 28px; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; }
	.lightbox-prev, .lightbox-next { top: 50%; transform: translateY(-50%); font-size: 36px; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; }
	.lightbox-prev { left: 20px; }
	.lightbox-next { right: 20px; }

	@media (max-width: 640px) {
		.lightbox-overlay img { max-width: 96%; }
		.lightbox-btn { width: 40px; height: 40px; font-size: 24px; }
		.lightbox-prev { left: 8px; }
		.lightbox-next { right: 8px; }
		.lightbox-close { top: 8px; right: 8px; }
	}
</style>
