//eslint-disable-next-line
import React,{Component} from 'react'
import './register.less'
import {
  NavBar,
  Icon,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Checkbox,
  Radio,
  Button
} from 'antd-mobile';

import {connect} from 'react-redux'
import Logo from '../../components/logo/logo.jsx'
import {register} from '../../redux/actions'

const CheckboxItem = Checkbox.CheckboxItem;
const RadioItem = Radio.RadioItem;
const ListItem = List.Item;

class Register extends Component{
  state={
    userName:'',//用户名
    password:'',//密码
    comfirmPassword:'',//确认密码
    type:'laoban'
  };
  
  //点击注册调用
  registerForm=()=>{
    this.props.register(this.state)
  }
  handleChange=(name,val)=>{
    this.setState({
      [name]:val
    })
  }
  toLogin = ()=>{
    this.props.history.replace("../login/login.jsx")
  }

  render() {
    const {type} = this.state
    const {msg} = this.props.user
    return(
      <div className='container'>
        <NavBar>BOSS 直 聘</NavBar>
        <Logo/>
        <WingBlank>
          <List className='register-list'>
            {msg?<div className="error_msg">{msg}</div>:null}
            <InputItem className='user' placeholder="请输入用户名" onChange={val=>this.handleChange('userName',val)}>用户名:</InputItem>

            <InputItem type='password' className='password' placeholder="请输入密码" onChange={val=>this.handleChange('password',val)}>密码:</InputItem>
        
            <InputItem type='password' className='confirm-password' placeholder="请输入确认密码" onChange={val=>this.handleChange('comfirmPassword',val)}>确认密码:</InputItem>
  
            <ListItem>
              <span>用户类型</span>
              &nbsp;&nbsp;&nbsp;
              <Radio onChange={()=>this.handleChange('type','dashen')} checked={type==='dashen'}>大神</Radio>
              &nbsp;&nbsp;&nbsp;
              <Radio onChange={()=>this.handleChange('type','laoban')}  checked={type==='laoban'}>老板</Radio>
            </ListItem>
  
            <WhiteSpace/>
            <Button type="primary" onClick={this.registerForm}>注册</Button>
            <Button onClick={this.toLogin}>已有帐号</Button>
          </List>
        </WingBlank>

      </div>
      
    )

  }
}

export default connect(
  state=>({user:state.user}),
  {register}
)(Register)