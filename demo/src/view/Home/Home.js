import React,{ Component } from "react"
import { observer, inject } from "mobx-react"
@inject("store") @observer
class Home extends Component {
    state= {
      value: 'Home',
    }
    render() {
      console.log(this.props)
      let { WareStore1 } = this.props.store
      return (
        <div>
          <button onClick={this.clickBtn.bind(this,'add')}>新增数据</button>
          <button onClick={this.clickBtn.bind(this,'delete')}>删除数据</button>
          {
            WareStore1.todoList.map((item,index,arr)=><li key={index+item}>{item}</li>)
          }
          {
            WareStore1.total
          }
        </div>
      )
    }
    clickBtn(type) {
      let { WareStore1 } = this.props.store
      switch(type) {
        case 'add':
            WareStore1.addTodoList('新增一条数据')
             break;
        case 'delete':
            WareStore1.deleteTodoList()
            break;
        default: 
      }
    }
}

export default Home