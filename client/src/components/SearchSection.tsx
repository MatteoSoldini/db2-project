import { TextField } from "@mui/material";
import { useState } from "react";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const GET_MOVIES = gql(`
	query getMovies($where: MovieWhere) {
		movies(where: $where) {
			movieId
			title
			year
			poster
			imdbRating
		}
	}
`);

const SearchSection = () => {
	const navigate = useNavigate();
	const [searchingTitle, setSearchingTitle] = useState("");
	const { loading, error, data } = useQuery(GET_MOVIES, {
		variables: {
			where: {
				title_CONTAINS: searchingTitle,
			},
		},
	});

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<TextField
				label={"Movie Title"}
				value={searchingTitle}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					setSearchingTitle(event.target.value);
				}}
			/>
			{loading ? (
				<p>Loading...</p>
			) : searchingTitle === "" ? null : data?.movies.length === 0 ? (
				<p>No movie found</p>
			) : (
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						gap: "1rem",
					}}
				>
					{data?.movies.map((movie) => (
						<div key={movie.movieId}>
							{movie.poster ? (
								<img
									onClick={() => navigate("/detail/" + movie.movieId)}
									style={{ width: "100%" }}
									src={movie.poster}
								/>
							) : null}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchSection;
