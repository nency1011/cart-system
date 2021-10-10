import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "./order";

class viewCart extends Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
      order: {},
    };
  }

  isOpenOreder = (data) => {
    this.setState({ isOpen: true, order: data });
  };

  render() {
    const { cart } = this.props;
    return (
      <div>
        <div className="view-cart-text d-flex justify-content-center">
          View Cart List
        </div>
        <hr></hr>
        <table class="table">
          <thead>
            <tr>
              <th className="w-17 text-center">Id</th>
              <th className="w-17 text-center">Name</th>
              <th className="w-17 text-center">Image</th>
              <th className="w-17 text-center">Quantity</th>
              <th className="w-17 text-center">Total Amount </th>
              <th className="w-17 text-center">Order</th>
            </tr>
          </thead>
          <tbody>
            {cart.add_cart.length === 0 && (
              <td colSpan="6">
                <div className="d-flex justify-content-center pizztext">
                  No Pizza Found
                </div>
              </td>
            )}
            {cart.add_cart.map((item) => (
              <tr>
                <td className="table-text w-17 text-center">{item.id}</td>
                <td className="table-text w-17 text-center">{item.name}</td>
                <td className=" w-17 text-center">
                  <img src={item.image} alt="" className="image-pizza" />
                </td>
                <td className="table-text w-17 text-center">{item.quantity}</td>
                <td className="table-text w-17 text-center">
                  {item.price * item.quantity}
                </td>
                <td className="table-text w-17 text-center">
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => this.isOpenOreder(item)}
                  >
                    Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Order
          isOpen={this.state.isOpen}
          orderDetails={this.state.order}
          inCloes={() => this.setState({ isOpen: !this.state.isOpen })}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

export default connect(mapStateToProps)(viewCart);
