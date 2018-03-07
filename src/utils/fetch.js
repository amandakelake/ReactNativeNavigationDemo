export default function post(url,data,sucCB,errCB) {
  // 域名、body、header等根据各自项目配置，还有部分安全，加密方面的设置
  const host = 'www.host.com';
  const requestUrl = `${host}/${url}`;
  const body = {};
  const headers = {
    'Content-Type': 'application/json',
    'User-Agent': ''
  };
  fetch(requestUrl, {
    method: 'POST',
    headers: headers,
    body: body
  }).then(res => {
    if (res && res.status === 200) {
      return res.json();
    } else {
      throw new Error('server');
    }
  }).then(res => {
    // 精简版判断
    if(res && res.code === 200 && res.enmsg === 'ok') {
      // 成功后的回调
      sucCB(res);
    }else {
      // 失败后的回调
      errCB(res);
    }
  }).catch(err => {
    // 处理错误
  })
}