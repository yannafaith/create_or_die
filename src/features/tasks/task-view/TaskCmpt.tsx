import styled from "styled-components";
import web3 from "web3";
import React from "react";
import {Task} from "../task_types";

export const TaskCtn = styled.div`
    border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: column;
`

export const TaskCmpt = (task: Task) => {
    const pledge = web3.utils.fromWei((task.pledge._hex), "ether" );
    return (
        <TaskCtn>
            <h3>{pledge}</h3>
            <p>{task.id}</p>
            <p>{task.description}</p>
            <p>{task.address}</p>
            <p>{task.timestamp}</p>
        </TaskCtn>
    )
}

