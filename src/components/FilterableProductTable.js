import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import InStockCheckBox from './InStockCheckBox';

class FilterableProductTable extends React.Component {
  state = {
    inputSearch: '',
    onlyInStock: false,
  };
  handelSearchChange = (val) => this.setState({ inputSearch: val });
  handelInStockChange = (val) => this.setState({ onlyInStock: val });
  render() {
    // search logik
    let producttoShow =
      this.state.inputSearch !== ''
        ? this.props.products.filter((product) => {
            return product.name.toLocaleLowerCase().startsWith(this.state.inputSearch.toLocaleLowerCase());
          })
        : this.props.products;
    // Set cat 
    const cat = [...new Set(producttoShow.map(product => product.category))]
    // Only in stock logik
    this.state.onlyInStock && (producttoShow = producttoShow.filter((product) => product.stocked));
    return (
      <div>
        <SearchBar handelSearch={this.handelSearchChange} />
        <InStockCheckBox handelInStock={this.handelInStockChange}/>
        <ProductTable products={producttoShow} cat={cat} onlyInStock={this.state.onlyInStock} />
      </div>
    );
  }
}
export default FilterableProductTable;
