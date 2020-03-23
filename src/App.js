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
.row{
  display:flex;
  border: 1px solid lightgray;
  border-left: 3px solid #834aed;
  width: 700px;
  justify-content: space-evenly;
  margin-top: 2px;
  transition: 0.2s all ease-out;
  position: relative;
}
.rowTop{
  display:flex;
  border: 1px solid lightgray;
  border-left: 3px solid lightgray;
  width: 700px;
  justify-content: space-evenly;
  margin-top: 3px;
  transition: 0.2s all ease-out;
  position: relative;
}
.hover{
  position: absolute;
  left:0;
  width: 0%;
  height: 100%;
  z-index: -1;
  background-color: #834aed;
  transition: all 0.5s ease-in;
  opacity: 0.2;
}
.row:hover .hover{
  width: 100%;
  opacity: 0.05;
  transition: all 1s ease-out;
}
h3{
  width: 200px;
}
`

function App() {
  return (
    <div className="App">
      <Wrapper>
        <div className="flex">
          <h2>Material design remake</h2>
          <div className="rowTop">
            <div className="hover"></div>
            <h3>Normal</h3>
            <h3>Disabled</h3>
            <h3>Focused</h3>
          </div>
          <div className="row">
            <div className="hover"></div>
            <TextField text="TextField" disabled={false} />
            <TextField text="text" disabled={true} />
            <TextField text="To Be Focused" focusState={true} />
          </div>
          <div className="row">
            <div className="hover"></div>
            <Switch text="Switch" disabled={false} />
            <Switch text="Disabled" disabled={true} />
            <Switch text="Focused" focusState={true} />
          </div>
          <div className="row">
            <div className="hover"></div>
            <div className="flex">
              <CheckBox name="Check-" disabled={false} />
              <CheckBox name="Box" disabled={false} />
            </div>
            <div className="flex">
              <CheckBox name="Diss" disabled={true} />
              <CheckBox name="Diss" disabled={true} />
            </div>
            <div className="flex">
              <CheckBox name="Focus" focusState={true} />
              <CheckBox name="This" focusState={true} />
            </div>
          </div>
          <div className="row">
            <div className="hover"></div>
            <Radio options={["Ra-", "dio-", "buttons"]} name={"animals"} disabled={false} />
            <Radio options={["Games", "Movies", "Music", "Books"]} name={"Hobbies"} disabled={true} />
            <Radio options={["focused"]} name={"Hobbies"} focusState={true} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
