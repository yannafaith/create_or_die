import React from "react";
import {TaskList} from "./TaskList";
import {WalletConnection} from "../../WalletConnection";
import {SubHeader} from "../../../styles/headers";
import styled from "styled-components";
import {PageCtn} from "../../../styles/containers";
// import {TaskPageCtn} from "../task_styles.jsx";

export const TaskPageCtn = styled(PageCtn)``;

const TaskPage = () => {
    return (
        <TaskPageCtn>
            <WalletConnection/>
            <SubHeader>Your Open Tasks</SubHeader>
            <TaskList />
        </TaskPageCtn>
    );
}

export default TaskPage;