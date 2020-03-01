// eslint-disable-next-line
import React,{Component} from 'react'
import {
  Button,
  InputItem,
  List,
  NavBar,
  Radio,
  WhiteSpace,
  WingBlank} from "antd-mobile";

import {connect} from 'react-redux'
import Logo from "../../components/logo/logo";
import {login} from '../../redux/actions'

class Login extends Component{
  //组件内的状态
  state={
    userName:'',
    password:''
  }
  
  //收集登录表单的数据
  handleChange=(name,value)=>{
    this.setState({
      [name]:value
    })
  }
  
  loginForm=()=>{
    console.log(this.state)
    this.props.login(this.state)
  }
  
  //去登录页面
  toRegister=()=>{
    this.props.history.replace('../register/register.jsx')
  }
    render() {
      return(
        <div className='container'>
          <NavBar>BOSS 直 聘</NavBar>
          <Logo/>
          <WingBlank>
            <List className='register-list'>
              <InputItem className='user' placeholder="请输入用户名" onChange={val=>this.handleChange('userName',val)}>用户名:</InputItem>
          
              <InputItem type='password' className='password' placeholder="请输入密码" onChange={val=>this.handleChange('password',val)}>密码:</InputItem>
          
              <WhiteSpace/>
              <Button type="primary" onClick={this.loginForm}>登录</Button>
              <Button onClick={this.toRegister}>还没有帐号</Button>
            </List>
          </WingBlank>
    
        </div>
      )
  }
}

export default connect(
  state=>(state.user),
  {login}
)(Login)