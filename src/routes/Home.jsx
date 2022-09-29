/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Search from "../components/Search";
import Cards from "../components/Cards";

const HomeStyle = styled.div`
	border: solid red 3px;

	box-sizing: border-box;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;

	& .HomeStyleContainer {
		border: solid yellow 3px;

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
				"https://firebasestorage.googleapis.com/v0/b/pt-clupp.appspot.com/o/9f96b50f-3d37-476d-b808-cafab37d77ab?alt=media&token=6c84fbe4-2276-488c-b28a-2aeda8e0d3fa",
			model: "12G",
			timestamp: 1664459869094,
			year: "2021",
		},
		{
			brand: "Jaguar",
			deleted: false,
			frontPictureURL:
				"https://firebasestorage.googleapis.com/v0/b/pt-clupp.appspot.com/o/9f96b50f-3d37-476d-b808-cafab37d77ab?alt=media&token=6c84fbe4-2276-488c-b28a-2aeda8e0d3fa",
			model: "12G",
			timestamp: 1664459869094,
			year: "2022",
		},
		{
			brand: "Jaguar",
			deleted: true,
			frontPictureURL:
				"https://firebasestorage.googleapis.com/v0/b/pt-clupp.appspot.com/o/9f96b50f-3d37-476d-b808-cafab37d77ab?alt=media&token=6c84fbe4-2276-488c-b28a-2aeda8e0d3fa",
			model: "12G",
			timestamp: 1664459869094,
			year: "2023",
		},
		{
			brand: "Jaguar",
			deleted: false,
			frontPictureURL:
				"https://firebasestorage.googleapis.com/v0/b/pt-clupp.appspot.com/o/9f96b50f-3d37-476d-b808-cafab37d77ab?alt=media&token=6c84fbe4-2276-488c-b28a-2aeda8e0d3fa",
			model: "12G",
			timestamp: 1664459869094,
			year: "2024",
		},
		{
			brand: "Jaguar",
			deleted: false,
			frontPictureURL:
				"https://firebasestorage.googleapis.com/v0/b/pt-clupp.appspot.com/o/9f96b50f-3d37-476d-b808-cafab37d77ab?alt=media&token=6c84fbe4-2276-488c-b28a-2aeda8e0d3fa",
			model: "12G",
			timestamp: 1664459869094,
			year: "2025",
		},
		{
			brand: "Jaguar",
			deleted: false,
			frontPictureURL:
				"https://firebasestorage.googleapis.com/v0/b/pt-clupp.appspot.com/o/9f96b50f-3d37-476d-b808-cafab37d77ab?alt=media&token=6c84fbe4-2276-488c-b28a-2aeda8e0d3fa",
			model: "12G",
			timestamp: 1664459869094,
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
