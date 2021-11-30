import React from 'react'
import InputBox from './InputBox'
import Title from './Title'
import './InputBox.css'

class InputBoxContainer extends React.Component {
    
    render () {
        return <div className='inputbox-container'>
                <Title title={'Följsamhet:'} /> <InputBox />
                <Title title={'Inkallning:'} /> <InputBox />
                <Title title={'Sitt under marsch:'} /> <InputBox />
                <Title title={'Apportering:'} /> <InputBox />
                <Title title={'Fjärrdirrigering:'} /> <InputBox />
                <Title title={'Hopp över hinder:'} />  <InputBox />
                <Title title={'Helhetsintryck:'} /> <InputBox />
        </div>
    }
}

export default InputBoxContainer