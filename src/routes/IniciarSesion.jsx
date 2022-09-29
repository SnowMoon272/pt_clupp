/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { IniciarSesionStyle, ButtonStyle, FormStyle } from "../styles/styles";

function IniciarSesion({ setuser }) {
	const navigate = useNavigate();
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	const [sesionRegitrar, setsesionRegitrar] = useState(true);
	const [eye, seteye] = useState(true);

	const handlerState = (e) => {
		e.preventDefault();
		setsesionRegitrar(!sesionRegitrar);
	};

	const handlerEye = (e) => {
		e.preventDefault();
		seteye(!eye);
	};

	const handlerChangeEmail = (e) => {
		e.preventDefault();
		setemail(e.target.value);
	};

	const handlerChangePass = (e) => {
		e.preventDefault();
		setpassword(e.target.value);
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		if (!sesionRegitrar) {
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					alert("Usuario Creado");
					navigate("/");
				})
				.catch((error) => {
					const errorMessage = error.message;
					alert(errorMessage);
				});
		} else {
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					alert("Usuario Logueado");
					navigate("/");
				})
				.catch((error) => {
					const errorMessage = error.message;
					alert(errorMessage);
				});
		}
	};

	return (
		<IniciarSesionStyle>
			<div className="formContainer">
				{sesionRegitrar ? <h1>Iniciar Sesión</h1> : <h1>Crear Cuenta</h1>}
				<FormStyle action="">
					<label className="input">
						<input
							autoComplete="off"
							onChange={(e) => handlerChangeEmail(e)}
							value={email}
							className="input__field"
							type="email"
							placeholder=" "
						/>
						<span className="input__label">Correo</span>
					</label>
					<br />
					<label className="input">
						<input
							autoComplete="off"
							onChange={(e) => handlerChangePass(e)}
							value={password}
							className="input__field"
							type={eye ? "password" : "text"}
							placeholder=" "
						/>
						<span className="input__label">Contraseña</span>
						{eye ? (
							<button onClick={(e) => handlerEye(e)} type="button" className="btnEye">
								<VisibilityIcon className="eye" />
							</button>
						) : (
							<button onClick={(e) => handlerEye(e)} type="button" className="btnEye">
								<VisibilityOffIcon className="eye" />
							</button>
						)}
					</label>
					<br />
					<ButtonStyle onClick={(e) => handlerSubmit(e)} type="submit">
						{sesionRegitrar ? "Iniciar Sesión" : "Registrarse"}
					</ButtonStyle>
				</FormStyle>
				{sesionRegitrar ? (
					<p>
						¿ Aún no tienes cuenta ?
						<button onClick={(e) => handlerState(e)} className="btnState">
							Registrate.
						</button>
					</p>
				) : (
					<p>
						¿ Ya tienes cuenta ?
						<button onClick={(e) => handlerState(e)} className="btnState">
							Inicia sesión.
						</button>
					</p>
				)}
			</div>
		</IniciarSesionStyle>
	);
}

export default IniciarSesion;
