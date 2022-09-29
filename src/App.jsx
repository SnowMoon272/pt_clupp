import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import CrearAuto from "./routes/CrearAuto";
import IniciarSesion from "./routes/IniciarSesion";
import Header from "./components/Header";
import { fabClasses } from "@mui/material";

const AppStyle = styled.div`
	box-sizing: border-box;
	border: solid blue 3px;
	width: 100%;
	height: 100vh;
`;

function App() {
	const [user, setuser] = useState(fabClasses);
	console.log(user);

	return (
		<AppStyle>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home user={user} />} />
				<Route exact path="/crearAuto" element={<CrearAuto />} />
				<Route exact path="/iniciarSesion" element={<IniciarSesion setuser={setuser} />} />
			</Routes>
		</AppStyle>
	);
}

export default App;

