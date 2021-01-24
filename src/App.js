import  React, { Component } from 'react'
import {Navbar,NavbarBrand} from 'reactstrap'
import Menu from './Menu';


class App extends Component{

  render(){
    return (
      <div className="App">
        <Navbar dark color="primary" >
<NavbarBrand >Dishes Practice Of Coursera waly chach</NavbarBrand>

        </Navbar>
        <Menu/>
      </div>
    )
  }
}
export default App