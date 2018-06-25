export default function Todo(props) {
  const navigateToList = () => {
    return props.history.push('/list');
  };

  return (
    <div className="todo">
      <p>I am a todo page!</p>
      <button foo='bar' className="go-to-list" onClick={ navigateToList }>Go To List</button>
    </div>
  );
}
