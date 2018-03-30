import myajax from "@/tool/myajax.js";

export default {
  goodsData(goodsID,cb){
    const config = {
      url:"http://localhost:4000/api/goods/goodsDetail?goodsID="+goodsID,
      option:{

      },
      success:(data)=>{
        cb(data)
      }
    }
    myajax.fetch(config);
  }
}