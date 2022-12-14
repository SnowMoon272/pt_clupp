import styled from "styled-components";

export const IniciarSesionStyle = styled.section`
	box-sizing: border-box;
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

		& p {
			font-size: 1.2rem;

			& .btnState {
				background-color: white;
				border: none;
				color: #00a2ff;
				cursor: pointer;
				font-size: 1.2rem;
				letter-spacing: 0.8px;
			}
		}
	}

	@media (max-width: 360px) {
		align-items: flex-start;

		& .formContainer {
			box-sizing: border-box;
			width: 100%;
			height: 60%;

			& h1 {
				font-size: 3rem;
				font-weight: bold;
				margin: 0px;
			}

			& p {
				font-size: 1.4rem;

				& .btnState {
					font-size: 1.4rem;
					letter-spacing: 0.8px;
				}
			}
		}
	}

	@media (max-height: 460px) {
		height: 100%;
	}
`;

export const CrearAutoStyle = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 87%;
	display: flex;
	justify-content: center;
	align-items: center;

	& .Container {
		box-sizing: border-box;
		width: 70%;
		height: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		& h1 {
			font-size: 4.5rem;
			margin: 10px 0px;
			font-weight: 400;
		}

		& .infoContainer {
			box-sizing: border-box;
			width: 85%;
			height: 50%;
			display: flex;
			align-items: center;

			& .imgContainer {
				position: relative;

				width: 50%;
				height: 90%;
				margin: 20px;
				display: flex;
				flex-direction: column;

				& img {
					border: solid black 1px;
					border-radius: 15px;
					width: 100%;
					height: 100%;
				}

				& .inputFile {
					position: absolute;
					bottom: -30px;
					width: fit-content;
					left: 0px;
					right: 0px;
					margin: auto;
					font-size: 1.2rem;
					font-weight: 600;
					cursor: pointer;
				}
			}

			& .formulario {
				width: 50%;
				height: 90%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin: 20px;

				& .input {
					width: 100%;
					input {
						outline: none;
						width: 100%;
						height: 65px;
					}
				}
			}
		}

		& .a??adirVeiculo {
			display: flex;
			align-self: flex-end;
			margin: 0px 9%;
			justify-content: center;
			align-items: center;
		}
	}

	@media (max-width: 360px) {
		width: 100%;
		align-items: flex-start;

		& .Container {
			width: 100%;
			justify-content: flex-start;

			& h1 {
				font-size: 3.2rem;
				margin: 25px 0px 35px 0px;
				font-weight: 600;
				text-align: center;
			}

			& .infoContainer {
				width: 90%;
				height: 60%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-start;

				& .imgContainer {
					width: 90%;

					& img {
						width: 100%;
					}

					& .inputFile {
						top: -30px;
						width: 50%;
					}
				}

				& .formulario {
					width: 90%;
					margin: 0px;

					& .input {
						width: 100%;
						margin: 15px 0px;

						input {
							width: 100%;
							height: 50px;
						}
					}
				}
			}

			& .a??adirVeiculo {
				position: relative;
				top: 220px;
				display: flex;
				align-self: center;
				margin: 0px;
				font-size: 1.6rem;
				width: 45%;
			}
		}
	}

	@media (max-height: 500px) {
		height: 125%;
	}
`;

export const ButtonStyle = styled.button`
	border: none;
	width: 250px;
	height: 50px;
	background: #00bbee;
	border-radius: 8px;
	color: white;
	font-size: 2.2rem;
	font-weight: 600;
	cursor: pointer;
	/* position: absolute; */

	@media (max-width: 360px) {
		width: 180px;
		height: 45px;
		font-size: 2rem;
		position: relative;
		left: 20%;
	}
`;

export const FormStyle = styled.form`
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
			outline: none;
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

	@media (max-width: 360px) {
		width: 85%;

		& .input {
			width: 100%;
			&__field {
				box-sizing: border-box;
				height: 50px;
				width: 100%;
			}
		}
	}
`;
