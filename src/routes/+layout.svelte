<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Lenis from 'lenis';
	import { onMount } from 'svelte';
	import { animate } from 'animejs';

	let { children } = $props();

	let navOpen = $state(false);
	let activeSection = $state('');
	let headerScrolled = $state(false);

	const navItems = [
		{ id: 'about', label: 'About' },
		{ id: 'sparktrack', label: 'SparkTrack' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'contact', label: 'Contact' }
	];

	onMount(() => {
		const container = document.querySelector('[data-name="particles"]') as HTMLElement;
		if (container) {
			for (let i = 0; i < 80; i++) {
				const dot = document.createElement('div');
				dot.className = 'particle';
				const size = Math.random() * 4 + 2;
				dot.style.cssText = `
					width: ${size}px; height: ${size}px;
					left: ${Math.random() * 100}%;
					top: ${Math.random() * 100}%;
					opacity: ${Math.random() * 0.5 + 0.15};
				`;
				container.appendChild(dot);
				animate(dot, {
					x: () => Math.random() * 300 - 150,
					y: () => Math.random() * 300 - 150,
					duration: () => Math.random() * 20000 + 15000,
					ease: 'inOutSine',
					loop: true,
					alternate: true
				});
			}
		}

		const lenis = new Lenis({ duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		let ticking = false;
		function onScroll() {
			if (!ticking) {
				requestAnimationFrame(() => {
					headerScrolled = window.scrollY > 50;
					const pos = window.scrollY + 300;
					for (const item of navItems) {
						const el = document.getElementById(item.id);
						if (!el) continue;
						if (pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
							activeSection = item.id;
							break;
						}
					}
					ticking = false;
				});
				ticking = true;
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const delay = parseInt(entry.target.getAttribute('data-delay') || '0');
						setTimeout(() => entry.target.classList.add('revealed'), delay);
					}
				});
			},
			{ threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
		);

		document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

		return () => {
			lenis.destroy();
			window.removeEventListener('scroll', onScroll);
			observer.disconnect();
		};
	});

	function toggleNav() { navOpen = !navOpen; }
	function closeNav() { navOpen = false; }
	function scrollTo(id: string) { closeNav(); const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); }
	function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Giebert Delotavo | Full Stack Developer</title>
</svelte:head>

<header class:header-scrolled={headerScrolled} data-name="site-header">
	<nav data-name="site-nav">
		<button class="logo" onclick={scrollToTop} aria-label="Home" data-name="btn-logo">G</button>
		<div class="nav-right" data-name="nav-right">
			<ul class:nav-open={navOpen} data-name="nav-links">
				{#each navItems as item}
					<li data-name="nav-item-{item.id}">
						<a href="#{item.id}" class:active={activeSection === item.id} onclick={(e) => { e.preventDefault(); scrollTo(item.id); }} data-name="link-{item.id}">{item.label}</a>
					</li>
				{/each}
			</ul>
			<button class="menu-toggle" onclick={toggleNav} aria-label="Toggle navigation" data-name="btn-menu-toggle">
				<span class="menu-toggle-bar" data-name="menu-bar-1"></span>
				<span class="menu-toggle-bar" data-name="menu-bar-2"></span>
			</button>
		</div>
	</nav>
</header>

<div class="particles" data-name="particles" aria-hidden="true"></div>

<div class="page-content" data-name="page-content">
	{@render children()}
</div>

<footer data-name="site-footer">
	<div class="container" data-name="footer-container">
		<p data-name="footer-tagline">Built with curiosity, shipped with grit.</p>
		<p class="footer-sub" data-name="footer-copyright">&copy; 2026 Giebert R. Delotavo</p>
	</div>
</footer>

<style>
	:global(.reveal-on-scroll) {
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.7s ease, transform 0.7s ease;
	}
	:global(.reveal-on-scroll.revealed) {
		opacity: 1;
		transform: translateY(0);
	}

	:global(.particles) {
		position: fixed;
		inset: 0;
		z-index: 0;
		pointer-events: none;
	}

	:global(.particle) {
		position: absolute;
		border-radius: 50%;
		background: var(--primary);
		box-shadow: 0 0 6px var(--primary), 0 0 12px rgba(212, 168, 83, 0.3);
		will-change: transform;
	}

	:global(.page-content) {
		position: relative;
		z-index: 1;
		min-height: 100vh;
	}
</style>
