const { gql, ApolloServer } = require("apollo-server");
const { Neo4jGraphQL } = require("@neo4j/graphql");
const neo4j = require("neo4j-driver");
require("dotenv").config();

const typeDefs = gql`
	type User {
		userId: ID! @id
		name: String
		ratings: [Movie!]!
			@relationship(type: "RATED", properties: "Rate", direction: OUT)
	}

	type Movie {
		movieId: ID!
		title: String
		year: Int
		imdbRating: Float
		poster: String
		plot: String
		ratings: [User!]!
			@relationship(type: "RATED", properties: "Rate", direction: IN)
		genres: [Genre!]! @relationship(type: "IN_GENRE", direction: OUT)
		usersAlsoWatched: [Movie!]!
			@cypher(
				statement: """
				MATCH (this)<-[:RATED]-(u:User)-[:RATED]->(rec:Movie)
				RETURN rec AS recommendation, COUNT(*) AS usersAlsoWatched
				ORDER BY usersAlsoWatched DESC LIMIT 5
				"""
			)
	}

	type Genre {
		name: String
		movies: [Movie!]! @relationship(type: "IN_GENRE", direction: IN)
	}

	interface Rate @relationshipProperties {
		rating: Float
	}
`;

const driver = neo4j.driver(
	process.env.NEO4J_URI,
	neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

neoSchema.getSchema().then((schema) => {
	const server = new ApolloServer({
		schema,
	});

	server.listen().then(({ url }) => {
		console.log(`🚀 Server ready at ${url}`);
	});
});
