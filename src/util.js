
export function getRedirectPath({type, avatar}) {
    const url = (type=== 'boss' ? '/boss' : '/genius')
    if(!avatar){
        return url + 'info'
    }
    return url 
}