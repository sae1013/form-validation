import React, {useState,useEffect,useRef} from 'react';

const SimpleInput = (props) => {

  const [enteredName,setEnteredName] = useState('');
  const [enteredNameIsValid,setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched,setEnteredNameTouched] = useState(false);
  const nameInputRef = useRef();
  
  const nameInputChangeHandler = e => {
    setEnteredName(e.target.value);
    
  }
  
  const formSubmitHandler = (e) =>{
    e.preventDefault();
    setEnteredNameTouched(true);

    // const enteredValue = nameInputRef.current.value;
    if(!enteredName.trim()){ 
      setEnteredNameIsValid(false);
      return
    }
    setEnteredName('');
    setEnteredNameIsValid(true); 
  }
  
  const nameInputClasses = (enteredNameTouched && !enteredNameIsValid) ? 'form-control invalid': 'form-control'; //CSS literal...Not using CSS-Module
  
  
  return (
    <form onSubmit = {formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} onChange = {nameInputChangeHandler} value = {enteredName} type='text' id='name' />
      </div> 
      { (enteredNameTouched && !enteredNameIsValid)&& <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
