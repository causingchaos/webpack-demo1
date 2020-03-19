import { LitElement, css, unsafeCSS } from "lit-element";


// can't add this inside as function for some reason, maybe target base styles from nav???
const theme = "light";
const getColor = () => {
  if (theme === "light"){
    return '#ffff'
  }else if (theme==="dark") {
    return '#2a3443'
  }
}


export class BaseView extends LitElement {  // Mix in class for other views

    static get styles(){
        return css`
            html{
                --base-color: #ffff;
                --dark-color: #2a3443;
                --spacing: 16px;
                --black: #00000;
            }

            header{
                background: ${unsafeCSS(getColor())};
                padding: 20px;
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            nav{
              padding: 0;
              margin: 0;
            }
            h2{
              padding-right: 50px;
              margin: 0;
            }
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
        `
    }

    getTheme(){
      var themeValue;
      if(this.theme3 === "light"){
        themeValue = "#ffff"
        return themeValue;
      }else{
        themeValue3 = '#ffff';
        return themeValue;
      }
    }
    // disable shadow dom -- to use top level styles. 
    //Remove this if you want shielded styles, ect
    //createRenderRoot() {
    //    return this;
   // }
   
  

}
