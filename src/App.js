import React from 'react';
import './App.css';

function App() {

  const [boxPosition, setPosition] = React.useState({ top: 50, left: 0 });
  const [transitionSpeed, setTransitionSpeed] = React.useState(0.5);

  const handleClick = (e) => {
    setPosition({ top: e.clientY - 25, left: e.clientX - 25 });
  }

  const handleInputChange = e => {
    setTransitionSpeed(e.target.value);
  }

  const handleFocus = e => e.stopPropagation();

  return (
    <div id="app" onClick={handleClick}>
      <input
        type="number"
        placeholder="Input transition speed"
        pattern="[0-9]*"
        onChange={handleInputChange}
        onFocus={handleFocus}
      />
      <div
        className="squared-box"
        style={{
          ...boxPosition,
          transition: `left ${transitionSpeed}s , top ${transitionSpeed}s`
        }} />
    </div>
  );
}

export default App;
