import { privateDecrypt } from 'crypto';
import { eventNames } from 'process';
import React, { ChangeEvent, useState } from 'react';

interface MyButtonProps {
    text?: string | number | boolean;
    onClick?: () => void;
}
interface Book {
    name: string,
    price: number,
}

const MyButton: React.FC<MyButtonProps> = (props) => {

  
    const [value, setValue] = useState(1);
    const [textValue, settextValue] = useState<string | boolean>("Enter name in placeholder");
    const [book, setbook] = useState<Book>(
        {
            name: "One Boook",
            price: 9000
        }
    );
const handlOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    let myValue = event.target.value
    settextValue(myValue)
    console.log(myValue);


}
 
    

    return (
        <div>

            <div>
                <input type="text" placeholder="Enter name " onChange={handlOnchange}  />
            </div>
            <div>
                {textValue}
            </div>



            <div>
                <h1>Book name : {book.name}</h1>
                <h1>Book Price : {book.price}</h1>
            </div>



            <div>
                <h1>Value: {value}</h1>
                <button onClick={() => setValue(value + 1)}>
                    {props.text}
                </button>
            </div>
        </div>
    );
}

export default MyButton;
