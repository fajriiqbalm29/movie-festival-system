import axios from "@/utils/service";

const MOVIE_ENDPOINT = `/movies`

export async function getMovies():Promise<Model.Movie.Data[]> {
    const { data } = await axios.get<API.ResponseDataBody<Model.Movie.Data[]>>(`${MOVIE_ENDPOINT}`)
    return data
}

export async function postMovie(payload:any):Promise<Model.Movie.Data> {
    const { data } = await axios.post<API.ResponseDataBody<Model.Movie.Data>>(`${MOVIE_ENDPOINT}`, {...payload})
    return data.data
}
