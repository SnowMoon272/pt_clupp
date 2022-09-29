/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const HomeStyle = styled.div``;

function Home() {
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
			<h1>Hola soy Home</h1>
			<Link to={"/crearAuto"}>Añadir Veiculo</Link>
		</HomeStyle>
	);
}

export default Home;
