import React, { useState } from "react";
import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const IniciarSesionStyle = styled.section`
	box-sizing: border-box;
	border: solid red 3px;
	width: 100%;
	height: 87%;
	display: flex;
	justify-content: center;
	align-items: center;

	& .formContainer {
		box-sizing: border-box;
		width: 35%;
		height: 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;

		& h1 {
			font-size: 4.5rem;
			margin: 10px 0px;
			font-weight: 400;
		}

		& form {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 1.4rem;
			font-weight: 200;
			height: 50%;
			justify-content: space-around;

			& .input {
				position: relative;

				&__label {
					position: absolute;
					left: 8px;
					top: 4px;

					white-space: nowrap;
					transform: translate(0, 0);
					transform-origin: 0 0;
					transition: transform 120ms ease-in;
					font-weight: bold;
					line-height: 1.2;
				}
				&__field {
					box-sizing: border-box;
					height: 50px;
					width: 400px;
					display: block;
					border: 1px solid currentColor;
					border-radius: 5px;
					padding: 15px;
					color: currentColor;
					background: transparent;

					&:focus,
					&:not(:placeholder-shown) {
						& + .input__label {
							transform: translate(0.25rem, -65%) scale(0.8);
							background-color: white;
							padding: 0px 5px;
						}
					}
				}

				& .btnEye {
					border: none;
					width: fit-content;
					height: fit-content;
					background-color: white;
					position: absolute;
					right: 8px;
					top: 0px;
					bottom: 0px;
					margin: auto;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;

					& .eye {
						cursor: pointer;
						width: 35px;
						height: 35px;
					}
				}
			}

			& .btnSubmit {
				border: none;
				width: 250px;
				height: 50px;
				background: #00bbee;
				border-radius: 8px;
				color: white;
				font-size: 2.2rem;
				font-weight: 600;
				cursor: pointer;
			}
		}

		& p {
			font-size: 1.2rem;

			& .btnState {
				background-color: white;
				border: none;
				color: blue;
				cursor: pointer;
				font-size: 1.2rem;
				letter-spacing: 0.8px;
			}
		}
	}
`;

function IniciarSesion() {
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

	return (
		<IniciarSesionStyle>
			<div className="formContainer">
				{sesionRegitrar ? <h1>Iniciar Sesión</h1> : <h1>Crear Cuenta</h1>}
				<form action="">
					<label className="input">
						<input autoComplete="off" className="input__field" type="text" placeholder=" " />
						<span className="input__label">Correo</span>
					</label>
					<br />
					<label className="input">
						<input
							autoComplete="off"
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
					<button type="submit" className="btnSubmit">
						{sesionRegitrar ? "Iniciar Sesión" : "Registrarse"}
					</button>
				</form>
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
