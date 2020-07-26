import React, {Component} from 'react'
import {Container, ToggleButton, ToggleButtonGroup}  from 'react-bootstrap'

import ScheduleFr from './ScheduleFr'
import FeaturesFr from './FeaturesFr'
import ReviewFr from './ReviewFr'

class LoadFrench extends Component{

    state = {
        menu:"Home"
    }

    HandleHome =(e)=> {this.setState({menu:"Home"})}
    HandleSchedule =(e)=> {this.setState({menu:"Schedule"})}
    HandleReview =(e)=> {this.setState({menu:"Review"})}

    
    render(){

        const LoadPage =(e)=>{
            if (this.state.menu == "Home"){
                return (<div><FeaturesFr/></div>)
            }else if (this.state.menu == "Schedule"){
                return (<div><ScheduleFr/></div>)
            }else {
                return (<div><ReviewFr/></div>)
            }
        }

        
        return (
            <div>
                <br/>
                <ToggleButtonGroup type="radio" name="pageSelect" defaultValue={this.state.menu}>
                    <ToggleButton value="Home" onClick={this.HandleHome} size="lg">Maison</ToggleButton>
                    <ToggleButton value="Schedule" onClick={this.HandleSchedule} size="lg">Programme</ToggleButton>
                    <ToggleButton value="Review" onClick={this.HandleReview} size="lg">Commentaires</ToggleButton>
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

export default LoadFrench