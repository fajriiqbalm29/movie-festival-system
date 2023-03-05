import { defineStore } from "pinia"
import { login } from "@/helper/API/user"
import router from '@/router/route'

export const useUserStore = defineStore("userStore",{
  state: (): { user: Model.User.LoginData | null } => ({
    user: {
        access_token: "",
        email:"",
        name:"",
        password:"",
        role:"user"
    },
  }),
  persist: true,

  getters: {
    isAuthenticated(state) {
      return state.user !== null
    },

    getUser(state) {
      return state.user
    },
  },

  actions: {
    async login(payload :any) {
        await login(payload).then((resp: Model.User.LoginData)=>{
            localStorage.setItem('user_session', JSON.stringify(resp));
            localStorage.setItem('access_token', resp.access_token);
            this.user = resp
            console.log(resp);
            
            if(resp.role === 'admin'){
                router.push('/admin/dashboard')
            }else{
                router.push('/')
            }
        })
    },

    logout() {
      this.user = null
    },
  },
})
