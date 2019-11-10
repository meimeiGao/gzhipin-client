import React,{Component} from 'react'
import './register.less'
import {
  NavBar,
  Icon,
  WingBlank,
  List,
  InputItem,
  WhiteSpace
} from 'antd-mobile';
import Logo from '../../components/logo/logo.jsx'
export default class Register extends Component{
  render() {
    return(
      <div className='container'>
        <NavBar>BOSS 直 聘</NavBar>
        <Logo/>
        <WingBlank>
          <List className='register-list'>
            <InputItem className='user'>用户名:</InputItem>

            <InputItem className='password'>密码:</InputItem>
        
            <InputItem className='confirm-password'>确认密码:</InputItem>
           
          </List>
        </WingBlank>

      </div>
    )
  }
}