
export function getRedirectPath({type, avatar}) {
    const url = (type=== 'boss' ? '/boss' : '/genius')
    if(!avatar){
        return url + 'info'
    }
    return url 
}

export function getChatId(userId, targetId) {
    return [userId, targetId].sort().join('_')
}