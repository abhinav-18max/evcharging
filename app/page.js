
import './page.css';

export default function Home() {
    return (<>
        <div id="charge">
            Current Charge/Unit Price: $0.10
        </div>

        <div id="calculator">
            <input type="text" id="accountNumber" placeholder="Enter Account Number"/>
                <button id="enterButton">Enter</button>
        </div>
    </>)
}