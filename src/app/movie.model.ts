export interface MovieCollectionDto {
  page: number,
  results: Array<MovieDto>,
  total_pages: number,
  total_results: number
}

export interface MovieCollection {
  page: number,
  results: Array<Movie>,
  totalPages: number,
  totalResults: number
}

export interface Genres {
  id: number,
  name: string
}

export interface Companies {
  name: string,
  id: number,
  logo_path: string | null,
  origin_country: string
}

export interface Countries {
  iso_3166_1: string,
  name: string
}

export interface Movie {
  id: number
  title: string,
  image: string,
  releaseDate: Date,
  popularity: number,
  rating: number,
  voteCount: number
}

export interface MovieDetail {
  adult: boolean,
  backdropPath: string | null,
  belongsToCollection: null | object,
  budget: number,
  genres: Array<Genres>,
  homepage: string | null,
  id: number
  imdbId: string | null,
  originalLanguage: string,
  originalTitle: string | null,
  overview: string | null,
  popularity: number,
  posterPath: string | null,
  productionCompanies: Array<Companies>,
  productionCountries: Array<Countries>,
  releaseDate: Date,
  revenue: number,
  runtime: number | null,
  spokenLanguages: Array<Countries>,
  status: string,
  tagline: string | null,
  title: string,
  video: boolean,
  voteAverage: number,
  voteCount: number
}

export interface MovieDto {
  adult: boolean,
  backdrop_path: string | null,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string | null,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export interface MovieDetailDto {
  adult: boolean,
  backdrop_path: string | null,
  belongs_to_collection: null | object,
  budget: number,
  genres: Array<Genres>,
  homepage: string | null,
  id: number
  imdb_id: string | null,
  original_language: string,
  original_title: string | null,
  overview: string | null,
  popularity: number,
  poster_path: string | null,
  production_companies: Array<Companies>,
  production_countries: Array<Countries>,
  release_date: string,
  revenue: number,
  runtime: number | null,
  spoken_languages: Array<Countries>,
  status: string,
  tagline: string | null,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export class MovieCollectionAdapter implements MovieCollection {
  page: number;
  results: Array<Movie>;
  totalPages: number;
  totalResults: number;

  constructor(movCollection: MovieCollectionDto) {
    this.page = movCollection.page;
    this.results = movCollection.results.map((item) => new MovieAdapter(item));
    this.totalPages = movCollection.total_pages;
    this.totalResults = movCollection.total_results;
  }
}

export class MovieAdapter implements Movie {
  id: number
  image: string;
  popularity: number;
  rating: number;
  releaseDate: Date;
  title: string;

  constructor(mov: MovieDto) {
    this.id = mov.id;
    this.title = mov.title;
    this.image = mov.poster_path ?
      `https://image.tmdb.org/t/p/w300${mov.poster_path}` :
      '../assets/images/no-image.png';
    this.rating = mov.vote_average;
    this.releaseDate = new Date(mov.release_date);
    this.popularity = mov.popularity;
    this.voteCount = mov.vote_count;
  }

  voteCount: number;
}

export class MovieDetailAdapter implements MovieDetail {
  adult: boolean;
  backdropPath: string | null;
  belongsToCollection: object | null;
  budget: number;
  genres: Array<Genres>;
  homepage: string | null;
  id: number;
  imdbId: string | null;
  originalLanguage: string;
  originalTitle: string | null;
  overview: string | null;
  popularity: number;
  posterPath: string | null;
  productionCompanies: Array<Companies>;
  productionCountries: Array<Countries>;
  releaseDate: Date;
  revenue: number;
  runtime: number | null;
  spokenLanguages: Array<Countries>;
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;

  constructor(movDetail: MovieDetailDto) {
    this.adult = movDetail.adult;
    this.backdropPath = movDetail.backdrop_path;
    this.belongsToCollection = movDetail.belongs_to_collection;
    this.budget = movDetail.budget;
    this.genres = movDetail.genres;
    this.homepage = movDetail.homepage;
    this.id = movDetail.id;
    this.imdbId = movDetail.imdb_id;
    this.originalLanguage = movDetail.original_language;
    this.originalTitle = movDetail.original_title;
    this.overview = movDetail.overview;
    this.popularity = movDetail.popularity;
    this.posterPath = movDetail.poster_path ?
      `https://image.tmdb.org/t/p/w500${movDetail.poster_path}` :
      '../assets/images/no-image.png';
    this.productionCompanies = movDetail.production_companies;
    this.productionCountries = movDetail.production_countries;
    this.releaseDate = new Date(movDetail.release_date);
    this.revenue = movDetail.revenue;
    this.runtime = movDetail.runtime;
    this.spokenLanguages = movDetail.spoken_languages;
    this.status = movDetail.status;
    this.tagline = movDetail.tagline;
    this.title = movDetail.title;
    this.video = movDetail.video;
    this.voteAverage = movDetail.vote_average;
    this.voteCount = movDetail.vote_count;
  }
}
