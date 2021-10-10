import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ADD_CART } from "../action/type";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";

function add_TO_cart(pyaload) {
  return {
    type: ADD_CART,
    pyaload,
  };
}

class CartModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        quantity: "",
      },
    };
  }

  onSubmit = (values) => {
    const { dispatch, pizzData, isClose } = this.props;
    pizzData["quantity"] = values.quantity;
    dispatch(add_TO_cart(pizzData));
    NotificationManager.success("Success Quantity Add");
    isClose();
  };

  render() {
    const addQuantity = Yup.object().shape({
      quantity: Yup.number("Quantity must be numbers only")
        .required("Enter quantity")
        .min(0, "Quantity should be between 0 and 10")
        .max(10, "Quantity should be between 0 and 10"),
    });
    const { isopne, isClose } = this.props;
    return (
      <>
        <Formik
          initialValues={this.state.initialValues}
          validationSchema={addQuantity}
          onSubmit={this.onSubmit}
        >
          {({ errors, touched, handleChange, values, handleSubmit }) => (
            <Form>
              <Modal isOpen={isopne}>
                <ModalHeader>Add To Cart</ModalHeader>
                <ModalBody>
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter Quantity"
                      name="quantity"
                      onChange={handleChange}
                    />
                    {errors.quantity && touched.quantity && (
                      <div className="error-messages">{errors.quantity}</div>
                    )}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <button
                    type="submit"
                    className="btn btn-success mr-2"
                    onClick={handleSubmit}
                  >
                    Add
                  </button>
                  <Button color="danger" onClick={isClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}
export default connect()(CartModal);
