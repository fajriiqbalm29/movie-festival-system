declare namespace Model {
    module User {
        interface Data {
            email: string
            password : string
            name: string,
            role: 'admin' | 'user'
        }

        interface LoginData extends Data{
            access_token: string
        }
    }
}