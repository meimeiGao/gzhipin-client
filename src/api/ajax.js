/**
 * 使用axios 封装的ajax 的请求函数
 * 函数返回的是一个promise的对象
 * */
  import axios from 'axios'
  export default function ajax(url,data={},type='GET') {
    if(type==='GET'){
      var paramsStr = '';
      Object.key(data).forEach(key=>{
        paramsStr+=key+"="+data[key]+"&"
      })
      
      if (paramsStr) {
        paramsStr = paramsStr.substring(0,paramsStr.length-1)
      }
      return axios.get(url+'?'+paramsStr)//发送get请求
    }else {//发送post请求
      return axios.post(url,data,"POST")
    }
    
    
  }