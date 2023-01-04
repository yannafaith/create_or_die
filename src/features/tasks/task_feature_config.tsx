import {ethers} from "ethers";
import abi from "./ToDoPortal.json";

const contractAddress = "0x66e3CE8e2b21941a34F580C18Ed9adDb55003441";
const contractABI = abi.abi;

// @ts-ignore
export const { ethereum } = window;
export const provider = new ethers.providers.Web3Provider(ethereum);
export const signer = provider.getSigner();
export const taskContract = new ethers.Contract(contractAddress, contractABI, signer);
