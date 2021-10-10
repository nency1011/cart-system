import React from "react";
import { PizzaList } from "./list";
import CartModal from "./cartmodal";
import { withRouter } from "react-router-dom";

const sortTypes = {
  up: {
    class: "fa-sort-asc",
    fn: (a, b) => a.popularity - b.popularity,
  },
  down: {
    class: "fa-sort-desc",
    fn: (a, b) => b.popularity - a.popularity,
  },
  default: {
    class: "fa-sort",
    fn: (a, b) => a,
  },
};

class Pizza extends React.Component {
  constructor() {
    super();
    this.state = {
      pizzList: PizzaList,
      currentSort: "default",
    };
  }

  onChangeSearchData = (event) => {
    const { pizzList } = this.state;
    if (event.target.value !== "") {
      let filterPizza = pizzList.filter(function (item) {
        return (
          item.name.toLowerCase().search(event.target.value.toLowerCase()) !==
          -1
        );
      });
      this.setState({ pizzList: filterPizza });
    } else {
      this.setState({ pizzList: PizzaList });
    }
  };

  onSortChange = () => {
    const { currentSort } = this.state;
    let nextSort;

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "default";
    else if (currentSort === "default") nextSort = "down";

    this.setState({
      currentSort: nextSort,
    });
  };

  viewCart = () => {
    this.props.history.push("/viewCart");
  };

  render() {
    const { pizzList, currentSort } = this.state;

    return (
      <>
        <div className="search-div d-flex justify-content-between">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search...."
              onChange={this.onChangeSearchData}
            />
          </div>
          <button type="button" class="btn btn-primary" onClick={this.viewCart}>
            View Cart
          </button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th className="w-17 text-center">Id</th>
              <th className="w-17 text-center">Name</th>
              <th className="w-17 text-center">Image</th>
              <th className="w-17 text-center">Price</th>
              <th className="d-flex tabel-text-pop">
                <div className="sort-text">Popularity</div>
                <i
                  className={`fa ${sortTypes[currentSort].class}`}
                  onClick={this.onSortChange}
                ></i>
              </th>
              <th className="w-17 text-center">Add Cart</th>
            </tr>
          </thead>
          <tbody>
            {pizzList.length === 0 && (
              <td colSpan="6">
                <div className="d-flex justify-content-center pizztext">
                  No Pizza Found
                </div>
              </td>
            )}
            {[...pizzList].sort(sortTypes[currentSort].fn).map((data) => (
              <RenderTable data={data} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
export default withRouter(Pizza);

class RenderTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onOpen: false,
      pizzData: {},
    };
  }

  onOpenModal = (data) => {
    this.setState({ onOpen: true, pizzData: data });
  };

  render() {
    const { data } = this.props;
    return (
      <>
        <tr>
          <td className="table-text w-17 text-center">{data.id}</td>
          <td className="table-text w-17 text-center">{data.name} </td>
          <td className="w-17 text-center">
            <img
              src={data.image}
              alt=""
              className="image-pizza w-17 text-center"
            />
          </td>
          <td className="table-text w-17 text-center">{data.price}</td>
          <td className="table-text w-17 text-center">{data.popularity}</td>
          <td className="table-text w-17 text-center">
            <button
              type="button"
              class="btn btn-success"
              onClick={() => this.onOpenModal(data)}
            >
              Add to Cart
            </button>
          </td>
        </tr>
        <CartModal
          isopne={this.state.onOpen}
          isClose={() => {
            this.setState({ onOpen: !this.state.onOpen });
          }}
          pizzData={this.state.pizzData}
        />
      </>
    );
  }
}
