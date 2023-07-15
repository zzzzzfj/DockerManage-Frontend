import { login as loginApi } from '@/api/login'
import router from '@/router'

// token 在F12-应用-local storage中
export default {
    namespaced: true,
    state: () => ({
        token: localStorage.getItem('token') || ''
    }),
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        }
    },
    actions: {
        // login的实际操作在这里
        login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                loginApi(userInfo)
                .then(res => {
                    // console.log(res)
                    commit('setToken', res.token)
                    router.replace('/')
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        logout({ commit }) {
            commit('setToken', '')
            localStorage.clear()
            router.replace('/login')
        }
    }
}
