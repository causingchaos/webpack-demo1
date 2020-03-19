import { css } from 'lit-element';

export const style = css`
  .container{
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
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
  .title{
    font-family: "Source Sans Pro"
  }
`;