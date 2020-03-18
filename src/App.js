import React from 'react';
import TextField from "./components/TextField";
import styled from "styled-components";
import './App.css';

const Wrapper = styled.aside`
.flex{
  display:flex;
  flex-diretion: column;
  align-items: center;

}
`

function App() {
  return (
    <div className="App">
      <div className="flex">
        <div>UX</div>
        <TextField text="hello" disabled={true}/>
        <TextField text="text" />
      </div>
    </div>
  );
}

export default App;
