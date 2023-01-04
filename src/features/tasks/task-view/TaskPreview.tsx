import styled from "styled-components";
import React from "react";
import {Task} from "../task_types";

export const TaskCtn = styled.div`
  border: 1px solid black;
  width: 320px;
  height: 50px;
  padding: 20px;
  margin-bottom: 20px;
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

