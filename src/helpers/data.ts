import { isPlaninObject } from './util'

export function transformRequest(data: any): any {
    if (isPlaninObject(data)) {
        return JSON.stringify(data)
    }
    return data
}





