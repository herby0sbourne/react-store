import React from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import SHOP_DATA from './shopdata';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collection }, idx) => {
          return <CollectionPreview key={id} {...collection} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
