import React, { Component } from 'react';
import Table from './table/table';
import Form from './form/form';
import Api from './api/api';

class App extends Component {

    state = {
        characters: []
    }

    render() {
        const { characters } = this.state
        console.log(characters)
        return (
            <div className="Container">
                <h1>React Tutorial By Shoaib and Shahid</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
                <h3>Data we got from the API as response!</h3>
                <table>
                    <thead>
                        <th>___Name___</th>
                        <th>___Email___</th>
                        <th>___Phone___</th>
                    </thead>
                </table>
                <Api />
                <p>*Changes Are Working*</p>
            </div>
        )
    }

    removeCharacter = (index) => {

        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }

}

export default App