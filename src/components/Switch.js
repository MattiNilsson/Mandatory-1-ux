import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
.overAll{
  display:flex;
  justify-content: center;
  width: 200px;
  height: 50px;
  z-index:1;
}
form{
  position: absolute;
  display:flex;
  align-items: center;
  width: 200px;
  height: 50px;
}
label{
  position: absolute;
  left: 15px;
}
.switch{
  position: absolute;
  right: 35px;
  width: 20px;
  height:20px;
  background-color: white;
  border-radius: 100px;
  transition: all 0.1s ease-in;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.46);
-moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.46);
box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.46);
  
}
.container{
  z-index: -2;
  position: absolute;
  right: 17.5px;
  width: 35px;
  height: 15px;
  background-color: lightgray;
  border-radius: 100px;
  transition: all 0.1s ease-in;
}
.effect{
  border-radius: 100px;
  transition: all 0.1s ease-in;
  opacity: 0.2;
  width: 50px;
  height: 50px;
  position: relative;
  left: -15px;
  top: -15px;
  z-index: -1;
}
form:hover > .switch > .effect{
  opacity: 0.2;
  background-color:gray;
}
form:hover > input:checked ~ .switch > .effect{
  opacity: 0.2;
  background-color:#834aed;
}
input:focus ~ .switch > .effect{
  z-index: -1;
  opacity: 0.2;
  width: 50px;
  height: 50px;
  position: relative;
  left: -15px;
  top: -15px;
  border-radius: 100px;
  background-color:gray;
}
input:checked:focus ~ .switch > .effect{
  background-color:#834aed;
}
input{
  width: 200px;
  height: 50px;
  z-index: 5;
  outline:none;
  -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
input:checked ~ .switch{
  background-color: #834aed;
  right: 15px;
}
input:checked ~ .container{
  background-color: #a482e3;
}


.focusSwitch{
  position: absolute;
  right: 15px;
  width: 20px;
  height:20px;
  background-color: #834aed;
  border-radius: 100px;
  transition: all 0.1s ease-in;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.46);
-moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.46);
box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.46);
}
.focusEffect{
  border-radius: 100px;
  transition: all 0.1s ease-in;
  opacity: 0.2;
  width: 50px;
  height: 50px;
  position: relative;
  left: -15px;
  top: -15px;
  z-index: -1;
  background-color:#834aed;
}
.focusContainer{
  z-index: -2;
  position: absolute;
  right: 17.5px;
  width: 35px;
  height: 15px;
  background-color: #a482e3;
  border-radius: 100px;
  transition: all 0.1s ease-in;
}
`

function Switch(props){
  if(props.focusState){
    return(
      <Wrapper>
        <div className="overAll">
          <form>
            <label>{props.text}</label>
            <div className="focusSwitch">
              <div className="focusEffect"></div>
            </div>
            <div className="focusContainer"></div>
          </form>
        </div>
      </Wrapper>
    )
  }
  if(props.disabled){
    return(
      <Wrapper>
        <div style={{opacity : "0.3"}} className="overAll">
          <form>
            <label>{props.text}</label>
            <div className="switch">
              
            </div>
            <div className="container"></div>
          </form>
        </div>
      </Wrapper>
    )
  }

  return(
    <Wrapper>
      <div className="overAll">
        <form>
          <input type="checkbox" />
          <label>{props.text}</label>
          <div className="switch">
            <div className="effect"></div>
          </div>
          <div className="container"></div>
        </form>
      </div>
    </Wrapper>
  )
}

export default Switch;