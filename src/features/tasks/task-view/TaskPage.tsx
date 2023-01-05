import React from "react";
import {TaskList} from "./TaskList";
import {WalletConnection} from "../../WalletConnection";
import {Subh3} from "../../../styles/headers";
import styled from "styled-components";
import {PageCtn} from "../../../styles/containers";

export const TaskPageCtn = styled(PageCtn)``;
const YourOpenTasks = styled(Subh3)`
  padding: 10px;
`;

const TaskPage = () => {
    return (
        <TaskPageCtn>
            <WalletConnection />
            <YourOpenTasks>Your Open Tasks</YourOpenTasks>
            <TaskList />
        </TaskPageCtn>
    );
}

export default TaskPage;