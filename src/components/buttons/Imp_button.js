import React from "react";
import { GlobalStyle } from "../../GlobalStyle";

function Imp_button(props){
    return(
        <button className="massive ui button" onClick={()=>props.onToggle()} style={{background:props.clr}}>
            <h1>{props.title}</h1>
            <GlobalStyle></GlobalStyle>
        </button>
    );
};

export default Imp_button