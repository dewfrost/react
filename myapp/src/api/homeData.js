import myajax from "@/tool/myajax.js";

export default {
  goodsList(cb){
    const config = {
      url:"",
      option:{},
      success:(data)=>{
        cb(data)
      }
    }
    myajax.fetch(config);
  }
}