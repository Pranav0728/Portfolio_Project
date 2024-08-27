export function isApiValid(key) {
    if (process.env.NEXT_PUBLIC_API_KEY === key){
        return true
    } else {
        return false
    }
}