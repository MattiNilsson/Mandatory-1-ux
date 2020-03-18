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
  }

  .underline{
    position: absolute;
    bottom:0px;
    width: 200px;
    height: 2px;
    background-color: gray;
    z-index:4;
    transition: 0.3s ease-in all;
  }

  .input{
    position: absolute;
    top:2px;
    left:0;
    background-color: rgba(0,0,0,0);
    border:none;
    padding: 20px 7px 15px 35px;
    outline: none;
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
    transition: 0.3s ease-in all;
    color: gray;
  }

  .container:focus-within > .underline{
    background-color: #7d48e0;
    height: 2.5px;
    z-index: 2;
  }

  .container:focus-within > label{
    color: #7d48e0;
    top: 6px;
    left: 35px;
    font-size: 10px;
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

`

function TextField(props) {
  const [inputValue, setInputValue] = useState("");

  function changeInput(e){
    setInputValue(e.target.value)
  }
  if(props.disabled){
    return (
      <Wrapper>
      <div className="overAll">
        <form className="container">
          <i className="material-icons containerIcon">calendar_today</i>
          <label>{props.text}</label>
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
          <label>{props.text}</label>
          <div className="underline"></div>
        </form>
      </div>
    </Wrapper>
  );
}

export default TextField;