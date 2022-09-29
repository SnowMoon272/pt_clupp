/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { CrearAutoStyle, ButtonStyle, FormStyle } from "../styles/styles";
import ImgAuto from "../assets/img/no-photo.png";

function CrearAuto() {
	const auth = getAuth();
	const navigate = useNavigate();
	const [info, setinfo] = useState({
		marca: "",
		modelo: "",
		año: "",
	});

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(user.email);
			} else {
				navigate("/iniciarSesion");
			}
		});
	}, []);

	const handlerChange = (e) => {
		e.preventDefault();
		setinfo(e.target.value);
	};

	return (
		<CrearAutoStyle>
			<div className="Container">
				<h1>Añadir Vehículo</h1>
				<div className="infoContainer">
					<img src={ImgAuto} alt="auto" />
					<FormStyle className="formulario">
						<label className="input">
							<input
								autoComplete="off"
								onChange={(e) => handlerChange(e)}
								name="marca"
								value={info.marca}
								className="input__field"
								type="text"
								placeholder=" "
							/>
							<span className="input__label">Marca</span>
						</label>
						<label className="input">
							<input
								autoComplete="off"
								onChange={(e) => handlerChange(e)}
								name="modelo"
								value={info.modelo}
								className="input__field"
								type="text"
								placeholder=" "
							/>
							<span className="input__label">Modelo</span>
						</label>
						<label className="input">
							<input
								autoComplete="off"
								onChange={(e) => handlerChange(e)}
								name="año"
								value={info.año}
								className="input__field"
								type="text"
								placeholder=" "
							/>
							<span className="input__label">Año</span>
						</label>
					</FormStyle>
				</div>
				<ButtonStyle className="añadirVeiculo">Añadir Vehículo </ButtonStyle>
			</div>
		</CrearAutoStyle>
	);
}

export default CrearAuto;
