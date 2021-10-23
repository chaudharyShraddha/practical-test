import React from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";

const index = (props) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={props.style}
        open={props.showModal}
        onClose={() => props.toggleModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.showModal}>
          <div className="modal_body">{props.children}</div>
        </Fade>
      </Modal>
    </div>
  );
};

export default index;
