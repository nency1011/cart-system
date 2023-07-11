import React, { Component } from "react";
import { connect } from "react-redux";
import Pizz from "../assets/pizz.png";

class Login extends Component {
  render() {
    return (
      <div>
        <div style={{ backgroundImage: `url(${Pizz}) `, height: "100vh" , paddingTop:"15%" , paddingLeft:"35%" }}>
          <div>
            <form action="#">
              <div className="fs-4 text-white ">Login</div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                />
              </div>
              <div className="row">
                <div className="col-4">
                  <button type="submit" className={"btn btn-primary btn-block"}>
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
