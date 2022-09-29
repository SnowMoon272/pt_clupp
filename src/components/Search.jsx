import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchStyle = styled.header`
	box-sizing: border-box;

	width: 100%;
	height: auto;

	& .addCar {
		margin-top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 12%;
		height: 12%;
		padding: 6px 2px;
		font-size: 1.6rem;
		border: none;
		background: #00bbee;
		border-radius: 8px;
		color: white;
		font-weight: 600;
		cursor: pointer;
		text-decoration: none;
	}

	@media (max-width: 360px) {
		& .addCar {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 20%;
			padding: 12px 2px;
			font-size: 1.6rem;
			border-radius: 8px;
			color: white;
			font-weight: 600;
			cursor: pointer;
			text-decoration: none;
		}
	}
`;

function Search() {
	return (
		<SearchStyle>
			{/* <input type="text" /> */}
			<Link className="addCar" to={"/crearAuto"}>
				Añadir Veiculo
			</Link>
		</SearchStyle>
	);
}

export default Search;
