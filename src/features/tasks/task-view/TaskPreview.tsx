import styled from "styled-components";
import React from "react";
import {Task} from "../task_types";

export const TaskCtn = styled.div`
  box-sizing: border-box;
  //border: 1px solid black;
  width: 350px;
  height: 175px;
  background-color: #f7f6f2;
  
  padding: 10px;
  padding-top: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  
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

