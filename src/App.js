import styled from "styled-components"
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.gaurav ? "red" : "white"};
  color: ${props => props.gaurav ? "white" : "red"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const App=()=>{
return(
  <div>
    <Button>Normal btn</Button>
    <Button gaurav>Props btn</Button>
  </div>
);
}
export default App;
