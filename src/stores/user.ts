import { defineStore } from 'pinia'
import router from '../router'

import client from '../config/api/client'
import { userStrapiMapper } from '../config/api/mapper'

const savedUser = localStorage.getItem('user')

export const useUserStore = defineStore('user', {
  state: () => ({
    user: savedUser ? JSON.parse(savedUser) : {},
    token: localStorage.getItem('bearer') || '',
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async localSignIn(identifier: string, password: string) {
      try {
        const res = await client({
          method: 'post',
          url: '/auth/local',
          data: {
            identifier,
            password,
          },
        })
        this.token = res.data.jwt
        localStorage.setItem('bearer', this.token)
        this.user = userStrapiMapper(res.data.user)
        localStorage.setItem('user', JSON.stringify(this.user))

        setTimeout(async () => {
          await router.push('/dashboard')
        }, 1000)
      } catch (error) {
        localStorage.removeItem('bearer')
        throw error
      }
    },
    async fetchUser() {
      const user = await client({
        url: '/users/me',
      })
      this.user = userStrapiMapper(user.data)
      localStorage.setItem('user', JSON.stringify(this.user))
    },
    async blockUser(userId: string) {
      const user = await client({
        method: 'put',
        url: `/users/${userId}`,
        data: {
          blocked: true,
        },
      })
      this.user = userStrapiMapper(user.data)
      localStorage.setItem('user', JSON.stringify(this.user))
    },
    async deleteUser(userId: string) {
      await client({
        method: 'delete',
        url: `/users/${userId}`,
      })
    },
    userSignOut() {
      this.$reset()
      localStorage.clear()
      router.go()
    },
  },
})
