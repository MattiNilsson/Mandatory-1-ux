import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`

.overAll{
  width: 170px;
  margin: 10px 0px 10px 0px;
}
.radio{
  display:flex;
  align-items: center;
  width: 170px;
  padding: 5px 15px 5px 15px;
}
label{
  margin-left: 15px;
  color: #636363;
}
input{
  position: absolute;
  width: 100px;
  height: 20px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.fakeRadio{
  display:flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  border: 2px solid gray;
  border-radius: 12px;
  transition: 0.2s all linear;
}
.fakeSelected{
  width: 0px;
  height: 0px;
  transition: 0.2s all linear;
}
input:checked ~ .fakeRadio > .fakeSelected{
  width: 8px;
  height: 8px;
  background-color: #834aed;
  border-radius: 100%;
}
input:checked ~ .fakeRadio{
  border-color: #834aed;
}
input:focus ~ .fakeRadio > .effect{
  position: absolute;
  z-index: -1;
  opacity: 0.2;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color:gray;
  transition: 0.2 all ease-out;
}
input:hover ~ .fakeRadio > .effect{
  position: absolute;
  z-index: -1;
  opacity: 0.2;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color:gray;
  transition: 0.2 all ease-out;
}
input:focus:checked ~ .fakeRadio > .effect{
  background-color:#834aed;
}

`

function Radio(props){
  
  if(props.disabled){
    return(
      <Wrapper>
        <div className="overAll" style={{opacity : "0.3"}}>
          {props.options.map((radio) => {
            return (
            <div className="radio">
              <div className="fakeRadio">
                <div className="fakeSelected"></div>
                <div className="effect"></div>
              </div>
              <label>{radio}</label>
            </div>
            )
          })}
        </div>
      </Wrapper>
    )
  }

  return(
    <Wrapper>
      <div className="overAll">
        {props.options.map((radio) => {
          return (
          <div className="radio">
            <input type="radio" name={props.name} value={radio}/>
            <div className="fakeRadio">
              <div className="fakeSelected"></div>
              <div className="effect"></div>
            </div>
            <label>{radio}</label>
          </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Radio;