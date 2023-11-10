"use client"
import './dashboard.css'
import {ethers} from "ethers"
import Charging from '../../contracts/evcharging.json'
import getMetamask from "@/lib/getMetamask";
const Abi = Charging.output.abi;


export default function Dash(){
    const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';

    const transact= async()=>{
      await console.log(Charging);
     const metamask = await new ethers.BrowserProvider(ethereum,"any");  
     const signer= await metamask.getSigner();
     const contract =await new ethers.Contract(contractAddress, Abi, signer);
     const contractwithsigner = contract.connect(signer);
     const transaction = await contractwithsigner.transfer('0xC4C7AACE8A168B7DCdD0dD0bded0D1F329aaD1dc',5);
     await transaction.wait();
     console.log(transaction)

    }

    return(<>
 
<div id="full">
  <div id="content-box">
    <nav id="navbar">
      <div id="left-link">Current Charge/Unit Price</div>
      <div id="right-link">Wallet Balance</div>
    </nav>

    <div id="container">
      <div id="charge-info">
        <div id="current-charge">
          Current Charge: Rs. <span id="charge-value">50</span>
        </div>
      </div>

      <div id="wallet">
        <div id="wallet-balance">
          Wallet Balance: Rs. <span id="wallet-value">100</span> <img src="wallet_icon.png" alt="Wallet Icon"/>
        </div>
      </div>

      <div id="combined-box">
        <div id="credits-earned">
          Credits Earned: Rs. <span id="credits-value">5</span>
        </div>

        <div id="charger-status">
          Charger Status: Available 
        </div>

        <div id="proceed-to-payment">
          <button onClick={transact}>Proceed to Payment</button>
        </div>
      </div>
    </div>
  </div>
  </div>



    
    </>);
}