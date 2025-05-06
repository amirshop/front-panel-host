export interface IAuth {
  id: string
  username: string
  email: string
  roles: string
  tokenType: string
  accessToken: string
  password: string
}
export type IAuthLoginRequest = Pick<IAuth, 'username' | 'password'>
export type IAuthLoginResponse = Omit<IAuth, 'password'>

export type IAuthRegisterRequest = Pick<IAuth, 'username' | 'password'>
export type IAuthRegisterResponse = Omit<IAuth, 'password'>

export type IAuthUser = Pick<IAuth, 'username' | 'id' | 'accessToken' | 'tokenType'>
