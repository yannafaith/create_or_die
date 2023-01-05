import styled from "styled-components";
import React from "react";
import {Task} from "../task_types";

export const TaskCtn = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  width: 400px;
  
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  
  display: flex;
  flex-direction: column;
  align-items: center;

`
export const TaskPreview = (task: Task) => {
	// ToDo: Convert mock dollar amount to Hexes
	// const pledge = web3.utils.fromWei((task.pledge._hex), "ether" );
	return (
		<TaskCtn>
			<p>#{task.id}: {task.description} for ${task.pledge._hex} </p>
		</TaskCtn>
	)
}

