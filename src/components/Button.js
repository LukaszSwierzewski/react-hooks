const Button = (props) => {
    const childHandleClick = () => {
        props.data.handleClick()
    }
    return (
      <div>
        <button onClick={event => childHandleClick()}>
           <p>{props.data.buttonText}</p>
           {props.data.toggler && <p>active</p>}
        </button>
      </div>
    );
  }
  
  export default Button