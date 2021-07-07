import React from 'react';

class InStockCheckBox extends React.Component {
  render() {
    return (
      <label>
        Only show products on stock
        <input
          type="checkbox"
          label="instock"
          onChange={(e) => this.props.handelInStock(e.target.checked)}
        ></input>
      </label>
    );
  }
}
export default InStockCheckBox;
