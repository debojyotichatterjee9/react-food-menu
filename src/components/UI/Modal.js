import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = props => {
    return(
        <div className={classes.backdrop}>

        </div>
    )
}

const ModalOverlay = props => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const fetchPortalElement = document.querySelector("#overlays");
}
const Modal = props => {
    return(
        <react.Fragment>
            {ReactDOM.createPortal(<Backdrop />, fetchPortalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, fetchPortalElement)}
        </react.Fragment>
    )
}

export default Modal;