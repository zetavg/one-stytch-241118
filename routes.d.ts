import type { OneRouter } from 'one'

declare module 'one' {
  export namespace OneRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/activity` | `/(tabs)/discover` | `/(tabs)/profile` | `/(tabs)/trade` | `/_sitemap` | `/activity` | `/discover` | `/notifications` | `/profile` | `/settings` | `/trade` | `/wallets`
      DynamicRoutes: never
      DynamicRouteTemplate: never
      IsTyped: true
    }
  }
}