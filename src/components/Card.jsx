import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { updateDocument } from "../firebase/firebase-config";

const CardStyle = styled.div`
	box-sizing: border-box;
	position: relative;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	& .DeleteIconBTN {
		position: absolute;
		top: 30px;
		right: 10px;
		background-color: red;
		border-radius: 50%;
		padding: 7px;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		:hover {
			transition: all ease 0.4s;
			transform: scale(1.1);
		}

		& .DeleteIcon {
			width: 27px;
			height: 27px;
			color: white;
		}
	}

	& img {
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

function Card({ brand, frontPictureURL, model, year, id }) {
	const handlerClick = (e) => {
		try {
			updateDocument(id);
			alert("Vehículo eliminado");
		} catch (error) {
			const errorMessage = error.message;
			alert(errorMessage);
		}
	};
	return (
		<CardStyle>
			<button onClick={(e) => handlerClick(e)} className="DeleteIconBTN">
				<DeleteIcon className="DeleteIcon" />
			</button>
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
