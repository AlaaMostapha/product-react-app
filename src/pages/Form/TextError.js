import React from 'react'

function TextError(props) {
    return (
        <div class="error">
            {console.log(props)}
            {props.children}
        </div>
    )
}

export default TextError
