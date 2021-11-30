import React, { useState } from 'react'

const InputBox = () => {

    const [value, setValue] = useState(0) 


    return (
        <div className='inputbox-div'>
        <form className='inputbox-form'>
            <input className='inputbox-input' 
            type='number' 
            minLength='1' 
            maxLength='2' 
            max='10' 
            min='0' 
            step=".5" 
            onChange={(value) => setValue(value)} />
        </form>
        </div>
    )
}

export default InputBox