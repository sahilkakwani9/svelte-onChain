import { BigNumber, ethers } from "ethers";

const connectWallet = async () => {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      throw new Error("Please Install Metamask");
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    let data;
    if ((await signer.getChainId()) !== 80001) {
      await provider.send("wallet_switchEthereumChain", [
        { chainId: "0x13881" },
      ]);
      data = {
        address: await signer.getAddress(),
        balance: await signer.getBalance(),
        chainId: await signer.getChainId(),
      };
      return data;
    }
    data = {
      address: await signer.getAddress(),
      balance: await signer.getBalance(),
      chainId: await signer.getChainId(),
    };
    return data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("user rejected signing")) {
        throw new Error("User Denied Signature Request");
      }
    }
  }
};
export default connectWallet;