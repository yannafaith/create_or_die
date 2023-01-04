// import {OpenTaskList} from "../task_styles";
import {Task} from "../task_types";
import {TaskPreview} from "./TaskPreview";
import React, {useEffect, useState} from "react";
import {ethereum} from "../task_feature_config";
import {makeMockTasks} from "../task_mock_data";
import styled from "styled-components";

export const OpenTaskList = styled.ul`
    margin-top: 50px;
    margin-bottom: 50px;
    border: 1px solid blue;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: scroll;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const getTasks = async () => {
        try {
            if (ethereum) {
                // const tasks = await taskContract.getOpenTasks();
                const tasks = makeMockTasks(200);
                setTasks(tasks);
            } else {
                console.log("Ethereum object doesn't exist!")
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTasks().catch(e => console.log(e));
    }, [tasks])

    return (
        <OpenTaskList>
            {tasks.map((task:Task, index:number) =>
                <TaskPreview
                    id={task.id}
                    address={task.address}
                    description={task.description}
                    pledge={task.pledge}
                    created_at={task.created_at}
                    type={task.type}
                    deadline={task.deadline}
                    key={index}
                />
            )}
        </OpenTaskList>
    )
}