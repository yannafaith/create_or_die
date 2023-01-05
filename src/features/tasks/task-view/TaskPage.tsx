import React from "react";
import {TaskList} from "./TaskList";
import styled from "styled-components";
import {PageCtn} from "../../../styles/containers";

export const TaskPageCtn = styled(PageCtn)``;

const TaskPage = () => {
    return (
        <TaskPageCtn>
            <TaskList />
        </TaskPageCtn>
    );
}

export default TaskPage;