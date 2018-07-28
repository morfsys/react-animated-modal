# Demo

<img src="https://media.giphy.com/media/vgzAAKFQ6F45pfG4dU/giphy.gif" width="300" />

# Installation:

```javascript
npm install --save react-animated-modal
```

# Usage

```javascript
import React from "react";
import Modal from "react-animated-modal";

export default class App extends React.Component {
    state = {
        showModal: false
    };
    render() {
        return (
            <div>
                <Modal
                    visible={this.state.showModal}
                    closemodal={() => this.setState({ showModal: false })}
                    type="flipInX"
                >
                    Some text or JSX inside modal goes here...
                </Modal>
                <div onClick={() => this.setState({ showModal: true })}>
                    Open Modal
                </div>
            </div>
        );
    }
}
```

# Accepted props

| Prop name               | Type     | Accepted values                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| closemodal() (required) | function | --                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| visible (required)      | boolean  | true / false                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| type                    | enum     | pulse, rubberBand, shake, swing, tada, wobble, jello, bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp, fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp, flip, flipInX, flipInY, lightSpeedIn, rotateIn, rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight, slideInUp, slideInDown, slideInLeft, slideInRight, zoomIn, zoomInDown, zoomInLeft, zoomInRight, zoomInUp, hinge, jackInTheBox, rollIn, bounce, flash |

I will be adding more props soon.
All PRs are welcome!

Cheers!!!
