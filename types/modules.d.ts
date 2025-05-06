declare module 'remoteAccounts/AccountApp' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'remoteAccounts/AccountRoutes' {
  import type { RouteRecordRaw } from 'vue-router'
  const routes: RouteRecordRaw[]
  export default routes
}
declare module 'remoteAccounts/AccountStore' {
  import { StoreDefinition } from 'pinia'
  interface AccountState {
    account: string
    accounts: string[]
  }
  export const useAccountStore: StoreDefinition<'account', AccountState, {}, {}>
}
