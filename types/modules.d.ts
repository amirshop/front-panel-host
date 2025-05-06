declare module 'remotePermissions/PermissionApp' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// declare module 'remotePermissions/PermissionRoutes' {
//   import type { RouteRecordRaw } from 'vue-router'
//   const routes: RouteRecordRaw[]
//   export default routes
// }
declare module 'remotePermissions/PermissionStore' {
  import { StoreDefinition } from 'pinia'
  interface PermissionState {
    permission: string
    permissions: string[]
  }
  export const usePermissionStore: StoreDefinition<'permission', PermissionState, {}, {}>
}
