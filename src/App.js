import React from 'react';
import TextField from "./components/TextField";
import Switch from "./components/Switch";
import Radio from "./components/Radio";
import CheckBox from "./components/CheckBox";
import styled from "styled-components";
import './App.css';

const Wrapper = styled.div`
.flex{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`

function App() {
  return (
    <div className="App">
      <Wrapper>
        <div className="flex">
          <div>UX</div>
          <TextField text="hello" disabled={false} />
          <TextField text="text" disabled={true} />
          <Switch text="test" disabled={false} />
          <Switch text="Disabled" disabled={true} />
          <CheckBox name="Pankakor" disabled={false} />
          <CheckBox name="Tacos" disabled={false} />
          <CheckBox name="Diss" disabled={true} />
          <Radio options={["cats", "dogs", "monkeys"]} name={"animals"} disabled={false} />
          <Radio options={["Games", "Movies", "Music", "Books"]} name={"Hobbies"} disabled={true} />
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
