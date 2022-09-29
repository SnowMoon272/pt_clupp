/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { CrearAutoStyle, ButtonStyle, FormStyle } from "../styles/styles";
import ImgAuto from "../assets/img/no-photo.png";
import { uploadFile, uploadDocument } from "../firebase/firebase-config";

function CrearAuto() {
	const auth = getAuth();
	const navigate = useNavigate();
	const [imagen, setimagen] = useState(false);
	const [info, setinfo] = useState({
		brand: "",
		model: "",
		year: 0,
		frontPictureURL: "",
		timestamp: 0,
		deleted: false,
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
		const date = Date.now();
		setinfo({ ...info, [e.target.name]: e.target.value, timestamp: date });
	};

	const handlerImg = async (e) => {
		e.preventDefault();
		const imagenRnder = URL.createObjectURL(e.target.files[0]);
		setimagen({ img: imagenRnder, file: e.target.files[0] });
		const result = await uploadFile(e.target.files[0]);
		setinfo({ ...info, frontPictureURL: result });
	};

	const handlerSubmit = (e) => {
		e.preventDefault();

		try {
			uploadDocument(info);
			alert("Documento Creado.");
			navigate("/");
		} catch (error) {
			const errorMessage = error.message;
			alert(errorMessage);
		}
	};

	return (
		<CrearAutoStyle>
			<div className="Container">
				<h1>Añadir Vehículo</h1>
				<div className="infoContainer">
					<div className="imgContainer">
						<img src={imagen ? imagen.img : ImgAuto} alt="auto" />
						<input className="inputFile" type="file" onChange={(e) => handlerImg(e)} />
					</div>
					<FormStyle className="formulario">
						<label className="input">
							<input
								autoComplete="off"
								onChange={(e) => handlerChange(e)}
								name="brand"
								value={info.brand}
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
								name="model"
								value={info.model}
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
								name="year"
								value={info.year}
								className="input__field"
								type="number"
								placeholder=" "
							/>
							<span className="input__label">Año</span>
						</label>
					</FormStyle>
				</div>
				<ButtonStyle onClick={(e) => handlerSubmit(e)} className="añadirVeiculo">
					Añadir Vehículo
				</ButtonStyle>
			</div>
		</CrearAutoStyle>
	);
}

export default CrearAuto;
