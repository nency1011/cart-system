import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { NotificationManager } from "react-notifications";

class order extends Component {
  onSubmitOrder = () => {
    const { orderDetails, inCloes } = this.props;
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    NotificationManager.success("Order create Successfully");
    inCloes();
  };

  render() {
    const { isOpen, orderDetails, inCloes } = this.props;
    return (
      <>
        <Modal isOpen={isOpen}>
          <ModalHeader>Order</ModalHeader>
          <ModalBody>
            <div>
              <img src={orderDetails.image} alt="" className="order-image" />
            </div>
            <div> Name : {orderDetails.name}</div>
            <div> price : {orderDetails.price}</div>
            <div>quantity: {orderDetails.quantity}</div>
            <div>
              Total Amount: {orderDetails.price * orderDetails.quantity}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.onSubmitOrder}>
              Submit Order
            </Button>{" "}
            <Button color="danger" onClick={inCloes}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default order;
