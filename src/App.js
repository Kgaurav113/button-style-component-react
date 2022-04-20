import styled from "styled-components";
import React from "react";
const Button = styled.button`
  padding: 10px;
  background-color: red;
  color: white;
`;
const Button1 = styled.button`
  background-color: blue;
  padding: 10px;
  margin-left: 20px;
  color: white;
`;
function App() {
  return (
    <>
      <Button>click</Button>
      <Button1>click me</Button1>
    
    </>
  );
}

export default App;
