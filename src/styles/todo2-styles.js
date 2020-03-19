import { css } from 'lit-element';

export const todoBaseStyle = css`
  .container{
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: teal;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height:100vh;  /* responsive height */  
    }
  .item{
    background-color: white;
    margin-top: 10px;
  }
`;

export const todoTitleStyles = css`
  .title{
    font-family: "Source Sans Pro";
    display: block;
    font-weight: 300;
    font-size: 50px;
    color: #35495e;
    letter-spacing: 1px;
  }
`;

export const todoSubTitleStyles = css`
  .subtitle{
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
`;

export const todoButton = css`
  .button{
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    color: #35495e;
    border: 2px solid black;
    border-radius: 4px;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-weight 600;
    font-size: 30px;
  }
  .button:hover{
    background-color: #35495e;
    color: white;
  }
  
`;