# qqmusic-sign
QQ音乐API sign算法简易封装

##安装

npm安装
``` shell
npm install qqmusic-sign
```

yarn安装
``` shell
yarn add qqmusic-sign
```

##使用方法
```javascript
const getSign = require("qqmusic-sign");

//传入对象
let obj = {
  comm: { ct: 24, cv: 0 },
  friendConcern: {
    module: "Concern.ConcernSystemServer",
    method: "cgi_concern_user_v2",
    param: {
      opertype: 0,
      source: 0,
      userinfo: { usertype: 0, userid: "owCF7w4z7e6s7z**" },
    },
  },
};

let objSign = getSign(obj)

//传入文字
let str = `{"comm":{"ct":24,"cv":0},"friendConcern":{"module":"Concern.ConcernSystemServer","method":"cgi_concern_user_v2","param":{"opertype":0,"source":0,"userinfo":{"usertype":0,"userid":"owCF7w4z7e6s7z**"}}}}`;
let strSign = getSign(str)
```