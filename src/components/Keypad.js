import React from 'react';

class Keypad extents React.Component{

  render(){
    <input type='password' onkeyUp:{()=>{console.log('Entering password...')}}/>
  }
}

export default Keypad