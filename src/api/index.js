/**
 * 包含了n个接口请求的函数的模块
 * 每个函数返回的都是promise对象
 * */
  /**
   * 暴露函数的两种方法
   * 方法一 export function xxx(){}
   * 方法二 export const reqRegister = ()=>{}
   * */

  import ajax from './ajax'
  const register = '/register'
  const login = '/login'
  const update_user = '/update'


  //注册api
  export const reqRegister = (user)=>ajax('/register',user,'POST')
  //登录api
  export const reqLogin = ({username,password})=>ajax(login,{username,password},'POST')
  //更新用户api
  export const reqUpdateUser = (user)=>ajax(update_user,user,'POST')