import React from 'react'
import {inject, observer} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import {Button} from "antd"

@inject("UserListStore")
@observer
class UserListPage extends React.Component {

    push = ()=>{
        this.props.history.push("/user/add?name=231");
    }
    

    componentDidMount() {
        const {UserListStore} = this.props;
        UserListStore.getUserList();
    }

    render(){
        const {UserListStore} = this.props;
        console.log(UserListStore.userList, 22222)
        return (
            <div>
                {
                    UserListStore.userList.map((item,index)=><p key={index}>{item.user_name}</p>)
                }
            </div>
        )
    }
}

export default withRouter(UserListPage);

