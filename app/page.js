"use client";
import "./page.css";
import {ethers} from "ethers";

export default function Home() {
    const getMetamask = async () => {
        if (typeof window !== "undefined") {
            const {ethereum} = window;
            if (!ethereum) {
                alert("Please install Metamask");
            }
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            const provider = new ethers.providers.Web3Provider(ethereum, "sepola");
            const signer = provider.getSigner(0);
            localStorage.setItem("account", accounts[0]);
            console.log(accounts[0]);
        }
    };
    return(
        <>
            <div id="charge">
                Current Charge/Unit Price: $0.10
            </div>

            <div id="calculator">
                <button id="enterButton" onClick={getMetamask}>Connect to Metamask</button>
                <br />
                <input type="text" id="accountNumber" placeholder="Enter Account Number"/>
                <br />
                    <button id="enterButton">Enter</button>
            </div>
        </>
    )

}
