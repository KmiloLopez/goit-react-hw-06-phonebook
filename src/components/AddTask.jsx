import { useDispatch } from "react-redux";
import { createTask } from "../redux/contacts/slice";

const AddTask = () => {
  const dispatch = useDispatch();

  const handleCreateTask = (e) => {
    e.preventDefault();
    const { text } = e.target.elements;
    if (text.value) {
      dispatch(createTask(text.value));
    }
  };

  return (
    <form onSubmit={handleCreateTask}>
      <h3>Add task</h3>
      <input type="text" placeholder="Task name" name="text" />
      <button type="submit">Add task</button>
    </form>
  );
};

export default AddTask;
