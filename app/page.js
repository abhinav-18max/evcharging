"use client";
import "./page.css";
import { ethers } from "ethers";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const getMetamask = async () => {
    if (typeof window !== "undefined") {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Please install Metamask");
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.BrowserProvider(ethereum, "sepolia");
      const signer = provider.getSigner(0);
      localStorage.setItem("account", accounts[0]);
      console.log(accounts[0]);
      router.push("/dashboard");
    }
  };
  return (
    <>
      <div id="full">
        <nav id="navbar">
          <div id="left-link"> Current Charge / Unit Price: 6.4 Rs </div>{" "}
          <div id="right-link"> Wallet Balance: 10 ETH </div>{" "}
        </nav>{" "}
        <div id="container">
          <div id="header"> EV Charging Portal </div>{" "}
          <div id="welcome"> Welcome to EV Charging Portal </div>{" "}
          <div id="map-container">
            <img
              src="https://www.researchgate.net/publication/347799272/figure/fig4/AS:1024435968565249@1621255976777/Location-of-charging-stations-in-Australia-derived-from-57_Q320.jpg"
              alt="Map"
            />
          </div>{" "}
          <div id="account-input">
            <label for="account-number"> Account Number: </label>{" "}
            <input type="text" id="account-number" name="account-number" />
          </div>{" "}
          <div id="submit-button">
            <input type="submit" onClick={getMetamask} value="Enter" />
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
