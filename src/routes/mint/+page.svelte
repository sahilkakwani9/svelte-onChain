<script>
    import mint from "../../utils/mint"
    import { goto } from '$app/navigation';
    let name= "";
    let description = "";
    const mintNFT = async (name, description) => {
        const result = await mint(name, description);
        console.log(result)
    }
    const setName = (e)=>{
        name=e.target.value;
    }
    const setDescrition = (e)=>{
        description=e.target.value;
    }
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Onchain NFT" />
</svelte:head>

<section>
    <div class="container">
        <nav class="navbar">
            <ul class="list">
                <li class="logo"><a href="/">On ⛓ Chain</a></li>
                <li><button class="train" on:click={async ()=>{goto('/nft')}}>Minted NFT's</button></li>
            </ul>
          </nav>
        <h1 class="title">Mint <span>Dynamic NFT</span></h1>
        <div class="input">
            <div class="box">
                <input type="text" id="name" on:change={setName} autocomplete="off" required>
                <label htmlfor="name">Name</label>
            
            </div>
            <div class="box">
                <input type="text" id="description" autocomplete="off" on:change={setDescrition} required>
                <label htmlfor="description">Description</label>
            </div>
        </div>

        <button class="big-button" on:click={()=>mintNFT(name, description)}>Mint</button>
    </div>
</section>

<style>
    :root {
        --colorShadeA: #079afc;
        --colorShadeB: #55bafd;
        --colorShadeC: #32acfe;
        --colorShadeD: #5fbfff;
        --colorShadeE: #53b8fa;
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
    nav {
        background: #ff9624;
        min-height: 8vh;
    }
    ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
        align-items: center;
        padding-inline: 20px;
        height: 8vh;
    }
    .logo {
        font-size: 2rem;
		font-weight: 700;
		font-family: Poppins;
    }
    .train {
        padding: 10px 20px;
        border-radius: 0.4em;
        display: inline-block;
        box-shadow: 4px 4px 0px gray;
		/* border: 0.3em solid #40b3ff; */
        border: 0;
        background: #fff;
        color: #ff9624;
		margin: 0 0.3em 0.3em 0;
		box-sizing: border-box;
		text-decoration: none;
		font-family: "Inter", sans-serif;
		font-weight: bolder;
        font-size: 1.3rem;
    }
    a{
        color: white;
    }
    /* span {
        color: #ff9624;
    } */
    .container {
        text-align: center;
        margin-top: -2vh;
        min-height: 90vh;
        min-width: 100vw;
        background-color: #40b3ff;
    }
    .input {
        display: flex;
        justify-content: space-around;
        width: 60%;
        margin-top: 15vh;
        margin-inline: auto;
    }
    .box {
        position: relative;
    }
    input 				{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:300px;
  border:none;
  border-bottom:2px solid #fff;
  background-color: #40b3ff;
  color: #fff;
}
input:focus
{ outline:none;
    /* border-bottom:2px solid #40b3ff;  */
}
label{
  color:#fff; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}
input:focus ~ label, input:valid ~ label {
  top:-20px;
  font-size:14px;
  /* color:#40b3ff; */
}
    .big-button {
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        font-size: 1.5rem;
        color: white;
        font-weight: 700;
        text-transform: uppercase;
        font-family: inherit;
        margin-top: 80px;
    }
    button.big-button {
        padding: 1em 2em;
        border: 2px solid var(--colorShadeA);
        border-radius: 1em;
        background: var(--colorShadeE);
        transform-style: preserve-3d;
        transition: all 175ms cubic-bezier(0, 0, 1, 1);
    }
    button.big-button::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--colorShadeC);
        border-radius: inherit;
        box-shadow: 0 0 0 2px var(--colorShadeB),
            0 0.75em 0 0 var(--colorShadeA);
        transform: translate3d(0, 0.75em, -1em);
        transition: all 175ms cubic-bezier(0, 0, 1, 1);
    }
    button.big-button:hover {
        background: var(--colorShadeD);
        transform: translate(0, 0.375em);
    }
    button.big-button:hover::before {
        transform: translate3d(0, 0.75em, -1em);
    }
    button.big-button:active {
        transform: translate(0em, 0.75em);
    }
    button.big-button:active::before {
        transform: translate3d(0, 0, -1em);
        box-shadow: 0 0 0 2px var(--colorShadeB),
            0 0.25em 0 0 var(--colorShadeB);
    }
    @media (max-width: 700px) {
        section {
            width: 100vw;
        }
        nav {
            min-width: 112vw;
            min-height: 10vh;
        }
        ul {
            height: 100%;
            padding-top: 2vh;
        }
        .title {
            font-size: 5rem;
            margin-top: 40%;
        }
        .container {
            min-width: 100vw;
            /* height: 100vh; */
        }

        .input {
            flex-direction: column;
            width: 100%;
            margin-left: 12vw;
            row-gap: 5vh;
        }
        .big-button {
            margin-top: 10%;
            margin-bottom: 10%;
        }
        span {
            display: none;
        }
    }
</style>