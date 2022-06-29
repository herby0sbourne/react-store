import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Spinner from '../../components/with-spinner/Spinner';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';
import { selectIsCollectionFetching } from '../../redux/shop/shopSelector';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);

const ShopPage = ({ fetchCollectionsStart, isCollectionFetching }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
