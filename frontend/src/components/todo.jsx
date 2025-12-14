export function Todos({todos}){
     
   return <div>
    {todos.map(function(todo){
        return <div>
            <h4>{todo.title}</h4>
            <h4>{todo.description}</h4>
            <h4>{todo.completed==true ? "completed":"Mark as completed"}</h4>
        </div>
    })}
   </div>
}