import "./App.css";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import { Colors } from "./utils/theme/colors";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Team } from "./pages/Team/Team";
import { Competition } from "./pages/Competition/Competition";

function App() {
	return (
		<ThemeProvider theme={Colors}>
			<div className="App">
				<Header />
				<div className="main">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="teams/:id" element={<Team />} />
						<Route
							path="competitions/:id"
							element={<Competition />}
						/>
					</Routes>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
