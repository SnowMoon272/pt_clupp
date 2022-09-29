import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardsStyle = styled.div`
	border: solid green 3px;

	box-sizing: border-box;
	width: 100%;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

function Cards({ infoMok }) {
	return (
		<CardsStyle>
			{infoMok.map((element) => {
				return !element.deleted && <Card info={element} />;
			})}
		</CardsStyle>
	);
}

export default Cards;
