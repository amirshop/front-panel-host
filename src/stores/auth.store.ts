import { defineStore } from 'pinia'
import type { IAuth, IAuthLoginRequest, IAuthLoginResponse } from '@/models/auth.model'
import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'
// import { useAuthQuery } from '@/queries/useAuth.query'

export const useAuthStore = defineStore('auth', () => {
  // const authQuery = useAuthQuery()
  const authToken = useLocalStorage<string>('authToken', '')
  const userStorage = useLocalStorage('User', {} as IAuth)
  const login = async (dto: IAuthLoginRequest) => {
    // const { data, execute, loading, error } = authQuery.login.mutate()
    // try {
    //   await execute(dto)
    //   userStorage.value = data.value
    // } catch (error) {
    //   throw new Error('Error while fetching login')
    // }
  }
  const logout = () => {
    userStorage.value = {} as IAuth
  }
  const currentUser = computed(() => userStorage.value)

  return { currentUser, login, logout, authToken }
})
