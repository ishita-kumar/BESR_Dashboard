import React, { Component } from 'react'

export default class ProductOptions extends Component {
    render() {
        return (
            <div id="product-options">
                    <form>
          <label for="colors">Colors</label>
          <select
            className="form-control form-control-sm"
            id="colors"
            name="colors"
            value={this.props.selectedProduct}
            onChange={e => {
              this.props.handleSelectedProduct(e.target.value);
            }}
          >
            <option value="Black">Black</option>
            <option value="Brown">Brown</option>
          </select>
        </form> 
            </div>
        )
    }
}
