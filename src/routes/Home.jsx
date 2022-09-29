import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUser, useFirebaseApp } from "reactfire";

const HomeStyle = styled.div``;

function Home() {
	const navigate = useNavigate();

	const firebase = useFirebaseApp();
	const user = useUser();

	return (
		<HomeStyle>
			<h1>Hola soy Home</h1>
			<p>{user.email}</p>
		</HomeStyle>
	);
}

export default Home;
