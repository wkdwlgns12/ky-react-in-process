import React from 'react'

const Button = ({text,color='gray',children=null}) => {

    const onClickButton=(e)=>{
        console.log(e)
        console.log(text)
    }

    return (
        <button style={{color:color}} onClick={onClickButton}>{text}-{color.toUpperCase()}
        {children}
        </button>
    )
}

export default Button