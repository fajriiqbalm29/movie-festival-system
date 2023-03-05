import {App} from "vue"
import {computed} from "vue"
export default {
    install: (app: App, options: any) => {
        const user:any = JSON.parse(localStorage.getItem('userStore'))
         const isLoggedin = computed({
                    get: () => JSON.parse(localStorage.getItem('user_session')),
                    set: value => JSON.parse(localStorage.getItem('user_session')) ? true : false,
        })
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
                    isLoggedIn: isLoggedin ? true : false,
                    authData: getAuthData(),
                    authRole: getRoles(),
                }
            }
        })

        app.provide('logout', logout)
    }
}