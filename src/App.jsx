/* eslint-disable react/no-unknown-property */
import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import Todoitems_fun from "./components/Todoitem";
import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";
function App() {
  const [Todoitems_list, setTodoitem] = useState([]);

  const handlenewiteam = (iteamName, itemDueDate) => {
    console.log(`new item add : ${iteamName} and date : ${itemDueDate}`);
    const newTodoitem = [
      ...Todoitems_list,
      { name: iteamName, dueDate: itemDueDate },
    ];
    setTodoitem(newTodoitem);
  };

  const handleDelete = (todoItemName) => {
    console.log(todoItemName);
    const newTodoitem = Todoitems_list.filter(
      (item) => item.name !== todoItemName
    );
    setTodoitem(newTodoitem);
  };
  return (
    <center className="todo-center">
      <AppName />
      <div class="container text-center">
        <div className="text-left">
          <Addtodo onNewitem={handlenewiteam} />
          {Todoitems_list.length <= 0 && <Welcome />}
          <Todoitems_fun
            todoitems={Todoitems_list}
            onDeleteClick={handleDelete}
          />
        </div>
      </div>
    </center>
  );
}

export default App;
