import React from "react";
import styled from "styled-components";
import {Subh2} from "../../styles/headers";
import {LargeSpan} from "../../styles/spans";

//<editor-fold desc="Styled Components">
const LogoHeader = styled(Subh2)`
	box-sizing: border-box;
	margin-left: 20px;
	//border: 5px solid red;
	
	display: flex;
	align-items: center;
	justify-content: center;
 
	letter-spacing: 3px;

`;
const CreateSpan = styled(LargeSpan)``;
const OrSpan = styled(LargeSpan)`
	color: indianred;
  	font-size: 20px
`;
const SkullSpan = styled(LargeSpan)`
	font-size: 1.5em;
`;
//</editor-fold>

// ToDo: Make into higher order component
export const MainLogo = () => {
	return (
		<LogoHeader>
			<SkullSpan>C</SkullSpan>
			<CreateSpan>r8</CreateSpan>
			<OrSpan>Or</OrSpan>
			<SkullSpan
				role="img"
				aria-label="skull and bones emoji"
			>☠️
			</SkullSpan>
		</LogoHeader>
	);
};