import React from 'react'

function textError(props) {
    return (
        <div class="error">
            {console.log(props)}
            {props.children}
        </div>
    )
}

export default textError
