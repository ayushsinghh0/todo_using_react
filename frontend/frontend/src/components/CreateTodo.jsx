


export function CreateTodo(){
    return <div>
        <input style={{
             padding : 5,
             margin : 5

        }}
         type="text" placeholder="title"></input><br/>
        <input  style={{
             padding : 5,
             margin : 5

        }} type="text" placeholder="description"></input><br/>

        <button  style={{
             padding : 5,
             margin : 5

        }}> Add a todo</button>

    </div>
}