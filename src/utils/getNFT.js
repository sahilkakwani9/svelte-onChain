import { ethers } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "./constants";


export default async function getNFTs(tokenId){
    try {
        const { ethereum } = window;
       const provider = new ethers.providers.Web3Provider(ethereum, "any");
       const signer = provider.getSigner();
       const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
       const nft = await contract.getAllNFT();
       return nft
    } catch (error) {
        console.log(error);
    }
}
