import React, {useEffect, useState} from "react";
import {ethereum} from "./tasks/task_feature_config";
import styled from "styled-components";

export const WalletAddress = styled.div`
  box-sizing: border-box;
  width: inherit;
  height: 100px;
  
  //border: 1px solid red;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`;

/*
    ToDo: Add a button to connect to wallet
    ToDo: Refactor into custom hook?
 */

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
            <h2>Your pledged balance is $3000</h2>
        </WalletAddress>
    )
}