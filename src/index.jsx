import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase/firebase-config";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<FirebaseAppProvider firebaseConfig={firebaseConfig}>
		<BrowserRouter>
			<React.StrictMode>
				<GlobalStyle />
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</FirebaseAppProvider>,
);

