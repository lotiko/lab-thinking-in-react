import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  state = {
    inputSearch: '',
    
  };
  handelSearchChange = (val) => this.setState({ inputSearch: val });
  render() {
    const producttoShow =
      this.state.inputSearch !== ''
        ? this.props.products.filter((product) => {
            return product.name.toLocaleLowerCase().startsWith(this.state.inputSearch.toLocaleLowerCase());
          })
        : this.props.products;
    const cat = [...new Set(producttoShow.map(product => product.category))]
    return (
      <div>
        <SearchBar handelSearch={this.handelSearchChange} />
        <ProductTable products={producttoShow} cat={cat} />
      </div>
    );
  }
}
export default FilterableProductTable;
