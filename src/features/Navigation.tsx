import React from "react";
import {MainLogo} from "./MainLogo";
import styled from "styled-components";

const NavCtn = styled.nav`
  	box-sizing: border-box;
  	border: 1px solid black;
  	background-color: whitesmoke;

  	height: 7vh;
  	width: 100%;

  	display: flex;
  	flex-direction: row;
  	justify-content: space-between;
  	align-items: center;
`;

export const Navigation = () => {
	return (
		<NavCtn>
			<MainLogo />
		</NavCtn>
	)
}