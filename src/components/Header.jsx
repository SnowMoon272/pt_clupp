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

	@media (max-width: 360px) {
		height: 17%;

		& .headerLogo {
			align-self: center;
			margin: 0px;
		}
	}

	@media (max-height: 500px) {
		height: 25%;
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
