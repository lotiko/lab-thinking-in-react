import React from 'react';

class ProductRow extends React.Component {
    render() {
        return (
            <tr>
                <td style={{color: `${this.props.product.stocked ? "black" : "red"}`}}>{this.props.product.name}</td>
                <td >{this.props.product.price}</td>
            </tr>);
    }
}
export default ProductRow;