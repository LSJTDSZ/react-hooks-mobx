import { observable, action, computed } from "mobx"

class Warehouse1 {
    @observable title ='WareStore1'
    @observable todoList = []
    @computed get total() {
      return `当前${this.todoList.length}条`
    }
    @action addTodoList=(payload)=>{ // 新增列表
        this.todoList.push(payload)
    }
    @action deleteTodoList=()=>{ // 删除第一条数据
        this.todoList.shift()
    }
}
export const WareStore1 = new Warehouse1()