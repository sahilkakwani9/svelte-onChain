import { ethers } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "./constants";
import "dotenv";


export default async function trainNFT(tokenId){
    try {
        const { ethereum } = window;
       const provider = new ethers.providers.Web3Provider(ethereum, "any");
       const signer = provider.getSigner();
       const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
       const train = await contract.trainNFT(tokenId);
       await train.wait();
       console.log("trained NFT")
    } catch (error) {
        console.log(error);
    }
}
