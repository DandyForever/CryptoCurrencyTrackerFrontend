import React from 'react'


const Subscription = (props) => {

    const onClickDeleteSubscription = () => {
        //todo fix deleteSubscription typeError (is not a function, why? - i dont know)
        props.deleteSubscription(props.subscriptionPK);
    };

    return (
    <tr>
        <td>{props.currencyDto.name}</td>
        <td>{props.userVal}</td>
        <td>{props.totalAssets}</td>
        <div><button onClick={onClickDeleteSubscription}>Delete</button></div>
    </tr>
    )
};


export default Subscription