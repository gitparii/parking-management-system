import React, { useState } from 'react';
import '../styles/Wallet.css';

const Wallet = () => {
    const [balance, setBalance] = useState(0); // Initialize balance with 0

    return (
        <div>
            <div >
                <h1>Wallet</h1>
            </div>
            <div>
                <h3 className='balance'>Total Balance: {balance}</h3>
            </div>
            <div>
                <div>
                    {/* Add the clicked value to the current balance */}
                    <button onClick={() => setBalance(balance + 300)}>300</button>
                    <button onClick={() => setBalance(balance + 500)}>500</button>
                    <button onClick={() => setBalance(balance + 1000)}>1000</button>
                </div>
            </div>
        </div>
    );
}

export default Wallet;
