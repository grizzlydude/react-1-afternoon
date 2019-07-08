import React, { Component} from 'react'

export default class FilterString extends Component {
    constructor (){
        super()

        this.state = {
            names: ['Grizzly', 'Derek','Jame','Rolling','DoomsDay'],
            userInput: '',
            filterNames: []
        }
    }

    handleChange(val){
        this.setState({ userInput: val})
    }

    filterNames(userInput){
        let names = this.state.names
        let filterNames = []

        for(let i = 0; i < names.length; i++){
            if(names[i].includes(userInput)){
                filterNames.push(names[i])
            }
        }
        this.setState({filterNames: filterNames})
    }


    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4> Filiter String</h4>
                <span className='puzzleText'> Names: { JSON.stringify(this.state.names, null, 10) } </span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className='confirmationButton' onClick={ ()=> this.filterNames(this.state.userInput) }> Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filterNames, null, 10)} </span>
            </div>
        )
    }
} 