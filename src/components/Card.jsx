import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
	/* border: solid purple 3px; */

	box-sizing: border-box;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	& img {
		/* border: solid black 1px; */
		margin: 20px 0px 5px 0px;
		width: 370px;
		height: 275px;
		border-radius: 10px;
		box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.72);
		object-fit: cover;
	}

	& .infoTextCont {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		& .infoText {
			margin: 0px 10px 15px 10px;
			font-size: 2.4rem;
			font-weight: bold;
		}
	}
`;

function Card({ brand, frontPictureURL, model, year }) {
	return (
		<CardStyle>
			<img src={frontPictureURL} alt="Veicle" />
			<div className="infoTextCont">
				<p className="infoText">{brand}</p>
				<p className="infoText">{model}</p>
				<p className="infoText">{year}</p>
			</div>
		</CardStyle>
	);
}

export default Card;
