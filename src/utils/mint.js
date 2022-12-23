import { ethers } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "./constants";
import "dotenv";


export default async function mint(name, description) {
  try {
   
    const { ethereum } = window;
    if (window) {
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    const mintTxn = await contract.mint(name, description);
    await mintTxn.wait();
    console.log('mint done')
    }
  } catch (error) {
    console.log(error);
  }
}