import { useState } from "react";

export default function ItemFormHandler({submit, btnText, title, isComplete, _id}){
    const initialInputs = {title: title || '', isComplete: isComplete || ''};
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const {name, value} = e.target; 
        setInputs(prevInputs =>({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs, _id)
        setInputs(initialInputs)
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="input">
            <input  
            type='text'
            name='title'
            value={inputs.title}
            onChange={handleChange}
            placeholder='Title'
            />
            <button>{btnText}</button>
            </div>
        </form>
    )
}