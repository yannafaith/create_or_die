import React from "react";
import styled from "styled-components";
import {Subh2} from "../styles/headers";


const MadeWithLoveCtn = styled(Subh2)`
  letter-spacing: 10px;
`;

const FooterCtn = styled.footer`
	height: 13vh;
  	background-color: black;
  	color: white;
  	display: flex;
  	flex-direction: row;
  	justify-content: center;
  	align-items: center;
    border: 5px solid red;
`;

export const Footer = () => {
	return (
		<FooterCtn>
			<MadeWithLoveCtn>
				Made with <span role="img" aria-label="heart emoji">❤️</span> and hyperfocus
			</MadeWithLoveCtn>
		</FooterCtn>
	)
}