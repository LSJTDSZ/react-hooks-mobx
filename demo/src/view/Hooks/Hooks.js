import React,{useState,useEffect} from "react"
import { useObserver, useLocalStore } from 'mobx-react'
import store from "../../store/index"
function Hooks() {
  let [data,setDatas] = useState(1)
  let localStore = useLocalStore(()=>store).WareStore1
  useEffect(()=>{
    localStore.addTodoList("新增一条")
  },[data])
  return useObserver(()=><div>
           <button onClick={()=>{setDatas(++data)}}>增加</button>
           {
             localStore.todoList.map((item,index)=><li key={index+item}>{item}</li>)
           }
        </div>)
}
export default Hooks