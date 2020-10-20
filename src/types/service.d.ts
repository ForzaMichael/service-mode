import { InjectionKey } from 'vue'

export type InjectionToken<T extends (...args: any) => any> = InjectionKey<ReturnType<T>>
