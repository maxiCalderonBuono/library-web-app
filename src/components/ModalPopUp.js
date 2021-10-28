import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../components/style/modalpopup.css";
import PurchasePreview from "./PurchasePreview";
import Swal from 'sweetalert2';


const ModalPopUp = ({ price, name, onAdd, img }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const toggleConfirm = () => {
    setModal(!modal);
    onAdd();
    alert();
  };

  const alert = () => {Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your book has been added to cart',
    showConfirmButton: false,
    timer: 1500
  })}
 

  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );

  return (
    <>
      <button className="card-button-s2" onClick={() => setModal(true)}>
        {`$ ${price}`}
      </button>
      <div className="shoppingmodal">
        <Modal
          contentClassName= "resize"
          centered={true}
          isOpen={modal}
          external={externalCloseBtn}
          modalTransition={{ timeout: 250 }}
          backdropTransition={{ timeout: 50 }}
        >
          <ModalHeader>Add to Cart</ModalHeader>

          <ModalBody>
            <PurchasePreview img= {img} price={price} name={name} />
          </ModalBody>

          <ModalFooter>
            <Button className="confirmbtn" onClick={toggleConfirm}>
              Confirm
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default ModalPopUp;
