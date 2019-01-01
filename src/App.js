import React, { Component } from 'react'
import './App.scss'

import Header from './Header'
import Quote from './Quote'

const initialState = {
    quote: '',
    author: '',
}

class App extends Component {
    constructor(props) {
        super(props)

        this.state = initialState

        this.newQuote = this.newQuote.bind(this)
    }

    newQuote() {
        fetch('https://favqs.com/api/qotd') //http://quotes.rest/qod.json'
            .then(response => response.json())
            .then(data => {
                const { body, author } = data.quote

                this.setState({
                    quote: body,
                    author: author,
                })
            })
            .catch(err => console.log('Error retrieving quote: ' + err))
    }

    componentDidMount() {
        this.newQuote()
    }

    render() {
        const { quote, author } = this.state

        return (
            <div className="App">
                <Header />
                <Quote quote={quote} author={author} newQuote={this.newQuote} />
            </div>
        )
    }
}

export default App
