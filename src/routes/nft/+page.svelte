<script>
    import getNFTs from "../../utils/getNFT";
    import trainNFT from "../../utils/trainNFT";
    let nft = [];
    const get = async () => {
        nft = await getNFTs();
        console.log(nft);
    };
    get();
    const display = () => {};
</script>

<svelte:head>
    <title>NFT's</title>
    <meta name="description" content="Onchain NFT" />
</svelte:head>

<section>
    <div class="container">
        <h1 class="title">Minted <span class="orange">NFT's</span></h1>
        <div class="box">
            {#each nft as n, index}
                <div class="card">
                    <h2 class="name">{n.name}</h2>
                    <h3 class="description">{n.description}</h3>
                    <div class="btn-wrap">
                        <button on:click={async()=>{await trainNFT(index+1)}}>Train</button>
                        <button><a href={`https://testnets.opensea.io/assets/mumbai/0x7868a00fc9a836be3a626f83043a34250470166c/${index+1}`}>View</a></button>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .container {
        text-align: center;
        min-width: 100vw;
    }
    .title {
        font-size: 5rem;
        margin: 0;
        padding-top: 30px;
        font-weight: 700;
        font-family: Inter;
        color: #fff;
        /* opacity: 0.9; */
    }
    .name {
        color: #ff9624;
        font-size: 1.7rem;
        font-weight: 700;
        margin: 0;
    }
    .description {
        font-weight: 200;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
    .orange {
        color: #ff9624;
        margin-left: 10px;
    }
    .box {
        display: flex;
        justify-content: center;
        row-gap: 2rem;
        column-gap: 1rem;
        flex-wrap: wrap;
        margin-top: 6vh;
    }
    .card {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        background: #fff;
        width: 15vw;
        min-height: 23vh;
        padding: 1.6vw;
        border-radius: 15px;
    }

    .btn-wrap {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }
    button {
		width: 5rem;
		height: 2rem;
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
		font-size: 1rem;
		box-shadow: 4px 4px 0px gray;
	}

    button:hover {
		box-shadow: 0px 0px gray;
		transition: ease-in-out 0.6s;
	}

    @media (max-width: 700px) {

        .title {
            font-size: 2.8rem;
        }
        .box {
            flex-direction: column;
            /* padding-inline: 17vw; */
        }

        .card {
            width: 60%;
            border-radius: 20px;
            margin-inline: auto;
            min-height: 35vh;
            justify-content: space-evenly;
            padding-inline: 5vw;
            padding-block: 1rem;
        }
        .name {
            font-size: 1.8rem;
        }

        .description {
            font-size: 1.5rem;
        }
    }

</style>