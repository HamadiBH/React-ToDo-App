import React from 'react'

class form extends React.Component {
    
    
    state = {
        inputValue: '',
        todoItems: []
        
    };
    

    onChange = (event) => {
        this.setState({
            
            inputValue: event.target.value
        });
        
    }

    addTodo = (event) => {
        event.preventDefault();
        if (this.state.inputValue.length){
        this.setState({
            
            todoItems: [...this.state.todoItems,{ name :this.state.inputValue, x :true , id:Date.now()}],
            inputValue: ''
        });
        }
        else {
            alert("Add ToDo!");
        }
    }

    

    deleteTodo = (id) => {
    
        let newTasks = this.state.todoItems.filter(item => item.id !== id)
        this.setState({

            todoItems: newTasks
        });
    }
    
    switcher = (id) => {
    
        this.setState({


            todoItems: this.state.todoItems.map(item => item.id === id ? {...item , x :!item.x}: item)
           

            });

        
    }



    render() {
    return (
        <div>
            <div id='todoform'>
                <div className="hdl">
                    <h1>ToDo List</h1>
                    <h3>Add New ToDo</h3>
                    <input id="newinpt" placeholder="New ToDo..." type="text" onChange={this.onChange} value={this.state.inputValue} />
                    <button id="inpt" onClick={this.addTodo} >Add</button>
                </div>
            </div>

            <div id="lst">

                <h2>DO IT!</h2>
                <div id="tasklist">
      

{
                  this.state.todoItems.map((item,i) => 
       
                    <div className="card" key={i}>  
                         
                        <h3 className={item.x?"inpttxt":"linetgh"}>{item.name}</h3>
                        <div className='btns'>
                            <button className='cmplt' onClick={()=>this.switcher(item.id)}>{item.x ?'Complete':'Undo'}</button>
                            <button className='dlt' onClick={()=>this.deleteTodo(item.id)}>Delete</button>
                        </div>
                    </div> 
                  )
}
            
        
       
                </div>
            </div>
        </div>
        
    )
}
}

export default form
