const getSign = require("./index");

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

let string = `{"comm":{"ct":24,"cv":0},"friendConcern":{"module":"Concern.ConcernSystemServer","method":"cgi_concern_user_v2","param":{"opertype":0,"source":0,"userinfo":{"usertype":0,"userid":"owCF7w4z7e6s7z**"}}}}`;

console.log(getSign(obj));
console.log(getSign(string));