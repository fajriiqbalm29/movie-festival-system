import {App} from "vue"
export default {
    install: (app: App, options: any) => {
        const user:any = JSON.parse(localStorage.getItem('user_session'))

        function getAuthData(){
                if (user && user.access_token) return user

                else return null
        }

        function getRoles(){
            if (user && user.access_token) return {
                    role: user.role,
            }

            else return {
                role: null
            }
        }

        const logout = async ()=>{
            localStorage.clear();
            window.location.href = '/'
        }

        app.mixin({
            data(){
                return {
                    isLoggedIn: user ? true : false,
                    authData: getAuthData(),
                    authRole: getRoles(),
                }
            }
        })

        app.provide('logout', logout)
    }
}