<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<!-- <Header /> -->

	<main>
		<slot />
	</main>

	<footer>
		<p>Visit <a href="https://Sahilkakwani.tech">sahilkakwani.tech</a> to learn more.</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* padding: 1rem; */
		width: 100%;
		max-width: 64rem;
		/* margin: 0 auto; */
		box-sizing: border-box;
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		font-weight: 800;
		letter-spacing: 10;
		font-size: 20px;
	}
	footer a {
		font-weight: 900;
		color: white;
		margin-inline: 4px;
	}
	@media (max-width: 700px) {
		footer {
			padding: 12px 5px;
			margin-top: 10px;
			font-size: 17px;
		}
	}
</style>