import {ToDoBtn, ToDoForm, ToDoH1} from "../task_styles";
import React, {useState} from "react";
import {ethers} from "ethers";
import {Task} from "../task_types";
import {taskContract} from "../task_feature_config";

export const TaskForm = () => {
    const [escrow, setEscrow] = useState<number>(0);
    const [newTodo, setNewTodo] = useState<Task|null>(null);

    function handleTodoChange(event: any) {
        setNewTodo(event.target.value);
    }

    function handleEscrowChange(event: any) {
        setEscrow(event.target.value);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        createTask().catch(e => console.log(e));
        setNewTodo(null);
    }

    const createTask = async () => {
        await taskContract.newTask(newTodo, { gasLimit: 300000,value: ethers.utils.parseEther(escrow.toString()) } );
    }

    return (
        <ToDoForm onSubmit={handleSubmit}>
            <ToDoH1>New Task Proposal</ToDoH1>
            <input type="text" placeholder={"what do you need to do?"} onChange={handleTodoChange}/>
            <input placeholder={"how much are you locking?"} onChange={handleEscrowChange}/>
            <ToDoBtn type="submit">Create</ToDoBtn>
        </ToDoForm>
    )
}
