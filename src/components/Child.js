const Child = ({handleClick, test}) => {
  return (
    <div>
      <button onClick={event => handleClick(event, 100)}>
        Click {test}
      </button>
    </div>
  );
}

export default Child