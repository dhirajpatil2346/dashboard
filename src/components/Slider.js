import React from 'react';
import Slider from 'react-input-slider';
import { useState } from 'react';

function Sliderr(props) {
    const [state, setState] = useState({msg:props.msg, x: props.x});

  return (
    <div>
      ({state.msg}  =   {state.x})
      <Slider
        axis="x"
        x={state.x}
        onChange={({ x }) => setState(state => ({ ...state, x }))}
      />
      
    </div>
  );
}
export default Sliderr;