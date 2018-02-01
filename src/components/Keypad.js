import React from 'react';

class Keypad extends React.Component{

  render(){
    <input type='password' onkeyUp={()=>{console.log('Entering password...')}}/>
  }
}

export default Keypad
