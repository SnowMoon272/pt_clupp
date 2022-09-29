import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import CrearAuto from "./routes/CrearAuto";
import IniciarSesion from "./routes/IniciarSesion";
import { useFirebaseApp } from "reactfire";
import Header from "./components/Header";

const AppStyle = styled.div`
	box-sizing: border-box;
	border: solid blue 3px;
	width: 100%;
	height: 100vh;
`;

function App() {
	const firebase = useFirebaseApp();
	console.log(firebase);

	return (
		<AppStyle>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/crearAuto" element={<CrearAuto />} />
				<Route exact path="/iniciarSesion" element={<IniciarSesion />} />
			</Routes>
		</AppStyle>
	);
}

export default App;

