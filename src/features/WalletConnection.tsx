import {WalletAddress} from "./tasks/task_styles";
import React, {useEffect, useState} from "react";
import {ethereum} from "./tasks/task_feature_config";

export const WalletConnection = () => {
    const [currentAccount, setCurrentAccount] = useState<string>("");
    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) {
                console.log("Make sure you have metamask!");
                return;
            }
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account:", account);
                setCurrentAccount(account);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        checkIfWalletIsConnected().catch(e => console.log(e));
    }, []);
    return (
        <WalletAddress>
            <h1>Welcome, {currentAccount}</h1>
        </WalletAddress>
    )
}