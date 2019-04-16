import React from 'react'

const Currency = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.value}</td>
            <td>{props.lastChange}</td>
        </tr>
    )
};

export default Currency