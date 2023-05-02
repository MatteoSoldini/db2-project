import "./App.css";

// Apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import SearchSection from "./components/SearchSection";

import { Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

export const client = new ApolloClient({
	uri: "http://localhost:4000/",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div
				style={{
					display: "flex",
					marginLeft: "10vw",
					marginRight: "10vw",
					marginTop: "1rem",
					marginBottom: "1rem",
					flexDirection: "column",
					gap: "1rem",
				}}
			>
				<Routes>
					<Route path="/" element={<SearchSection />} />
					<Route path="/detail/:movieId" element={<MovieDetail />} />
				</Routes>
			</div>
		</ApolloProvider>
	);
}

export default App;
