myButton.addEventListener('click', (e)=>{
  let request = new XMLHttpRequest()
  request.open('get', 'http://jack.com:8002/xxx') // 配置request
  request.send()
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      console.log('请求响应都完毕了')
      console.log(request.status)
      if(request.status >= 200 && request.status < 300){
        console.log('说明请求成功')
        console.log(typeof request.responseText)
        console.log(request.responseText)
        let string = request.responseText
        // 把符合 JSON 语法的字符串
        // 转换成 JS 对应的值
        let object = window.JSON.parse(string) 
        // JSON.parse 是浏览器提供的
        console.log(typeof object)
        console.log(object)
        console.log('object.note')
        console.log(object.note)

      }else if(request.status >= 400){
        console.log('说明请求失败') 
      }

    }
  }
})
