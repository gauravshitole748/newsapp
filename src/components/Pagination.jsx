import React, { Component } from "react";
import RenderBtns from "./RenderBtns";

export class Pagination extends Component {
  constructor() {
    super();
  }

  //   totalPages
  //   handlePaginationBtn

  //   RenderBtns() {
  //     const totalPages = [1, 2, 3, 4, 5, 7, 6];
  //     const comp = totalPages.map((page) => {
  //       <a className="page-link" onClick={this.props.handlePaginationBtn}>
  //         {page}
  //         {console.log("inside page")}
  //         {console.log(page)}
  //       </a>;
  //     });
  //     return <li>{comp}</li>;
  //   }

  render() {
    return (
      <>
        {/* {console.log("Inside Pagination >>")}
        {console.log(this.props.totalPages)} */}
        <nav
          aria-label="Page navigation example"
          data-bs-theme={this.props.theme}>
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" onClick={this.props.handlePrevBtn}>
                Previous
              </a>
            </li>
            {/* <li className="page-item">
              <a className="page-link" onClick={this.props.handlePaginationBtn}>
                1
              </a>
            </li>
            <li className="page-item" onClick={this.props.handlePaginationBtn}>
              <a className="page-link">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" onClick={this.props.handlePaginationBtn}>
                3
              </a>
            </li> */}
            {/* {console.log("calling RenderBtns")} */}
            <RenderBtns
              totalPages={this.props.totalPages}
              handlePaginationBtn={this.props.handlePaginationBtn}
            />
            <li className="page-item">
              <a className="page-link" onClick={this.props.handleNextBtn}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Pagination;
