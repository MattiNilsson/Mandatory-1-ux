import React, {useState} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  .overAll{
    display:flex;
    justify-content: center;
    width: 200px;
    height: 50px;
    margin: 10px;
  }

  .container{
    position: absolute;
    background-color: lightgray;
    width: 200px;
    height: 50px;
    border-radius: 5px 5px 0px 0px;
    transition: 0.2 linear all;
  }
  .overAll:hover > .container{
    background-color: #c2c2c2;
  }
  .overAll:hover > .disabled{
    background-color: lightgray !important;
  }
  .overAll:hover:not(focus-within) > .container > .underline{
    background-color: #4d4d4d;
  }
  .underline{
    position: absolute;
    bottom:0px;
    width: 200px;
    height: 2px;
    background-color: gray;
    z-index:4;
    transition: 0.2s ease-out all;
  }

  .input{
    position: absolute;
    top:2px;
    left:0;
    background-color: rgba(0,0,0,0);
    border:none;
    padding: 20px 7px 15px 35px;
    outline: none;
    font-size: 16px;
    z-index: 2;
  }

  .containerIcon{
    position: absolute;
    left: 10px;
    top: 16px;
    font-size: 18px;
    color: gray;
  }

  label{
    margin: 0;
    position: absolute;
    left: 35px;
    top: 13px;
    transition: 0.2s ease-out all;
    color: gray;
    z-index: 1;
    -webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
  }

  .container:focus-within > .underline{
    background-color: #7d48e0 !important;
    height: 2.5px;
    z-index: 2;
  }

  .container:focus-within > label{
    color: #7d48e0;
    top: 6px;
    left: 35px;
    font-size: 10px;
  }
  .container:focus-within{
    background-color: #b8b8b8 !important;
  }

  .input:focus:valid ~ label{
    color: #7d48e0;;
    top: 6px;
    left: 35px;
    font-size: 10px;
  }

  .input:valid ~ label{
    color: gray;
    top: 6px;
    left: 35px;
    font-size: 10px;
  }
  .dissLabel{
    color: ${props => props.text === "" ? "gray" : "#7d48e0"};
    top: ${props => props.text === "" ? "13px" : "6px"};
    left: 35px;
    font-size: ${props => props.text === "" ? "16px" : "10px"};
  }
  .focusUnderline{
    position: absolute;
    bottom:0px;
    width: 200px;      
    z-index:4;
    transition: 0.2s ease-out all;
    background-color: #7d48e0 !important;
    height: 2.5px;
    z-index: 2;
  }
  .focusLabel{
    color: #7d48e0;
    top: 6px;
    left: 35px;
    font-size: 10px;
  }
  .focusContainer{
    background-color: #b8b8b8 !important;
    position: absolute;
    width: 200px;
    height: 50px;
    border-radius: 5px 5px 0px 0px;
    transition: 0.2 linear all;
  }

`

function TextField(props) {
  const [inputValue, setInputValue] = useState("");

  function changeInput(e){
    setInputValue(e.target.value)
  }
  if(props.focusState){
    return (
      <Wrapper>
        <div className="overAll">
          <form className="focusContainer">
            
            <i className="material-icons containerIcon">help_outline</i>
            <label className="focusLabel">{props.text}</label>
            <div className="focusUnderline"></div>
          </form>
        </div>
      </Wrapper>
    );
  }
  if(props.disabled){
    return (
      <Wrapper text={inputValue}>
        <div style={{opacity : "0.7"}} className="overAll">
          <form className="container disabled">
            <input type="text" disabled value={inputValue} onChange={(e) =>changeInput(e)} className="input" required/>
            <i style={{color: "#b0b0b0"}} className="material-icons containerIcon">thumb_down</i>
            <label className="dissLabel" style={{color: "#b0b0b0"}}>{props.text}</label>
          </form>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div className="overAll">
        <form className="container">
          <input type="text" value={inputValue} onChange={(e) =>changeInput(e)} className="input" required/>
          <i className="material-icons containerIcon">calendar_today</i>
          <label >{props.text}</label>
          <div className="underline"></div>
        </form>
      </div>
    </Wrapper>
  );
}

export default TextField;