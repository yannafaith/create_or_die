import abi from '../utils/ToDoPortal.json';
import React, {useEffect, useState} from 'react';
import web3 from "web3";
import { ethers } from "ethers";

import styled from 'styled-components';
import {PageCtn} from "../styles/containers";
import {SubHeader} from "../styles/headers";
import {StartBtn} from "../styles/buttons";

const ToDoFomCtn = styled.form`
    display: flex;
    flex-direction: column;
    height: 250px;

    input {
        width: 900px;
        height: 75px;
        font-size: 1rem;
        margin-bottom: 20px;
    }
`;
const ToDoH1 = styled(SubHeader)`
    margin-bottom: 20px;
`;
const ToDoBtn = styled(StartBtn)``;
const OpenTaskList = styled.ul`
    margin-top: 20px;
    border: 1px solid black;
    width: 900px;
    height: 300px;
`;

function TodoList() {

    const contractAddress = "0x66e3CE8e2b21941a34F580C18Ed9adDb55003441";
    const contractABI = abi.abi;

    const [todos, setTodos] = useState([]);
    const [escrow, setEscrow] = useState(0);
    const [newTodo, setNewTodo] = useState('');
    const [currentAccount, setCurrentAccount] = useState("");

    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window;
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

    const getTasks = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const todoContract = new ethers.Contract(contractAddress, contractABI, signer);
                const tasks = await todoContract.getOpenTasks();
                console.log(tasks[0].timestamp)
                setTodos(tasks);
            } else {
                console.log("Ethereum object doesn't exist!")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const createTask = async () => {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const todoContract = new ethers.Contract(contractAddress, contractABI, signer);
        await todoContract.newTask(newTodo, { gasLimit: 300000,value: ethers.utils.parseEther(escrow.toString()) } );
    }

    function handleTodoChange(event) {
        setNewTodo(event.target.value);
    }

    function handleEscrowChange(event) {
        setEscrow(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        createTask().then(() => getTasks()).catch(e => console.log(e));
        setTodos([...todos, { text: newTodo, amt: escrow, completed: false }]);
        setNewTodo('');
    }

    // function toggleCompleted(index) {
    //     const newTodos = [...todos];
    //     newTodos[index].completed = !newTodos[index].completed;
    //     setTodos(newTodos);
    // }

    useEffect(() => {
        checkIfWalletIsConnected().catch(e => console.log(e));
        getTasks().catch(e => console.log(e));
    }, [])

    return (
        <PageCtn>
            <h1>Welcome, {currentAccount}</h1>
            <ToDoFomCtn onSubmit={handleSubmit}>
                <ToDoH1>New Task</ToDoH1>
                <input type="text" placeholder={"what do you need to do?"} onChange={handleTodoChange} />
                <input placeholder={"how much are you locking?"} onChange={handleEscrowChange}/>
                <ToDoBtn type="submit">Create</ToDoBtn>
            </ToDoFomCtn>
            <OpenTaskList>
                { todos.map((todo, index) => {
                    const pledge = web3.utils.fromWei((todo.pledge._hex), "ether" );
                    const task = todo.task;
                    // const time = new Date((timestamp));
                    return (
                        <li key={index}>
                            {/*<input type="checkbox" onChange={() => toggleCompleted(index)} />*/}
                            <span>Task: {task + " "}</span>
                            <span>Amt Locked: {pledge + " "}</span>
                            {/*<span>Timestamp: {time + " "}</span>*/}
                        </li>
                    )})
                }
            </OpenTaskList>
        </PageCtn>
    );
}

export default TodoList;