/* eslint-disable react/prop-types */
function Todoitem({ todo_name, todo_date, onDeleteClick }) {
  return (
    <div className="row cg-row">
      <div className="col-4">{todo_name}</div>
      <div className="col-4">{todo_date}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger cg-btn"
          onClick={() => onDeleteClick(todo_name)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Todoitem;
