import React from 'react'

const Currency = (props) => {

    const onClickSaveSubscription = () => {
        props.saveSubscription(props.id);
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.value}</td>
            <td>{props.lastChange}</td>
            <td><button onClick={onClickSaveSubscription}>Subscribe</button></td>
        </tr>
    )
};

export default Currency