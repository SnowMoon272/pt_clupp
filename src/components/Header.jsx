import React from "react";
import styled from "styled-components";
import LogoIMG from "../assets/img/logo-clupp.png";

const HeaderStyle = styled.header`
	border-bottom: solid black 1px;
	box-sizing: border-box;
	width: 100%;
	height: 13%;
	display: flex;
	flex-direction: column;

	& .headerLogo {
		display: flex;
		justify-self: center;
		align-self: flex-start;
		width: 200px;
		height: 120px;
		margin-left: 120px;
	}
`;

function Header() {
	return (
		<HeaderStyle>
			<img className="headerLogo" src={LogoIMG} alt="Logo" />
		</HeaderStyle>
	);
}

export default Header;
