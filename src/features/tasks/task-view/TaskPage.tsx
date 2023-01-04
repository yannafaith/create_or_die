import React from "react";
import {TaskPageCtn} from "../task_styles.jsx";
import {TaskList} from "./TaskList";
import {WalletConnection} from "../../WalletConnection";

const TaskPage = () => {
    return (
        <TaskPageCtn>
            <WalletConnection/>
            <TaskList />
        </TaskPageCtn>
    );
}

export default TaskPage;