/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Search from "../components/Search";
import Cards from "../components/Cards";

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
	const infoMok = [
		{
			brand: "Jaguar",
			deleted: false,
			frontPictureURL:
				"https://firebasestorage.googleapis.com/v0/b/pt-clupp.appspot.com/o/Ford-Ka-frente.jpg?alt=media&token=7ec0cd8a-c2c6-4997-9906-8201b0d8393d",
			model: "12G",
			timestamp: 166449869094,
			year: "2021",
		},
		{
			brand: "Jaguar",
			deleted: false,
			frontPictureURL:
				"https://firebasestorage.googleapis.com/v0/b/pt-clupp.appspot.com/o/Ford-Ka-frente.jpg?alt=media&token=7ec0cd8a-c2c6-4997-9906-8201b0d8393d",
			model: "12G",
			timestamp: 166445989094,
			year: "2022",
		},
		{
			brand: "Jaguar",
			deleted: true,
			frontPictureURL:
				"https://firebasestorage.googleapis.com/v0/b/pt-clupp.appspot.com/o/Ford-Ka-frente.jpg?alt=media&token=7ec0cd8a-c2c6-4997-9906-8201b0d8393d",
			model: "12G",
			timestamp: 164459869094,
			year: "2023",
		},
		{
			brand: "Jaguar",
			deleted: false,
			frontPictureURL:
				"https://firebasestorage.googleapis.com/v0/b/pt-clupp.appspot.com/o/Ford-Ka-frente.jpg?alt=media&token=7ec0cd8a-c2c6-4997-9906-8201b0d8393d",
			model: "12G",
			timestamp: 166445986904,
			year: "2024",
		},
		{
			brand: "Jaguar",
			deleted: false,
			frontPictureURL:
				"https://firebasestorage.googleapis.com/v0/b/pt-clupp.appspot.com/o/Ford-Ka-frente.jpg?alt=media&token=7ec0cd8a-c2c6-4997-9906-8201b0d8393d",
			model: "12G",
			timestamp: 664459869094,
			year: "2025",
		},
		{
			brand: "Jaguar",
			deleted: false,
			frontPictureURL:
				"https://firebasestorage.googleapis.com/v0/b/pt-clupp.appspot.com/o/Ford-Ka-frente.jpg?alt=media&token=7ec0cd8a-c2c6-4997-9906-8201b0d8393d",
			model: "12G",
			timestamp: 16644598694,
			year: "2026",
		},
	];

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
	}, []);

	return (
		<HomeStyle>
			<div className="HomeStyleContainer">
				<Search />
				<Cards infoMok={infoMok} />
			</div>
		</HomeStyle>
	);
}

export default Home;
