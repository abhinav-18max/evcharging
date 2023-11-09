import {ethers} from "ethers";
export default function getMetamask() {
    if (typeof window !== "undefined") {
        const {ethereum} = window;
        if (!ethereum) {
            alert("Please install Metamask");
        }
        const ethersprovider = new ethers.providers.Web3Provider(ethereum, "sepola");
        return ethersprovider;
    }
}