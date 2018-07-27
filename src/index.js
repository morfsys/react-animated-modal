import React from "react";
import "./Modal.css";
import { CSSTransition } from "react-transition-group";

export default class Modal extends React.Component {
    constructor() {
        super();
        this.state = {
            animateOverlay: false,
            animateBody: false
        };
    }
    componentDidMount() {
        if (this.props.visible) {
            setTimeout(() => {
                this.setState({ animateOverlay: true }, () => {
                    setTimeout(() => {
                        this.setState({ animateBody: true });
                    }, 1);
                });
            }, 1);
        } else {
            setTimeout(() => {
                this.setState({ animateOverlay: false }, () => {
                    setTimeout(() => {
                        this.setState({ animateBody: false });
                    }, 1);
                });
            }, 1);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            setTimeout(() => {
                this.setState({ animateOverlay: true }, () => {
                    setTimeout(() => {
                        this.setState({ animateBody: true });
                    }, 1);
                });
            }, 1);
        } else {
            setTimeout(() => {
                this.setState({ animateOverlay: false }, () => {
                    setTimeout(() => {
                        this.setState({ animateBody: false });
                    }, 1);
                });
            }, 1);
        }
    }
    render() {
        let { animateOverlay, animateBody } = this.state;
        let { visible } = this.props;
        let type = undefined;
        if (this.props.type !== undefined) {
            type = this.props.type;
        }
        if (visible) {
            return (
                <React.Fragment>
                    <div className="react-modal">
                        <CSSTransition
                            in={animateOverlay}
                            timeout={500}
                            classNames="animate-modal-overlay"
                        >
                            <div
                                className="react-modal-overlay"
                                onClick={() =>
                                    // this.setState({ animate: false }, () => {
                                    //     setTimeout(() => {
                                    //         this.props.closemodal();
                                    //     }, 500);
                                    // })
                                    this.setState(
                                        { animateBody: false },
                                        () => {
                                            this.setState(
                                                { animateOverlay: false },
                                                () => {
                                                    setTimeout(() => {
                                                        this.props.closemodal();
                                                    }, 501);
                                                }
                                            );
                                        }
                                    )
                                }
                            />
                        </CSSTransition>
                        <CSSTransition
                            in={animateBody}
                            timeout={450}
                            classNames={type !== undefined ? type : "flipInX"}
                        >
                            <div className="react-modal-body">
                                <div
                                    className="react-modal-body-close"
                                    onClick={() =>
                                        this.setState(
                                            { animateBody: false },
                                            () => {
                                                this.setState(
                                                    { animateOverlay: false },
                                                    () => {
                                                        setTimeout(() => {
                                                            this.props.closemodal();
                                                        }, 501);
                                                    }
                                                );
                                            }
                                        )
                                    }
                                />
                                {this.props.children}
                            </div>
                        </CSSTransition>
                    </div>
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
}
