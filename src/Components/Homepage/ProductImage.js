import React, { Component } from 'react'
import productBlack from "../../assets/images/banner.png"
import productBrown from "../../assets/images/design.png";

export default class ProductImage extends Component {
    render() {
        const { selectedProduct } = this.props;
        return (
            <div>
                <div id="product-image">
        <img
          alt="tempalt"
          className="img-fluid"
          src={selectedProduct === "Black" ? productBlack : productBrown}
        />
      </div> 
            </div>
        )
    }
}
