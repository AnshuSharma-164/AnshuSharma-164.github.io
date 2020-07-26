import React, {Component} from 'react';
import { Row, Col, ToggleButtonGroup, ToggleButton, Button} from 'react-bootstrap'

import LoadEnglish from './LoadEnglish'
import LoadFrench from './LoadFrench'

class App extends Component{

  state ={
    language: "English"
  }

  HandleEnglish =(e)=>{
    this.setState({language:"English"})
  }
  HandleFrench =(e)=>{
    this.setState({language:"French"})
  } 

  render(){
    const LoadPage =(e)=>{
      if (this.state.language=="English"){
        return (<LoadEnglish/>)
      }else{
        return (<LoadFrench/>)
      }
    }
    return (
      <div className="App">
      <Row>
        <Col md="auto">
          <br/>
          <h1>AC Master</h1>
        </Col>
        <Col>
          <LoadPage/>
        </Col>
        <Col md="auto">
          <br/>
          <ToggleButtonGroup type="radio" name="menu" defaultValue={this.state.language}>
            <ToggleButton value={"English"} onClick={this.HandleEnglish} size="lg">English</ToggleButton>
            <ToggleButton value={"French"} onClick={this.HandleFrench} size="lg">French</ToggleButton>
          </ToggleButtonGroup>
        </Col>
        </Row>
      </div>
    );
  }
}
export default App;
