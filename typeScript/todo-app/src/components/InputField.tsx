import React, { useRef } from 'react'
import "./styles.css"
import { ReportHandler } from 'web-vitals';
interface Props {
  todo :string;
  setTodo : React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event : React.FormEvent)=>void;


}

const InputField = ({todo, setTodo , handleAdd}:Props) => {

  const inputRef =  useRef<HTMLInputElement>(null);
  return (
    <div>
      <form className="input" onSubmit={(e)=>
        {
          
          handleAdd(e)
          inputRef.current?.blur();

        }}>
        
        
        <input 
        ref = {inputRef}
        className="input__box"
        placeholder="Enter the task " 
        type="text"
        value={todo}
        onChange={
          (event)=> {
            console.log(event.target.value)
             setTodo(event.target.value)
          }
        } 
        
        ></input>
        <button className="input_submit" type="submit">Go</button>



      </form>
      
    </div>
  )
}

export default InputField
