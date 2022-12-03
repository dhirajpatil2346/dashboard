import React from 'react';
import Slider from 'react-input-slider';
import { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
function Slide() {
    const [state, setState] = useState({x:10,y:10});

  return (
    <div>
      <Slider
        axis="x"
        x={state.x}
        onChange={({ x }) => setState({x:x,y:2*x })}
      />
      <PieChart
        data={[
            { title: 'One',value: state.x, color: '#E38627' },
            { title: 'Two', value: state.y, color: '#C13C37' },
            { title: 'Three', value: 10, color: '#6A2135' },
        ]}
        />
    </div>
  );
}
export default Slide;