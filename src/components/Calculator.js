import React, { useState } from 'react'

const Calculator = () => {

    let [numtext, setNumtext] = useState('');

    const changeValues = (e) => {
        setNumtext(e.target.value);
    }
    
    const Button = ({ num }) => {
        return (
            <button onClick={() => { setNumtext(numtext += num) }} className="btn-calci"> {num} </button>
        )
    }
    return (
        <div className="container">
            <div className="calculator">
                <input id="calci-input" type="text" placeholder="Values to calculate" onChange={changeValues} value={numtext} />
                <Button num='9' />
                <Button num='8' />
                <Button num='7' />
                <Button num='6' />
                <Button num='5' />
                <Button num='4' />
                <Button num='3' />
                <Button num='2' />
                <Button num='1' />
                <button onClick={() => { setNumtext(numtext += '0') }} className="btn-calci-zero">0</button>
            </div>
            <div className="signs">
                <Button num='+' />
                <Button num='-' />
                <Button num='*' />
                <Button num='/' />
            </div>
        </div>
    )
}

export default Calculator
