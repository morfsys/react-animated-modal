import React from "react";
import "./Modal.css";
import { CSSTransition } from "react-transition-group";

export default class Modal extends React.Component {
    constructor() {
        super();
        this.state = {
            animate: false
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ animate: true });
        }, 1);
    }
    render() {
        let { animate } = this.state;
        let type = undefined;
        if (this.props.type !== undefined) {
            type = this.props.type;
        }
        return (
            <React.Fragment>
                <div className="react-modal">
                    <CSSTransition
                        in={animate}
                        timeout={500}
                        classNames="animate-modal-overlay"
                    >
                        <div
                            className="react-modal-overlay"
                            onClick={() =>
                                this.setState({ animate: false }, () => {
                                    setTimeout(() => {
                                        this.props.closemodal();
                                    }, 500);
                                })
                            }
                        />
                    </CSSTransition>
                    <CSSTransition
                        in={animate}
                        timeout={500}
                        classNames={type !== undefined ? type : "bounce"}
                    >
                        <div className="react-modal-body">
                            {this.props.children}
                        </div>
                    </CSSTransition>
                </div>
            </React.Fragment>
        );
    }
}
