Usage:

```javascript
npm install --save react-animated-modal
```

```javascript
import React from "react";
import Modal from "react-animated-modal";

export default class App extends React.Component {
    state = {
        showModal: false
    };
    render() {
        let { showModal } = this.state;
        return (
            <div>
                {showModal ? (
                    <Modal
                        closeModal={() => this.setState({ showModal: false })}
                    >
                        Some text inside modal goes here...
                    </Modal>
                ) : null}
                <div onClick={() => this.setState({ showModal: true })}>
                    Open Modal
                </div>
            </div>
        );
    }
}
```

You can add a custom close button inside Modal body and trigger the modal to close by calling `closeModal()` function which is received from props.

I will keep on adding more animations to the library. All PR requests are welcome!
