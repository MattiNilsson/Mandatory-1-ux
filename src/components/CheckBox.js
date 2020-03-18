import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
.overAll{
  display:flex;
  width: 200px;
}
.radio{
  display:flex;
  align-items: center;
  width: 170px;
  padding: 5px 15px 5px 15px;
}
.fakeCheckbox{
  position: absolute;
  width: 12px;
  height: 12px;
  border: 2px solid gray;
  border-radius: 2px;
}
.fakeSelected{
  opacity: 0;
  transition: 0.2s all linear;
  position: absolute;
  width: 12px;
  height: 12px;
  left: -2.5px;
  top: -2.5px;
  font-size: 17px;
  -webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
  z-index: 1;
  color: gray;
}
input:checked ~ .fakeCheckbox > .fakeSelected{
  opacity: 1;
  position: absolute;
  left: -2.5px;
  top: -3px;
  width: 12px;
  height: 12px;
  font-size: 17px;
  color: #834aed;
}
input:checked ~ .fakeCheckbox{
  border-color: #834aed
}
input{
  position: absolute;
  width: 100px;
  height: 20px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  z-index: 2;
}
label{
  margin-left: 30px;
  margin-bottom: 2px;
  color: #636363;
}
input:focus ~ .fakeCheckbox > .effect{
  position: absolute;
  left: -9px;
  top: -9px;
  z-index: -1;
  opacity: 0.2;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color:gray;
  transition: 0.2 all linear;
}
input:focus:checked ~ .fakeCheckbox > .effect{
  background-color:#834aed;
}
`

function CheckBox(props){
  if(props.disabled){
    return(
      <Wrapper>
        <div className="overAll" style={{opacity: "0.3"}}>
          <div className="radio">
            <div className="fakeCheckbox">
              <i class="material-icons fakeSelected">check_box</i>
              <div className="effect"></div>
            </div>
            <label>{props.name}</label>
          </div>
        </div>
      </Wrapper>
    )
  }

  return(
    <Wrapper>
      <div className="overAll">
        <div className="radio">
          <input type="checkbox" name={props.name} value={"hejsan!"}/>
          <div className="fakeCheckbox">
            <i class="material-icons fakeSelected">check_box</i>
            <div className="effect"></div>
          </div>
          <label>{props.name}</label>
        </div>
      </div>
    </Wrapper>
  )
}

export default CheckBox;