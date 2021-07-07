import React from 'react';
import ProductRow from './ProductRow';
class ProductTable extends React.Component {
  render() {
    return this.props.cat.map((cat, idx) => (
      <table className="table is-striped" key={cat}>
        <thead>
          {idx === 0 && (<tr>
            <td>Name</td>
            <td>Price</td>
          </tr>)}
          
        </thead>
        <tbody>
        <tr>
            <td className="title-table" colSpan="2">
              <h2 className="title is-4">{cat}</h2>
            </td>
          </tr>
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
