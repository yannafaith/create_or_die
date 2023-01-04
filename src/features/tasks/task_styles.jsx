//<editor-fold desc="styled components">
import styled from "styled-components";
import {StartBtn} from "../../styles/buttons.jsx";
import {PageCtn} from "../../styles/containers.jsx";
import {SubHeader} from "../../styles/headers.jsx";

export const ToDoForm = styled.form`
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
export const ToDoH1 = styled(SubHeader)`
    margin-bottom: 20px;
`;
export const ToDoBtn = styled(StartBtn)``;
export const OpenTaskList = styled.ul`
    margin-top: 20px;
    border: 1px solid black;
    width: 900px;
    height: 300px;
`;
export const WalletAddress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;
export const TaskPageCtn = styled(PageCtn)``;
//</editor-fold>