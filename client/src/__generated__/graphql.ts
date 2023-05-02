/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateGenresMutationResponse = {
  __typename?: 'CreateGenresMutationResponse';
  genres: Array<Genre>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreateMoviesMutationResponse = {
  __typename?: 'CreateMoviesMutationResponse';
  info: CreateInfo;
  movies: Array<Movie>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type FloatAggregateSelectionNullable = {
  __typename?: 'FloatAggregateSelectionNullable';
  average?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

export type Genre = {
  __typename?: 'Genre';
  movies: Array<Movie>;
  moviesAggregate?: Maybe<GenreMovieMoviesAggregationSelection>;
  moviesConnection: GenreMoviesConnection;
  name?: Maybe<Scalars['String']>;
};


export type GenreMoviesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MovieOptions>;
  where?: InputMaybe<MovieWhere>;
};


export type GenreMoviesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MovieWhere>;
};


export type GenreMoviesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<GenreMoviesConnectionSort>>;
  where?: InputMaybe<GenreMoviesConnectionWhere>;
};

export type GenreAggregateSelection = {
  __typename?: 'GenreAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelectionNullable;
};

export type GenreConnectInput = {
  movies?: InputMaybe<Array<GenreMoviesConnectFieldInput>>;
};

export type GenreConnectWhere = {
  node: GenreWhere;
};

export type GenreCreateInput = {
  movies?: InputMaybe<GenreMoviesFieldInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type GenreDeleteInput = {
  movies?: InputMaybe<Array<GenreMoviesDeleteFieldInput>>;
};

export type GenreDisconnectInput = {
  movies?: InputMaybe<Array<GenreMoviesDisconnectFieldInput>>;
};

export type GenreEdge = {
  __typename?: 'GenreEdge';
  cursor: Scalars['String'];
  node: Genre;
};

export type GenreMovieMoviesAggregationSelection = {
  __typename?: 'GenreMovieMoviesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<GenreMovieMoviesNodeAggregateSelection>;
};

export type GenreMovieMoviesNodeAggregateSelection = {
  __typename?: 'GenreMovieMoviesNodeAggregateSelection';
  imdbRating: FloatAggregateSelectionNullable;
  movieId: IdAggregateSelectionNonNullable;
  plot: StringAggregateSelectionNullable;
  poster: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
  year: IntAggregateSelectionNullable;
};

export type GenreMoviesAggregateInput = {
  AND?: InputMaybe<Array<GenreMoviesAggregateInput>>;
  NOT?: InputMaybe<GenreMoviesAggregateInput>;
  OR?: InputMaybe<Array<GenreMoviesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<GenreMoviesNodeAggregationWhereInput>;
};

export type GenreMoviesConnectFieldInput = {
  connect?: InputMaybe<Array<MovieConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<MovieConnectWhere>;
};

export type GenreMoviesConnection = {
  __typename?: 'GenreMoviesConnection';
  edges: Array<GenreMoviesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GenreMoviesConnectionSort = {
  node?: InputMaybe<MovieSort>;
};

export type GenreMoviesConnectionWhere = {
  AND?: InputMaybe<Array<GenreMoviesConnectionWhere>>;
  NOT?: InputMaybe<GenreMoviesConnectionWhere>;
  OR?: InputMaybe<Array<GenreMoviesConnectionWhere>>;
  node?: InputMaybe<MovieWhere>;
};

export type GenreMoviesCreateFieldInput = {
  node: MovieCreateInput;
};

export type GenreMoviesDeleteFieldInput = {
  delete?: InputMaybe<MovieDeleteInput>;
  where?: InputMaybe<GenreMoviesConnectionWhere>;
};

export type GenreMoviesDisconnectFieldInput = {
  disconnect?: InputMaybe<MovieDisconnectInput>;
  where?: InputMaybe<GenreMoviesConnectionWhere>;
};

export type GenreMoviesFieldInput = {
  connect?: InputMaybe<Array<GenreMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<GenreMoviesCreateFieldInput>>;
};

export type GenreMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<GenreMoviesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<GenreMoviesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<GenreMoviesNodeAggregationWhereInput>>;
  imdbRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  imdbRating_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  imdbRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  imdbRating_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  imdbRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  imdbRating_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  imdbRating_MAX_GT?: InputMaybe<Scalars['Float']>;
  imdbRating_MAX_GTE?: InputMaybe<Scalars['Float']>;
  imdbRating_MAX_LT?: InputMaybe<Scalars['Float']>;
  imdbRating_MAX_LTE?: InputMaybe<Scalars['Float']>;
  imdbRating_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  imdbRating_MIN_GT?: InputMaybe<Scalars['Float']>;
  imdbRating_MIN_GTE?: InputMaybe<Scalars['Float']>;
  imdbRating_MIN_LT?: InputMaybe<Scalars['Float']>;
  imdbRating_MIN_LTE?: InputMaybe<Scalars['Float']>;
  imdbRating_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  imdbRating_SUM_GT?: InputMaybe<Scalars['Float']>;
  imdbRating_SUM_GTE?: InputMaybe<Scalars['Float']>;
  imdbRating_SUM_LT?: InputMaybe<Scalars['Float']>;
  imdbRating_SUM_LTE?: InputMaybe<Scalars['Float']>;
  plot_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  plot_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  plot_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  plot_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  plot_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  plot_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  plot_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  plot_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  plot_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  plot_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  plot_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  plot_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  plot_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  plot_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  plot_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  poster_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  poster_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  poster_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  poster_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  poster_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  poster_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  poster_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  poster_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  poster_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  poster_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  poster_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  poster_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  poster_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  poster_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  poster_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  year_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  year_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  year_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  year_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  year_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  year_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  year_MAX_GT?: InputMaybe<Scalars['Int']>;
  year_MAX_GTE?: InputMaybe<Scalars['Int']>;
  year_MAX_LT?: InputMaybe<Scalars['Int']>;
  year_MAX_LTE?: InputMaybe<Scalars['Int']>;
  year_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  year_MIN_GT?: InputMaybe<Scalars['Int']>;
  year_MIN_GTE?: InputMaybe<Scalars['Int']>;
  year_MIN_LT?: InputMaybe<Scalars['Int']>;
  year_MIN_LTE?: InputMaybe<Scalars['Int']>;
  year_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  year_SUM_GT?: InputMaybe<Scalars['Int']>;
  year_SUM_GTE?: InputMaybe<Scalars['Int']>;
  year_SUM_LT?: InputMaybe<Scalars['Int']>;
  year_SUM_LTE?: InputMaybe<Scalars['Int']>;
};

export type GenreMoviesRelationship = {
  __typename?: 'GenreMoviesRelationship';
  cursor: Scalars['String'];
  node: Movie;
};

export type GenreMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
};

export type GenreMoviesUpdateFieldInput = {
  connect?: InputMaybe<Array<GenreMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<GenreMoviesCreateFieldInput>>;
  delete?: InputMaybe<Array<GenreMoviesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<GenreMoviesDisconnectFieldInput>>;
  update?: InputMaybe<GenreMoviesUpdateConnectionInput>;
  where?: InputMaybe<GenreMoviesConnectionWhere>;
};

export type GenreOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more GenreSort objects to sort Genres by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<GenreSort>>;
};

export type GenreRelationInput = {
  movies?: InputMaybe<Array<GenreMoviesCreateFieldInput>>;
};

/** Fields to sort Genres by. The order in which sorts are applied is not guaranteed when specifying many fields in one GenreSort object. */
export type GenreSort = {
  name?: InputMaybe<SortDirection>;
};

export type GenreUpdateInput = {
  movies?: InputMaybe<Array<GenreMoviesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
};

export type GenreWhere = {
  AND?: InputMaybe<Array<GenreWhere>>;
  NOT?: InputMaybe<GenreWhere>;
  OR?: InputMaybe<Array<GenreWhere>>;
  moviesAggregate?: InputMaybe<GenreMoviesAggregateInput>;
  /** Return Genres where all of the related GenreMoviesConnections match this filter */
  moviesConnection_ALL?: InputMaybe<GenreMoviesConnectionWhere>;
  /** Return Genres where none of the related GenreMoviesConnections match this filter */
  moviesConnection_NONE?: InputMaybe<GenreMoviesConnectionWhere>;
  /** Return Genres where one of the related GenreMoviesConnections match this filter */
  moviesConnection_SINGLE?: InputMaybe<GenreMoviesConnectionWhere>;
  /** Return Genres where some of the related GenreMoviesConnections match this filter */
  moviesConnection_SOME?: InputMaybe<GenreMoviesConnectionWhere>;
  /** Return Genres where all of the related Movies match this filter */
  movies_ALL?: InputMaybe<MovieWhere>;
  /** Return Genres where none of the related Movies match this filter */
  movies_NONE?: InputMaybe<MovieWhere>;
  /** Return Genres where one of the related Movies match this filter */
  movies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return Genres where some of the related Movies match this filter */
  movies_SOME?: InputMaybe<MovieWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type GenresConnection = {
  __typename?: 'GenresConnection';
  edges: Array<GenreEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID'];
  shortest: Scalars['ID'];
};

export type IntAggregateSelectionNullable = {
  __typename?: 'IntAggregateSelectionNullable';
  average?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Int']>;
};

export type Movie = {
  __typename?: 'Movie';
  genres: Array<Genre>;
  genresAggregate?: Maybe<MovieGenreGenresAggregationSelection>;
  genresConnection: MovieGenresConnection;
  imdbRating?: Maybe<Scalars['Float']>;
  movieId: Scalars['ID'];
  plot?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  ratings: Array<User>;
  ratingsAggregate?: Maybe<MovieUserRatingsAggregationSelection>;
  ratingsConnection: MovieRatingsConnection;
  title?: Maybe<Scalars['String']>;
  usersAlsoWatched: Array<Movie>;
  year?: Maybe<Scalars['Int']>;
};


export type MovieGenresArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<GenreOptions>;
  where?: InputMaybe<GenreWhere>;
};


export type MovieGenresAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<GenreWhere>;
};


export type MovieGenresConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MovieGenresConnectionSort>>;
  where?: InputMaybe<MovieGenresConnectionWhere>;
};


export type MovieRatingsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type MovieRatingsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<UserWhere>;
};


export type MovieRatingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MovieRatingsConnectionSort>>;
  where?: InputMaybe<MovieRatingsConnectionWhere>;
};

export type MovieAggregateSelection = {
  __typename?: 'MovieAggregateSelection';
  count: Scalars['Int'];
  imdbRating: FloatAggregateSelectionNullable;
  movieId: IdAggregateSelectionNonNullable;
  plot: StringAggregateSelectionNullable;
  poster: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
  year: IntAggregateSelectionNullable;
};

export type MovieConnectInput = {
  genres?: InputMaybe<Array<MovieGenresConnectFieldInput>>;
  ratings?: InputMaybe<Array<MovieRatingsConnectFieldInput>>;
};

export type MovieConnectOrCreateInput = {
  ratings?: InputMaybe<Array<MovieRatingsConnectOrCreateFieldInput>>;
};

export type MovieConnectWhere = {
  node: MovieWhere;
};

export type MovieCreateInput = {
  genres?: InputMaybe<MovieGenresFieldInput>;
  imdbRating?: InputMaybe<Scalars['Float']>;
  movieId: Scalars['ID'];
  plot?: InputMaybe<Scalars['String']>;
  poster?: InputMaybe<Scalars['String']>;
  ratings?: InputMaybe<MovieRatingsFieldInput>;
  title?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type MovieDeleteInput = {
  genres?: InputMaybe<Array<MovieGenresDeleteFieldInput>>;
  ratings?: InputMaybe<Array<MovieRatingsDeleteFieldInput>>;
};

export type MovieDisconnectInput = {
  genres?: InputMaybe<Array<MovieGenresDisconnectFieldInput>>;
  ratings?: InputMaybe<Array<MovieRatingsDisconnectFieldInput>>;
};

export type MovieEdge = {
  __typename?: 'MovieEdge';
  cursor: Scalars['String'];
  node: Movie;
};

export type MovieGenreGenresAggregationSelection = {
  __typename?: 'MovieGenreGenresAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MovieGenreGenresNodeAggregateSelection>;
};

export type MovieGenreGenresNodeAggregateSelection = {
  __typename?: 'MovieGenreGenresNodeAggregateSelection';
  name: StringAggregateSelectionNullable;
};

export type MovieGenresAggregateInput = {
  AND?: InputMaybe<Array<MovieGenresAggregateInput>>;
  NOT?: InputMaybe<MovieGenresAggregateInput>;
  OR?: InputMaybe<Array<MovieGenresAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MovieGenresNodeAggregationWhereInput>;
};

export type MovieGenresConnectFieldInput = {
  connect?: InputMaybe<Array<GenreConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<GenreConnectWhere>;
};

export type MovieGenresConnection = {
  __typename?: 'MovieGenresConnection';
  edges: Array<MovieGenresRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MovieGenresConnectionSort = {
  node?: InputMaybe<GenreSort>;
};

export type MovieGenresConnectionWhere = {
  AND?: InputMaybe<Array<MovieGenresConnectionWhere>>;
  NOT?: InputMaybe<MovieGenresConnectionWhere>;
  OR?: InputMaybe<Array<MovieGenresConnectionWhere>>;
  node?: InputMaybe<GenreWhere>;
};

export type MovieGenresCreateFieldInput = {
  node: GenreCreateInput;
};

export type MovieGenresDeleteFieldInput = {
  delete?: InputMaybe<GenreDeleteInput>;
  where?: InputMaybe<MovieGenresConnectionWhere>;
};

export type MovieGenresDisconnectFieldInput = {
  disconnect?: InputMaybe<GenreDisconnectInput>;
  where?: InputMaybe<MovieGenresConnectionWhere>;
};

export type MovieGenresFieldInput = {
  connect?: InputMaybe<Array<MovieGenresConnectFieldInput>>;
  create?: InputMaybe<Array<MovieGenresCreateFieldInput>>;
};

export type MovieGenresNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MovieGenresNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MovieGenresNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MovieGenresNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type MovieGenresRelationship = {
  __typename?: 'MovieGenresRelationship';
  cursor: Scalars['String'];
  node: Genre;
};

export type MovieGenresUpdateConnectionInput = {
  node?: InputMaybe<GenreUpdateInput>;
};

export type MovieGenresUpdateFieldInput = {
  connect?: InputMaybe<Array<MovieGenresConnectFieldInput>>;
  create?: InputMaybe<Array<MovieGenresCreateFieldInput>>;
  delete?: InputMaybe<Array<MovieGenresDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MovieGenresDisconnectFieldInput>>;
  update?: InputMaybe<MovieGenresUpdateConnectionInput>;
  where?: InputMaybe<MovieGenresConnectionWhere>;
};

export type MovieOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more MovieSort objects to sort Movies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MovieSort>>;
};

export type MovieRatingsAggregateInput = {
  AND?: InputMaybe<Array<MovieRatingsAggregateInput>>;
  NOT?: InputMaybe<MovieRatingsAggregateInput>;
  OR?: InputMaybe<Array<MovieRatingsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  edge?: InputMaybe<MovieRatingsEdgeAggregationWhereInput>;
  node?: InputMaybe<MovieRatingsNodeAggregationWhereInput>;
};

export type MovieRatingsConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge?: InputMaybe<RateCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<UserConnectWhere>;
};

export type MovieRatingsConnectOrCreateFieldInput = {
  onCreate: MovieRatingsConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type MovieRatingsConnectOrCreateFieldInputOnCreate = {
  edge?: InputMaybe<RateCreateInput>;
  node: UserOnCreateInput;
};

export type MovieRatingsConnection = {
  __typename?: 'MovieRatingsConnection';
  edges: Array<MovieRatingsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MovieRatingsConnectionSort = {
  edge?: InputMaybe<RateSort>;
  node?: InputMaybe<UserSort>;
};

export type MovieRatingsConnectionWhere = {
  AND?: InputMaybe<Array<MovieRatingsConnectionWhere>>;
  NOT?: InputMaybe<MovieRatingsConnectionWhere>;
  OR?: InputMaybe<Array<MovieRatingsConnectionWhere>>;
  edge?: InputMaybe<RateWhere>;
  node?: InputMaybe<UserWhere>;
};

export type MovieRatingsCreateFieldInput = {
  edge?: InputMaybe<RateCreateInput>;
  node: UserCreateInput;
};

export type MovieRatingsDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<MovieRatingsConnectionWhere>;
};

export type MovieRatingsDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<MovieRatingsConnectionWhere>;
};

export type MovieRatingsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<MovieRatingsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<MovieRatingsEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<MovieRatingsEdgeAggregationWhereInput>>;
  rating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  rating_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  rating_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  rating_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  rating_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  rating_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  rating_MAX_GT?: InputMaybe<Scalars['Float']>;
  rating_MAX_GTE?: InputMaybe<Scalars['Float']>;
  rating_MAX_LT?: InputMaybe<Scalars['Float']>;
  rating_MAX_LTE?: InputMaybe<Scalars['Float']>;
  rating_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  rating_MIN_GT?: InputMaybe<Scalars['Float']>;
  rating_MIN_GTE?: InputMaybe<Scalars['Float']>;
  rating_MIN_LT?: InputMaybe<Scalars['Float']>;
  rating_MIN_LTE?: InputMaybe<Scalars['Float']>;
  rating_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  rating_SUM_GT?: InputMaybe<Scalars['Float']>;
  rating_SUM_GTE?: InputMaybe<Scalars['Float']>;
  rating_SUM_LT?: InputMaybe<Scalars['Float']>;
  rating_SUM_LTE?: InputMaybe<Scalars['Float']>;
};

export type MovieRatingsFieldInput = {
  connect?: InputMaybe<Array<MovieRatingsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MovieRatingsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MovieRatingsCreateFieldInput>>;
};

export type MovieRatingsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MovieRatingsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MovieRatingsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MovieRatingsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type MovieRatingsRelationship = Rate & {
  __typename?: 'MovieRatingsRelationship';
  cursor: Scalars['String'];
  node: User;
  rating?: Maybe<Scalars['Float']>;
};

export type MovieRatingsUpdateConnectionInput = {
  edge?: InputMaybe<RateUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type MovieRatingsUpdateFieldInput = {
  connect?: InputMaybe<Array<MovieRatingsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MovieRatingsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MovieRatingsCreateFieldInput>>;
  delete?: InputMaybe<Array<MovieRatingsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MovieRatingsDisconnectFieldInput>>;
  update?: InputMaybe<MovieRatingsUpdateConnectionInput>;
  where?: InputMaybe<MovieRatingsConnectionWhere>;
};

export type MovieRelationInput = {
  genres?: InputMaybe<Array<MovieGenresCreateFieldInput>>;
  ratings?: InputMaybe<Array<MovieRatingsCreateFieldInput>>;
};

/** Fields to sort Movies by. The order in which sorts are applied is not guaranteed when specifying many fields in one MovieSort object. */
export type MovieSort = {
  imdbRating?: InputMaybe<SortDirection>;
  movieId?: InputMaybe<SortDirection>;
  plot?: InputMaybe<SortDirection>;
  poster?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  year?: InputMaybe<SortDirection>;
};

export type MovieUpdateInput = {
  genres?: InputMaybe<Array<MovieGenresUpdateFieldInput>>;
  imdbRating?: InputMaybe<Scalars['Float']>;
  imdbRating_ADD?: InputMaybe<Scalars['Float']>;
  imdbRating_DIVIDE?: InputMaybe<Scalars['Float']>;
  imdbRating_MULTIPLY?: InputMaybe<Scalars['Float']>;
  imdbRating_SUBTRACT?: InputMaybe<Scalars['Float']>;
  movieId?: InputMaybe<Scalars['ID']>;
  plot?: InputMaybe<Scalars['String']>;
  poster?: InputMaybe<Scalars['String']>;
  ratings?: InputMaybe<Array<MovieRatingsUpdateFieldInput>>;
  title?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
  year_DECREMENT?: InputMaybe<Scalars['Int']>;
  year_INCREMENT?: InputMaybe<Scalars['Int']>;
};

export type MovieUserRatingsAggregationSelection = {
  __typename?: 'MovieUserRatingsAggregationSelection';
  count: Scalars['Int'];
  edge?: Maybe<MovieUserRatingsEdgeAggregateSelection>;
  node?: Maybe<MovieUserRatingsNodeAggregateSelection>;
};

export type MovieUserRatingsEdgeAggregateSelection = {
  __typename?: 'MovieUserRatingsEdgeAggregateSelection';
  rating: FloatAggregateSelectionNullable;
};

export type MovieUserRatingsNodeAggregateSelection = {
  __typename?: 'MovieUserRatingsNodeAggregateSelection';
  name: StringAggregateSelectionNullable;
  userId: IdAggregateSelectionNonNullable;
};

export type MovieWhere = {
  AND?: InputMaybe<Array<MovieWhere>>;
  NOT?: InputMaybe<MovieWhere>;
  OR?: InputMaybe<Array<MovieWhere>>;
  genresAggregate?: InputMaybe<MovieGenresAggregateInput>;
  /** Return Movies where all of the related MovieGenresConnections match this filter */
  genresConnection_ALL?: InputMaybe<MovieGenresConnectionWhere>;
  /** Return Movies where none of the related MovieGenresConnections match this filter */
  genresConnection_NONE?: InputMaybe<MovieGenresConnectionWhere>;
  /** Return Movies where one of the related MovieGenresConnections match this filter */
  genresConnection_SINGLE?: InputMaybe<MovieGenresConnectionWhere>;
  /** Return Movies where some of the related MovieGenresConnections match this filter */
  genresConnection_SOME?: InputMaybe<MovieGenresConnectionWhere>;
  /** Return Movies where all of the related Genres match this filter */
  genres_ALL?: InputMaybe<GenreWhere>;
  /** Return Movies where none of the related Genres match this filter */
  genres_NONE?: InputMaybe<GenreWhere>;
  /** Return Movies where one of the related Genres match this filter */
  genres_SINGLE?: InputMaybe<GenreWhere>;
  /** Return Movies where some of the related Genres match this filter */
  genres_SOME?: InputMaybe<GenreWhere>;
  imdbRating?: InputMaybe<Scalars['Float']>;
  imdbRating_GT?: InputMaybe<Scalars['Float']>;
  imdbRating_GTE?: InputMaybe<Scalars['Float']>;
  imdbRating_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  imdbRating_LT?: InputMaybe<Scalars['Float']>;
  imdbRating_LTE?: InputMaybe<Scalars['Float']>;
  movieId?: InputMaybe<Scalars['ID']>;
  movieId_CONTAINS?: InputMaybe<Scalars['ID']>;
  movieId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  movieId_IN?: InputMaybe<Array<Scalars['ID']>>;
  movieId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  plot?: InputMaybe<Scalars['String']>;
  plot_CONTAINS?: InputMaybe<Scalars['String']>;
  plot_ENDS_WITH?: InputMaybe<Scalars['String']>;
  plot_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  plot_STARTS_WITH?: InputMaybe<Scalars['String']>;
  poster?: InputMaybe<Scalars['String']>;
  poster_CONTAINS?: InputMaybe<Scalars['String']>;
  poster_ENDS_WITH?: InputMaybe<Scalars['String']>;
  poster_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  poster_STARTS_WITH?: InputMaybe<Scalars['String']>;
  ratingsAggregate?: InputMaybe<MovieRatingsAggregateInput>;
  /** Return Movies where all of the related MovieRatingsConnections match this filter */
  ratingsConnection_ALL?: InputMaybe<MovieRatingsConnectionWhere>;
  /** Return Movies where none of the related MovieRatingsConnections match this filter */
  ratingsConnection_NONE?: InputMaybe<MovieRatingsConnectionWhere>;
  /** Return Movies where one of the related MovieRatingsConnections match this filter */
  ratingsConnection_SINGLE?: InputMaybe<MovieRatingsConnectionWhere>;
  /** Return Movies where some of the related MovieRatingsConnections match this filter */
  ratingsConnection_SOME?: InputMaybe<MovieRatingsConnectionWhere>;
  /** Return Movies where all of the related Users match this filter */
  ratings_ALL?: InputMaybe<UserWhere>;
  /** Return Movies where none of the related Users match this filter */
  ratings_NONE?: InputMaybe<UserWhere>;
  /** Return Movies where one of the related Users match this filter */
  ratings_SINGLE?: InputMaybe<UserWhere>;
  /** Return Movies where some of the related Users match this filter */
  ratings_SOME?: InputMaybe<UserWhere>;
  title?: InputMaybe<Scalars['String']>;
  title_CONTAINS?: InputMaybe<Scalars['String']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']>;
  title_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
  year_GT?: InputMaybe<Scalars['Int']>;
  year_GTE?: InputMaybe<Scalars['Int']>;
  year_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  year_LT?: InputMaybe<Scalars['Int']>;
  year_LTE?: InputMaybe<Scalars['Int']>;
};

export type MoviesConnection = {
  __typename?: 'MoviesConnection';
  edges: Array<MovieEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGenres: CreateGenresMutationResponse;
  createMovies: CreateMoviesMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteGenres: DeleteInfo;
  deleteMovies: DeleteInfo;
  deleteUsers: DeleteInfo;
  updateGenres: UpdateGenresMutationResponse;
  updateMovies: UpdateMoviesMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};


export type MutationCreateGenresArgs = {
  input: Array<GenreCreateInput>;
};


export type MutationCreateMoviesArgs = {
  input: Array<MovieCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationDeleteGenresArgs = {
  delete?: InputMaybe<GenreDeleteInput>;
  where?: InputMaybe<GenreWhere>;
};


export type MutationDeleteMoviesArgs = {
  delete?: InputMaybe<MovieDeleteInput>;
  where?: InputMaybe<MovieWhere>;
};


export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationUpdateGenresArgs = {
  connect?: InputMaybe<GenreConnectInput>;
  create?: InputMaybe<GenreRelationInput>;
  delete?: InputMaybe<GenreDeleteInput>;
  disconnect?: InputMaybe<GenreDisconnectInput>;
  update?: InputMaybe<GenreUpdateInput>;
  where?: InputMaybe<GenreWhere>;
};


export type MutationUpdateMoviesArgs = {
  connect?: InputMaybe<MovieConnectInput>;
  connectOrCreate?: InputMaybe<MovieConnectOrCreateInput>;
  create?: InputMaybe<MovieRelationInput>;
  delete?: InputMaybe<MovieDeleteInput>;
  disconnect?: InputMaybe<MovieDisconnectInput>;
  update?: InputMaybe<MovieUpdateInput>;
  where?: InputMaybe<MovieWhere>;
};


export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  genres: Array<Genre>;
  genresAggregate: GenreAggregateSelection;
  genresConnection: GenresConnection;
  movies: Array<Movie>;
  moviesAggregate: MovieAggregateSelection;
  moviesConnection: MoviesConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};


export type QueryGenresArgs = {
  options?: InputMaybe<GenreOptions>;
  where?: InputMaybe<GenreWhere>;
};


export type QueryGenresAggregateArgs = {
  where?: InputMaybe<GenreWhere>;
};


export type QueryGenresConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GenreSort>>>;
  where?: InputMaybe<GenreWhere>;
};


export type QueryMoviesArgs = {
  options?: InputMaybe<MovieOptions>;
  where?: InputMaybe<MovieWhere>;
};


export type QueryMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
};


export type QueryMoviesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<MovieSort>>>;
  where?: InputMaybe<MovieWhere>;
};


export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};

export type Rate = {
  rating?: Maybe<Scalars['Float']>;
};

export type RateCreateInput = {
  rating?: InputMaybe<Scalars['Float']>;
};

export type RateSort = {
  rating?: InputMaybe<SortDirection>;
};

export type RateUpdateInput = {
  rating?: InputMaybe<Scalars['Float']>;
  rating_ADD?: InputMaybe<Scalars['Float']>;
  rating_DIVIDE?: InputMaybe<Scalars['Float']>;
  rating_MULTIPLY?: InputMaybe<Scalars['Float']>;
  rating_SUBTRACT?: InputMaybe<Scalars['Float']>;
};

export type RateWhere = {
  AND?: InputMaybe<Array<RateWhere>>;
  NOT?: InputMaybe<RateWhere>;
  OR?: InputMaybe<Array<RateWhere>>;
  rating?: InputMaybe<Scalars['Float']>;
  rating_GT?: InputMaybe<Scalars['Float']>;
  rating_GTE?: InputMaybe<Scalars['Float']>;
  rating_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  rating_LT?: InputMaybe<Scalars['Float']>;
  rating_LTE?: InputMaybe<Scalars['Float']>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']>;
  shortest?: Maybe<Scalars['String']>;
};

export type UpdateGenresMutationResponse = {
  __typename?: 'UpdateGenresMutationResponse';
  genres: Array<Genre>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type UpdateMoviesMutationResponse = {
  __typename?: 'UpdateMoviesMutationResponse';
  info: UpdateInfo;
  movies: Array<Movie>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  name?: Maybe<Scalars['String']>;
  ratings: Array<Movie>;
  ratingsAggregate?: Maybe<UserMovieRatingsAggregationSelection>;
  ratingsConnection: UserRatingsConnection;
  userId: Scalars['ID'];
};


export type UserRatingsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MovieOptions>;
  where?: InputMaybe<MovieWhere>;
};


export type UserRatingsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MovieWhere>;
};


export type UserRatingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<UserRatingsConnectionSort>>;
  where?: InputMaybe<UserRatingsConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelectionNullable;
  userId: IdAggregateSelectionNonNullable;
};

export type UserConnectInput = {
  ratings?: InputMaybe<Array<UserRatingsConnectFieldInput>>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  name?: InputMaybe<Scalars['String']>;
  ratings?: InputMaybe<UserRatingsFieldInput>;
};

export type UserDeleteInput = {
  ratings?: InputMaybe<Array<UserRatingsDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  ratings?: InputMaybe<Array<UserRatingsDisconnectFieldInput>>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserMovieRatingsAggregationSelection = {
  __typename?: 'UserMovieRatingsAggregationSelection';
  count: Scalars['Int'];
  edge?: Maybe<UserMovieRatingsEdgeAggregateSelection>;
  node?: Maybe<UserMovieRatingsNodeAggregateSelection>;
};

export type UserMovieRatingsEdgeAggregateSelection = {
  __typename?: 'UserMovieRatingsEdgeAggregateSelection';
  rating: FloatAggregateSelectionNullable;
};

export type UserMovieRatingsNodeAggregateSelection = {
  __typename?: 'UserMovieRatingsNodeAggregateSelection';
  imdbRating: FloatAggregateSelectionNullable;
  movieId: IdAggregateSelectionNonNullable;
  plot: StringAggregateSelectionNullable;
  poster: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
  year: IntAggregateSelectionNullable;
};

export type UserOnCreateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserRatingsAggregateInput = {
  AND?: InputMaybe<Array<UserRatingsAggregateInput>>;
  NOT?: InputMaybe<UserRatingsAggregateInput>;
  OR?: InputMaybe<Array<UserRatingsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  edge?: InputMaybe<UserRatingsEdgeAggregationWhereInput>;
  node?: InputMaybe<UserRatingsNodeAggregationWhereInput>;
};

export type UserRatingsConnectFieldInput = {
  connect?: InputMaybe<Array<MovieConnectInput>>;
  edge?: InputMaybe<RateCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<MovieConnectWhere>;
};

export type UserRatingsConnection = {
  __typename?: 'UserRatingsConnection';
  edges: Array<UserRatingsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserRatingsConnectionSort = {
  edge?: InputMaybe<RateSort>;
  node?: InputMaybe<MovieSort>;
};

export type UserRatingsConnectionWhere = {
  AND?: InputMaybe<Array<UserRatingsConnectionWhere>>;
  NOT?: InputMaybe<UserRatingsConnectionWhere>;
  OR?: InputMaybe<Array<UserRatingsConnectionWhere>>;
  edge?: InputMaybe<RateWhere>;
  node?: InputMaybe<MovieWhere>;
};

export type UserRatingsCreateFieldInput = {
  edge?: InputMaybe<RateCreateInput>;
  node: MovieCreateInput;
};

export type UserRatingsDeleteFieldInput = {
  delete?: InputMaybe<MovieDeleteInput>;
  where?: InputMaybe<UserRatingsConnectionWhere>;
};

export type UserRatingsDisconnectFieldInput = {
  disconnect?: InputMaybe<MovieDisconnectInput>;
  where?: InputMaybe<UserRatingsConnectionWhere>;
};

export type UserRatingsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserRatingsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<UserRatingsEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserRatingsEdgeAggregationWhereInput>>;
  rating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  rating_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  rating_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  rating_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  rating_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  rating_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  rating_MAX_GT?: InputMaybe<Scalars['Float']>;
  rating_MAX_GTE?: InputMaybe<Scalars['Float']>;
  rating_MAX_LT?: InputMaybe<Scalars['Float']>;
  rating_MAX_LTE?: InputMaybe<Scalars['Float']>;
  rating_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  rating_MIN_GT?: InputMaybe<Scalars['Float']>;
  rating_MIN_GTE?: InputMaybe<Scalars['Float']>;
  rating_MIN_LT?: InputMaybe<Scalars['Float']>;
  rating_MIN_LTE?: InputMaybe<Scalars['Float']>;
  rating_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  rating_SUM_GT?: InputMaybe<Scalars['Float']>;
  rating_SUM_GTE?: InputMaybe<Scalars['Float']>;
  rating_SUM_LT?: InputMaybe<Scalars['Float']>;
  rating_SUM_LTE?: InputMaybe<Scalars['Float']>;
};

export type UserRatingsFieldInput = {
  connect?: InputMaybe<Array<UserRatingsConnectFieldInput>>;
  create?: InputMaybe<Array<UserRatingsCreateFieldInput>>;
};

export type UserRatingsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserRatingsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserRatingsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserRatingsNodeAggregationWhereInput>>;
  imdbRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  imdbRating_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  imdbRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  imdbRating_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  imdbRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  imdbRating_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  imdbRating_MAX_GT?: InputMaybe<Scalars['Float']>;
  imdbRating_MAX_GTE?: InputMaybe<Scalars['Float']>;
  imdbRating_MAX_LT?: InputMaybe<Scalars['Float']>;
  imdbRating_MAX_LTE?: InputMaybe<Scalars['Float']>;
  imdbRating_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  imdbRating_MIN_GT?: InputMaybe<Scalars['Float']>;
  imdbRating_MIN_GTE?: InputMaybe<Scalars['Float']>;
  imdbRating_MIN_LT?: InputMaybe<Scalars['Float']>;
  imdbRating_MIN_LTE?: InputMaybe<Scalars['Float']>;
  imdbRating_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  imdbRating_SUM_GT?: InputMaybe<Scalars['Float']>;
  imdbRating_SUM_GTE?: InputMaybe<Scalars['Float']>;
  imdbRating_SUM_LT?: InputMaybe<Scalars['Float']>;
  imdbRating_SUM_LTE?: InputMaybe<Scalars['Float']>;
  plot_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  plot_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  plot_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  plot_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  plot_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  plot_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  plot_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  plot_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  plot_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  plot_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  plot_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  plot_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  plot_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  plot_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  plot_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  poster_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  poster_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  poster_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  poster_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  poster_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  poster_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  poster_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  poster_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  poster_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  poster_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  poster_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  poster_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  poster_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  poster_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  poster_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  year_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  year_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  year_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  year_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  year_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  year_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  year_MAX_GT?: InputMaybe<Scalars['Int']>;
  year_MAX_GTE?: InputMaybe<Scalars['Int']>;
  year_MAX_LT?: InputMaybe<Scalars['Int']>;
  year_MAX_LTE?: InputMaybe<Scalars['Int']>;
  year_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  year_MIN_GT?: InputMaybe<Scalars['Int']>;
  year_MIN_GTE?: InputMaybe<Scalars['Int']>;
  year_MIN_LT?: InputMaybe<Scalars['Int']>;
  year_MIN_LTE?: InputMaybe<Scalars['Int']>;
  year_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  year_SUM_GT?: InputMaybe<Scalars['Int']>;
  year_SUM_GTE?: InputMaybe<Scalars['Int']>;
  year_SUM_LT?: InputMaybe<Scalars['Int']>;
  year_SUM_LTE?: InputMaybe<Scalars['Int']>;
};

export type UserRatingsRelationship = Rate & {
  __typename?: 'UserRatingsRelationship';
  cursor: Scalars['String'];
  node: Movie;
  rating?: Maybe<Scalars['Float']>;
};

export type UserRatingsUpdateConnectionInput = {
  edge?: InputMaybe<RateUpdateInput>;
  node?: InputMaybe<MovieUpdateInput>;
};

export type UserRatingsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserRatingsConnectFieldInput>>;
  create?: InputMaybe<Array<UserRatingsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserRatingsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserRatingsDisconnectFieldInput>>;
  update?: InputMaybe<UserRatingsUpdateConnectionInput>;
  where?: InputMaybe<UserRatingsConnectionWhere>;
};

export type UserRelationInput = {
  ratings?: InputMaybe<Array<UserRatingsCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  name?: InputMaybe<SortDirection>;
  userId?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  userId?: InputMaybe<Scalars['ID']>;
};

export type UserUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  ratings?: InputMaybe<Array<UserRatingsUpdateFieldInput>>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  ratingsAggregate?: InputMaybe<UserRatingsAggregateInput>;
  /** Return Users where all of the related UserRatingsConnections match this filter */
  ratingsConnection_ALL?: InputMaybe<UserRatingsConnectionWhere>;
  /** Return Users where none of the related UserRatingsConnections match this filter */
  ratingsConnection_NONE?: InputMaybe<UserRatingsConnectionWhere>;
  /** Return Users where one of the related UserRatingsConnections match this filter */
  ratingsConnection_SINGLE?: InputMaybe<UserRatingsConnectionWhere>;
  /** Return Users where some of the related UserRatingsConnections match this filter */
  ratingsConnection_SOME?: InputMaybe<UserRatingsConnectionWhere>;
  /** Return Users where all of the related Movies match this filter */
  ratings_ALL?: InputMaybe<MovieWhere>;
  /** Return Users where none of the related Movies match this filter */
  ratings_NONE?: InputMaybe<MovieWhere>;
  /** Return Users where one of the related Movies match this filter */
  ratings_SINGLE?: InputMaybe<MovieWhere>;
  /** Return Users where some of the related Movies match this filter */
  ratings_SOME?: InputMaybe<MovieWhere>;
  userId?: InputMaybe<Scalars['ID']>;
  userId_CONTAINS?: InputMaybe<Scalars['ID']>;
  userId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  userId_IN?: InputMaybe<Array<Scalars['ID']>>;
  userId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MoviesQueryVariables = Exact<{
  where?: InputMaybe<MovieWhere>;
}>;


export type MoviesQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', movieId: string, title?: string | null, year?: number | null, poster?: string | null, plot?: string | null, imdbRating?: number | null, usersAlsoWatched: Array<{ __typename?: 'Movie', poster?: string | null, movieId: string }> }> };

export type GetMoviesQueryVariables = Exact<{
  where?: InputMaybe<MovieWhere>;
}>;


export type GetMoviesQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', movieId: string, title?: string | null, year?: number | null, poster?: string | null, imdbRating?: number | null }> };


export const MoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Movies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MovieWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movieId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"plot"}},{"kind":"Field","name":{"kind":"Name","value":"imdbRating"}},{"kind":"Field","name":{"kind":"Name","value":"usersAlsoWatched"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"movieId"}}]}}]}}]}}]} as unknown as DocumentNode<MoviesQuery, MoviesQueryVariables>;
export const GetMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMovies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MovieWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movieId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"imdbRating"}}]}}]}}]} as unknown as DocumentNode<GetMoviesQuery, GetMoviesQueryVariables>;