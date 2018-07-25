Usage:

```
npm install --save react-animated-modal
```

```
import React from "react":
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
                        animate={this.state.showModal}
                        closeModal={() => this.setState({ showModal: false })}
                    >
                        Some text inside modal goes here...
                    </Modal>
                ) : null}
								<div>Some text below modal</div>
            </div>
        );
    }
}
```
