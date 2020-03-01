/*
* 包含n个action creator
* 异步action
* 同步action
* */
import {
  AUTH_SUCCESS,
  ERROR_MSG
} from './action-types'

import {
  reqRegister,
  reqLogin
} from '../api'

//授权成功的同步action
const authSuccess = (user)=>({type:AUTH_SUCCESS,data:user})//data:user /user
//错误提示信息的同步action
const errorMsg = (msg)=>({type:ERROR_MSG,data:msg})

//异步的action
export const register = (user)=>{
  const {
    userName,
    password,
    comfirmPassword,
    type
  } = user
  
  //表单的前台验证,如果不通达,返回一个errorMsg的同步action
  if(!userName){
    errorMsg('用户名不能为空')
  }else if(!password){
    errorMsg('密码不能为空')
  }else if(!comfirmPassword){
    errorMsg('确认密码不能为空')
  }else if(password!==comfirmPassword){
    errorMsg('两次密码不一致')
  }
  
  //表单数据合法,返回一个发ajax请求的异步action
  return async dispatch=>{
   
   /**
    * 发送注册的ajax请求;
    * const promise = reqRegister(user)
    * promise.then(response=>{
    *   const result = response.data  result = {code:0/1,data:user,msg:''}
    * })
    *
    * */
    const response = await reqRegister({userName,
     password,
     type})
    const result = response.data
    if(result.code===0){//成功
      //分发授权成功的同步action
      dispatch(authSuccess(result.data))
    }else{//失败
      //分发错误提示信息的同步action
      dispatch(errorMsg(result.msg))
    }
  }
};

//注册异步的action
export const login = ({username,password})=>{
  if(!username){
    errorMsg('用户名不能为空')
  }else if(!password){
    errorMsg('密码不能为空')
  }
  return async dispatch=>{
    /**
     * 发送登录的ajax请求
     * */
    const response = await reqLogin({username,password})
    const result = response.data
    if(result.code===0){//成功
      //分发授权成功的同步action
      dispatch(authSuccess(result.data))
    }else{//失败
      //分发错误提示信息的同步action
      dispatch(errorMsg(result.msg))
    }
  }
}

