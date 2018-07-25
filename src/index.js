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
        return (
            <React.Fragment>
                <div
                    className="react-modal"
                    style={{ display: animate ? "flex" : "none" }}
                >
                    <CSSTransition
                        in={animate}
                        timeout={300}
                        classNames="animate-modal-overlay"
                    >
                        <div
                            className="react-modal-overlay"
                            onClick={() =>
                                this.setState({ animate: false }, () => {
                                    setTimeout(() => {
                                        this.props.closeModal();
                                    }, 300);
                                })
                            }
                        />
                    </CSSTransition>
                    <CSSTransition
                        in={animate}
                        timeout={300}
                        classNames="animate-modal-body"
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
