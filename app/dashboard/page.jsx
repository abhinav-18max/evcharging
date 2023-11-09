import './dashboard.css'
import Charging from '../../contracts/evcharging.json'
import getMetamask from "@/lib/getMetamask";
const abi = Charging.abi;


export default function Dash(){
    const contractAddress = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8"

    const transact= async()=>{
     const metamask = await getMetamask();
     const signer= await metamask.getSigner(0);
     const contract = new ethers.Contract(contractAddress, abi, signer);
     const contractwithsigner = contract.connect(signer);
     const transaction = await contractwithsigner.transfer();
     await transaction.wait();
     console.log(transaction)

    }

    return(<>
    <div id="charge">
        <h1>Current Charge/Unit Price: $0.10</h1>
    </div>

    <div id="credits">
        <h2>Credits: 5.00</h2>
    </div>

    <div id="payment">
        <button id="proceedToPayment">Proceed to Payment</button>
    </div>
    
    </>)
}