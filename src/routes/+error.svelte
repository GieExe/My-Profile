<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>404 &mdash; Page Not Found</title>
</svelte:head>

<!-- PAGE: 404 ERROR -->
<div class="error-container" data-name="error-404-container">
	<h1 data-name="error-code">404</h1>
	<p data-name="error-message">This page doesn't exist.</p>
	<a href="/" class="btn btn-primary" data-name="btn-go-home">Go Home</a>
</div>

<style>
	.error-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		text-align: center;
		background: var(--bg);
		color: var(--text);
		gap: 1rem;
	}
	h1 { font-size: 6rem; color: var(--primary); font-family: var(--font-serif); }
	p { font-size: 1.2rem; color: var(--text-muted); }
</style>
