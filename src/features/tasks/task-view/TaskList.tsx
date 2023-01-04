import {OpenTaskList} from "../task_styles";
import {Task} from "../task_types";
import {TaskCmpt} from "./TaskCmpt";
import React, {useEffect, useState} from "react";
import {ethereum} from "../task_feature_config";
import {mockTask} from "../task_mock_data";

export const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const getTasks = async () => {
        try {
            if (ethereum) {
                // const tasks = await taskContract.getOpenTasks();
                setTasks([mockTask]);
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
            {tasks.map((task:Task, index:number) => <TaskCmpt
                id={task.id}
                address={task.address}
                description={task.description}
                pledge={task.pledge}
                timestamp={task.timestamp}
                key={index}/>
            )}
        </OpenTaskList>
    )
}