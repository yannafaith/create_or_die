import React from "react";
import styled from "styled-components";

const MadeWithLoveCtn = styled.div`
  letter-spacing: 10px;
  padding-left: 80px;
  font-size: 16px;
  font-weight: bold;
`;

const FooterCtn = styled.footer`
	height: 10vh;
  	background-color: black;
  	color: white;
  	display: flex;
  	flex-direction: row;
  	justify-content: flex-start;
  	align-items: center;
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