import React from 'react';

import { sendMessage } from './store'

class App extends React.Component {



    render() {
        return (
            <div>
                <button
                    onClick={() => sendMessage(
                        prompt('Wpisz odbiorcę'),
                        prompt('Wpisz wiadomość')
                    ) }
                >
                    Send Message
            </button>
            </div>
        )
    }
}
export default App;
