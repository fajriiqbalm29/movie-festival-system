import {App} from "vue"
export default {
    install: (app: App, options: any) => {
        const isLoggedin:any = JSON.parse(localStorage.getItem('user_session'))
        const user: any = JSON.parse(localStorage.getItem('user_profile'))

        function getAuthData(){
                if (isLoggedin && isLoggedin.access_token) return user

                else return null
        }

        function getRoles(){
            if (isLoggedin && isLoggedin.access_token) return {
                    id: isLoggedin.ref_user_type_id,
                    name: isLoggedin.ref_user_type_name
            }

            else return {
                id: null,
                name:null
            }
        }

        const logout = async ()=>{
            localStorage.clear();
            window.location.href = '/'
        }

        app.mixin({
            data(){
                return {
                    isLoggedIn: isLoggedin ? true : false,
                    authData: getAuthData(),
                    authRole: getRoles(),
                }
            }
        })

        app.provide('logout', logout)
    }
}