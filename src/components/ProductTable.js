import React from 'react';
import ProductRow from "./ProductRow";
class ProductTable extends React.Component {
    render() {
        return (
            <table>
                <ProductRow/>
            </table>
        );
    }
}
export default ProductTable;