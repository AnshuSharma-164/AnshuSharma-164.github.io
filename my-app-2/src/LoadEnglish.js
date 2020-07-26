import React, {Component} from 'react'
import {Container, Row, Col, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import Review from './Reviews'
import Features from './Features'
import Schedule from './Schedule'

class LoadEnglish extends Component{
    state = {
        menu:"Home"
    }

    HandleHome =(e)=> {this.setState({menu:"Home"})}
    HandleSchedule =(e)=> {this.setState({menu:"Schedule"})}
    HandleReview =(e)=> {this.setState({menu:"Review"})}

    
    render(){

        const LoadPage =(e)=>{
            if (this.state.menu == "Home"){
                return (<div><Features/></div>)
            }else if (this.state.menu == "Schedule"){
                return (<div><Schedule/></div>)
            }else {
                return (<div><Review/></div>)
            }
        }

        
        return (
            <div>
                <br/>
                <ToggleButtonGroup type="radio" name="pageSelect" defaultValue={this.state.menu}>
                    <ToggleButton value="Home" onClick={this.HandleHome} size="lg">Home</ToggleButton>
                    <ToggleButton value="Schedule" onClick={this.HandleSchedule} size="lg">Schedule</ToggleButton>
                    <ToggleButton value="Review" onClick={this.HandleReview} size="lg">Reviews</ToggleButton>
                </ToggleButtonGroup>
                <br/>
                <br/>
                <Container>
                    <LoadPage/>
                </Container>
            </div>
        )
    }
}

export default LoadEnglish;