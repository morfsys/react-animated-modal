import React from "react";
import "./Modal.css";
import { CSSTransition } from "react-transition-group";

export default class Modal extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div
                    className="zay-modal"
                    style={{ display: animate ? "flex" : "none" }}
                >
                    <CSSTransition
                        in={animate}
                        timeout={300}
                        classNames="animate-modal-overlay"
                    >
                        <div
                            className="zay-modal-overlay"
                            onClick={() =>
                                this.setState({ animate: false }, () => {
                                    setTimeout(() => {
                                        this.props.closemodal();
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
                        <div className="zay-modal-body">
                            {this.props.children}
                        </div>
                    </CSSTransition>
                </div>
            </React.Fragment>
        );
    }
}
