/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Search from "../components/Search";
import Cards from "../components/Cards";
import { getDocuments } from "../firebase/firebase-config";

const HomeStyle = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;

	& .HomeStyleContainer {
		/* border: solid yellow 3px; */

		box-sizing: border-box;
		width: 85%;
	}
`;

function Home() {
	const [infoFirebase, setinfoFirebase] = useState([]);

	const auth = getAuth();
	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(user.email);
			} else {
				navigate("/iniciarSesion");
			}
		});

		getDocuments()
			.then((data) => {
				const info = data;
				setinfoFirebase(info);
			})
			.catch((error) => {
				const errorMessage = error.message;
				alert(errorMessage);
			});
	}, []);

	return (
		<HomeStyle>
			<div className="HomeStyleContainer">
				<Search />
				<Cards infoFirebase={infoFirebase} />
			</div>
		</HomeStyle>
	);
}

export default Home;
