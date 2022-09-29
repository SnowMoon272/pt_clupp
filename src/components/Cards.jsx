import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardsStyle = styled.div`
	/* border: solid green 3px; */

	box-sizing: border-box;
	width: 100%;
	height: fit-content;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

function Cards({ infoFirebase }) {
	return (
		<CardsStyle>
			{infoFirebase?.map((element) => {
				return (
					!element.deleted && (
						<Card
							brand={element.brand}
							frontPictureURL={element.frontPictureURL}
							model={element.model}
							year={element.year}
							key={element.timestamp}
						/>
					)
				);
			})}
		</CardsStyle>
	);
}

export default Cards;
