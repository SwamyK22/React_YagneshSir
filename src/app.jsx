import React from 'react';

const bg = 'red';
const color = '#fff';

function App(props) {
  const { title, desc } = props;
  return (
    <>
      <h1 style={{
        backgroundColor: bg,
        color,
      }}
      >
        { title }
      </h1>
      <h2>{ desc }</h2>
    </>
  );
}
export default App;
