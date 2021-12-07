import React from "react";
import Imp_button from "../components/buttons/Imp_button";
import { GlobalStyle } from "../GlobalStyle";
import Form from './Form'
import Search from "./Search";
// import Login from "./Login";
// import Manager from './Manager';


function Dashboard() {
  const [Clicked, setClicked] = React.useState(false)  
  function onToggle(){
    setClicked(true);  
  }
    return (
      <div>
      {Clicked === false && <div className="ui segment" style={{height: '100%', background: 'linear-gradient(to right,#407899 0%, #407899 50%, #a9dfff 50%, #a9dfff 100%)'}}>
      <div className="ui two column very relaxed grid">
        <div className="column">
          <div style={{ textAlign: 'center' }}>
        <Imp_button title = "Show List of Hotels" clr='white' onToggle={onToggle}></Imp_button>
        <GlobalStyle />
          </div>
        </div>
        <div className="column">
        <Form></Form>
        {/*<Login />*/}
        </div>
        </div>
        {/*<Manager/>*/}
    </div>}
    {Clicked===true && <Search></Search>}



    </div>


      
    );
  }
  
  export default Dashboard;
  