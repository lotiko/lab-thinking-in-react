import React from 'react';
import ProductRow from './ProductRow';
class ProductTable extends React.Component {
  render() {
    return this.props.cat.map((cat) => (
      <table key={cat}>
        <thead>
          <tr>
            <td colSpan="2">
              <h2>{cat}</h2>
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((product) => {
            return (
              (product.category === cat && (
                <ProductRow key={product.id} product={product} />
              )) 
            );
          })}
        </tbody>
      </table>
    ));
  }
}

export default ProductTable;
