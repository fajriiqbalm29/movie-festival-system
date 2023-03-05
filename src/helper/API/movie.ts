import axios from "@/utils/service";

const MOVIE_ENDPOINT = `/movies`

export async function getMovies():Promise<Model.Movie.Data[]> {
    const { data } = await axios.get<API.ResponseDataBody<Model.Movie.Data[]>>(`${MOVIE_ENDPOINT}`)
    return data
}

export async function getMoviesDetail(slug:string):Promise<Model.Movie.Data> {
    const { data } = await axios.get<API.ResponseDataBody<Model.Movie.Data>>(`${MOVIE_ENDPOINT}/${slug}`)
    return data.data
}

export async function putMovieViews(slug:string):Promise<Model.Movie.Data> {
    const { data } = await axios.put<API.ResponseDataBody<Model.Movie.Data>>(`${MOVIE_ENDPOINT}/viewed/${slug}`)
    return data.data
}

export async function putMovieVotes(slug:string):Promise<Model.Movie.Data> {
    const { data } = await axios.put<API.ResponseDataBody<Model.Movie.Data>>(`${MOVIE_ENDPOINT}/voted/${slug}`)
    return data.data
}

export async function postMovie(payload:any):Promise<Model.Movie.Data> {
    const { data } = await axios.post<API.ResponseDataBody<Model.Movie.Data>>(`${MOVIE_ENDPOINT}`, {...payload})
    return data.data
}
