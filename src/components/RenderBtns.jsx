import React, { Component } from "react";

export class RenderBtns extends Component {
  //totalPages = [1, 2, 3, 4, 5, 6];

  render() {
    const totalPages = [...Array(this.props.totalPages + 1).keys()].slice(1);
    return (
      <>
        {/* {console.log("inside RenderBtns")}
        {console.log(this.props)}
        {console.log(totalPages)} */}
        {totalPages.map((page, key) => {
          return (
            <a
              className="page-link"
              key={key}
              onClick={this.props.handlePaginationBtn}>
              {page}
            </a>
          );
        })}
      </>
    );
  }
}

export default RenderBtns;
