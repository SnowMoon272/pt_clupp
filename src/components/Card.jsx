import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
	border: solid purple 3px;

	box-sizing: border-box;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 100px;
		height: 100px;
	}
`;
function Card({ info }) {
	// console.log(info);
	return (
		<CardStyle>
			<h1>Hola soy {info.brand}</h1>
			<img src={info.frontPictureURL} alt="Veicle" />
		</CardStyle>
	);
}

export default Card;
