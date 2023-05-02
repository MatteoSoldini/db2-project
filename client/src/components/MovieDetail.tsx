import { useNavigate, useParams } from "react-router-dom";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";

const GET_MOVIE_DETAIL = gql(`
  query Movies($where: MovieWhere) {
    movies(where: $where) {
      movieId
      title
      year
      poster
      plot
      imdbRating
      usersAlsoWatched {
        poster
        movieId
      }
    }
  }
`);

const MovieDetail = () => {
	const navigate = useNavigate();
	const { movieId } = useParams();
	const { loading, error, data } = useQuery(GET_MOVIE_DETAIL, {
		variables: {
			where: {
				movieId: movieId,
			},
		},
	});

	const movie = data?.movies[0];

	console.log(movie);

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<div
				style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "1rem" }}
			>
				{movie?.poster ? (
					<img style={{ width: "100%" }} src={movie.poster} />
				) : null}
				<div>
					<h1>{movie?.title}</h1>
					<h2>{movie?.imdbRating}</h2>
					<h3>{movie?.year}</h3>
					<p>{movie?.plot}</p>
				</div>
			</div>
			<h2>Users also watched</h2>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(5, 1fr)",
					gap: "1rem",
				}}
			>
				{movie?.usersAlsoWatched.map((rec) =>
					rec.poster ? (
						<img
							key={rec.movieId}
							onClick={() => navigate("/detail/" + rec.movieId)}
							style={{ width: "100%" }}
							src={rec.poster}
						/>
					) : null
				)}
			</div>
		</div>
	);
};

export default MovieDetail;
