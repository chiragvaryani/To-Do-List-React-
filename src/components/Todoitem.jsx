/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import Todoitem from "./Todoitem1";
function Todoitems_fun({ todoitems, onDeleteClick }) {
  return (
    <>
      <div>
        {todoitems.map((item) => (
          <Todoitem
            todo_name={item.name}
            todo_date={item.dueDate}
            onDeleteClick={onDeleteClick}
          ></Todoitem>
        ))}
      </div>
    </>
  );
}
export default Todoitems_fun;
