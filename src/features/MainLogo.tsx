import React from "react";
import styled from "styled-components";
import {Subh2} from "../styles/headers";

//<editor-fold desc="Styled Components">
const LogoHeader = styled(Subh2)`
	box-sizing: border-box;
	margin-left: 20px;
	border: 5px solid red;
	
	display: flex;
	align-items: center;
	justify-content: center;
 
	letter-spacing: 3px;
`;
const SkullEmoji = styled.span`
  border: 1px solid red;
  font-size: 1.5em;

`;
//</editor-fold>

// ToDo: Make into higher order component
export const MainLogo = () => {
	return (
		<LogoHeader>
			cr8or<SkullEmoji role="img" aria-label="skull and bones emoji" >☠️</SkullEmoji>
		</LogoHeader>
	);
};