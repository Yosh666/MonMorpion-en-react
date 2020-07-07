import React from 'react';

function Letter (props){
    const {reveal,letter} = props
    return <span className= {reveal ? 'letter revealed' : 'letter'}>{reveal? letter: <img src='../public/img/bat.png' alt='bat'></img>}</span>
}
export default Letter