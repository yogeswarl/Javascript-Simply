import React, { Fragment } from "react";

export const Modal = ({children,setmodalVisibility}) => {
  const closePopup = () =>{
    setmodalVisibility("")
  }
  return(
    <Fragment>
    <section className="modal">
      <button className="modal-close pos-abs tc-white" onClick = {closePopup}>&times;</button>
      {children}
    </section>
    <div className="backdrop"></div>
    </Fragment>
  )
}