import React, {useState} from 'react';

const SimpleInput = (props) => {

  const [enteredName,setEnteredName] = useState('');
  const [enteredNameTouched,setEnteredNameTouched] = useState(false);
  

  const enteredNameIsValid = enteredName.trim() !== '';  
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;   
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  let formIsValid = false;
  
  if(enteredNameIsValid){
    formIsValid = true;
  }

  const nameInputChangeHandler = e => {
    setEnteredName(e.target.value);
    setEnteredNameTouched(true);
  }

  const nameInputBlurHandler = () => {  
    setEnteredNameTouched(true);  
  }

  const formSubmitHandler = (e) =>{
    e.preventDefault();
    if(nameInputIsInvalid){ 
      return
    }
    setEnteredName('');
    setEnteredNameTouched(false);
  }
  
  
  return (
    <form onSubmit = {formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' 
        onChange = {nameInputChangeHandler} value = {enteredName} onBlur={nameInputBlurHandler}/>
      </div> 
      { nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

