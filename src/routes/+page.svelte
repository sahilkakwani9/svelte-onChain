<script>
	import { goto } from '$app/navigation';
	import connectWallet from "../utils/connectWallet";
	let address = "";
	console.log(address);
</script>

<svelte:head>
	<title>Dynamic NFT</title>
	<meta name="description" content="Onchain NFT" />
</svelte:head>

<section>
	<div class="container">
		<h1 class="title">
			NFT<br />On <span>⛓</span> Chain
		</h1>
		<button
			class="connect"
			on:click={async () => {
				const data = await connectWallet();
				address = data?.address;
				if (data) {
					goto('/mint')
				}
			}}>Connect Wallet</button
		>
		<h3>{address}</h3>
	</div>
</section>

<style>
	.title {
		font-size: 8rem;
		font-weight: 700;
		font-family: Poppins;
		color: white;
		text-shadow: 10px 10px 2px #ff9624;
		opacity: 0.9;
	}
	span {
		/* text-shadow: none; */
		/* color: #f; */
	}
	.connect {
		width: 16rem;
		height: 4rem;
		/* border-width: 2px;
		border-color: #ff1d00; */
		display: inline-block;
		border: 0.3em solid #ff9624;
		margin: 0 0.3em 0.3em 0;
		border-radius: 0.4em;
		box-sizing: border-box;
		text-decoration: none;
		font-family: "Inter", sans-serif;
		font-weight: bolder;
		color: #fff;
		background-color: #ff9624;
		text-align: center;
		transition: all 0.2s;
		font-size: 1.6rem;
		box-shadow: 8px 8px 0px gray;
	}
	.connect:hover {
		box-shadow: 0px 0px gray;
		transition: ease-in-out 0.6s;
	}
	.container {
		text-align: center;
		justify-content: center;
		align-items: center;
		min-width: 100vw;
	}
	@media (max-width: 700px) {
		.title {
			font-size: 60px;
			margin-top: 200px;
			text-align: center;
			width: 100vw;
			text-shadow: 6px 6px 2px #ff9624;
		}
		.container {
			height: 86vh;
			margin-block: auto;
			display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		}
		.connect {
			/* margin-top: 50px; */
		}
		span {
			display: none;
		}
	}
</style>