# Demo

![Demo Gif](https://media.giphy.com/media/ftdW7ZTjjXn1gj9GvB/giphy.gif)

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
        let { showModal } = this.state;
        return (
            <div>
                {showModal ? (
                    <Modal
                        closemodal={() => this.setState({ showModal: false })}
                        type="flipInX"
                    >
                        Some text or JSX inside modal goes here...
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

# Valid props

| Prop name               | Type     | Accepted values                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| closemodal() (required) | function | --                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| type                    | enum     | pulse, rubberBand, shake, swing, tada, wobble, jello, bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp, fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp, flip, flipInX, flipInY, lightSpeedIn, rotateIn, rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight, slideInUp, slideInDown, slideInLeft, slideInRight, zoomIn, zoomInDown, zoomInLeft, zoomInRight, zoomInUp, hinge, jackInTheBox, rollIn, bounce, flash |

I will add ability to customize the modal soon. All PRs are welcome! :simple_smile:
