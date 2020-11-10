const context = require.context('./model',false, /\.js$/)
const getModel = context.keys().map((key)=>context(key))
const Store = {}
getModel.forEach((item)=>{
  for(let key in item) {
     Store[key] = item[key]
  }
})
export default Store