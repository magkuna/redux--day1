import React from 'react';

import './store'
import { sendActionCreator } from './state/messages'

class App extends React.Component {

    state = {
        messages: []
    }

    prepareMessage = () => {
        const receiver = prompt('Wpisz odbiorę')
        const text = prompt('Wpisz tekst wiadomości')

        const message = sendActionCreator(receiver, text)

        this.setState({
            messages: this.state.messages.concat(message)
        })
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.prepareMessage}
                >
                    Prepare Message
            </button>
                <button
                    onClick={this.sendMessage}>
                    Send Message
            </button>
                <div>
                    {
                        this.state.messages.map(
                            (message, i) => (
                                <div
                                    key={i + message.text}
                                >
                                    {message.receiver} | {message.text}
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}

export default App
