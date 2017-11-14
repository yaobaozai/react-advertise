import React from 'react'
import { connect } from 'react-redux'
import { List,Badge } from 'antd-mobile'
@connect(
    state => state
)
class Msg extends React.Component {
    getLast(arr) {
        return arr[arr.length - 1]
    }
    render() {
        // if(!this.props.chat.chatmsg.length){
        //     return 
        // }
        const Item = List.Item
        const Brief = Item.Brief
        const userid = this.props.user._id
        const userinfo = this.props.chat.users
        // 按照聊天用户分组，根据chatid
        const msgGroup = {}
        this.props.chat.chatmsg.forEach(v => {
            msgGroup[v.chatid] = msgGroup[v.chatid] || []
            msgGroup[v.chatid].push(v)
        })
        // console.log(msgGroup)
        const chatList = Object.values(msgGroup).sort((a,b)=>{
            const a_last = this.getLast(a).create_time
            const b_last = this.getLast(b).create_time
            return b_last - a_last

        })

        return (
            <div>

                {chatList.map(v => {
                    const lastItem = this.getLast(v)
                    const targetId = v[0].from === userid ? v[0].to : v[0].from
                    const unreadNum = v.filter(v=>!v.read&&v.to===userid).length
                    if(!userinfo[targetId]){
                        return null
                    }

                    return (
                        <List key={lastItem._id}>
                            <Item
                                style={{zIndex:99}}
                                extra={<Badge text={unreadNum}></Badge>}
                                thumb={require(`../img/${userinfo[targetId].avatar}.png`)}
                                arrow="horizontal"
                                onClick={()=>{
                                    this.props.history.push(`/chat/${targetId}`)
                                }}
                                >
                                {lastItem.content}
                                <Brief>{userinfo[targetId].name}</Brief>
                            </Item>
                        </List>)

                })}


            </div>
        )
    }

}

export default Msg