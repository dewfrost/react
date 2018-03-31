import myajax from "@/tool/myajax.js";

export default {
  goodsList(cb){
    const config = {
      url:"http://10.8.162.61:4000/api/list2",
      option:{},
      success:(data)=>{
        cb(data)
      }
    };
    myajax.fetch(config);
  }
}