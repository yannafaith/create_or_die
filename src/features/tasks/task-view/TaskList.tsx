import {Task} from "../config/task_types";
import {TaskPreview} from "./TaskPreview";
import React, {useEffect, useState} from "react";
import {ethereum} from "../config/task_feature_config";
import {makeMockTasks} from "../config/task_mock_data";
import styled from "styled-components";

export const OpenTaskList = styled.ul`
    box-sizing: border-box;
    //border: 1px solid blue;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    flex-wrap: wrap;
    overflow: scroll;
`;

export const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const getTasks = async () => {
        try {
            if (ethereum) {
                // const tasks = await taskContract.getOpenTasks();
                const tasks = makeMockTasks(20);
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
    }, [])

    return (
        <OpenTaskList>
            {tasks.map((task:Task, index:number) =>
                <TaskPreview
                    id={index}
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