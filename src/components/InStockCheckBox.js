import React from 'react';

class InStockCheckBox extends React.Component {
  render() {
    return (
      <label className="checkbox">
        <input
          type="checkbox"
          label="instock"
          onChange={(e) => this.props.handelInStock(e.target.checked)}
        ></input>
        Only show products on stock
      </label>
    );
  }
}
export default InStockCheckBox;
