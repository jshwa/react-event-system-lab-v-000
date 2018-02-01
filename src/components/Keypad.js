import React from 'react';

class Keypad extends React.Component{

  render(){
    return (
    <input type='password' onkeyUp={()=>{console.log('Entering password...')}}/>
  )
  }
}

export default Keypad
