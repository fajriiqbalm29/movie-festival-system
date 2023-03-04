import axios from "@/utils/service";

const USER_ENDPOINT = `/users`
const LOGIN_ENDPOINT = `/auth/login`

export async function getUsers():Promise<Model.User.Data[]> {
    const { data } = await axios.get<API.ResponseDataBody<Model.User.Data[]>>(`${USER_ENDPOINT}`)
    return data
}

export async function login(payload:any):Promise<Model.User.LoginData>{
    const { data } = await axios.post<API.ResponseDataBody<Model.User.LoginData>>(`${LOGIN_ENDPOINT}`, {...payload})
    return data.data
}