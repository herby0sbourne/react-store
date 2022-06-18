import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shopSelector';
import withRouter from '../../withRouter';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from '../../redux/shop/shopSelector';
import './collection.scss';

const CollectionPage = ({ dispatch, isCollectionFetching }) => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  if (!collection) {
    dispatch(fetchCollectionsStartAsync());
  }

  // const { title, items } = collection;

  return isCollectionFetching ? (
    <div className="SpinnerOverlay">
      <div className="SpinnerContainer" />
    </div>
  ) : (
    <div className="collection-page">
      <h2 className="title">{collection?.title}</h2>
      <div className="items">
        {collection?.items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    // collection: selectCollection(ownProps.params.collectionId)(state),
    isCollectionFetching: selectIsCollectionFetching(state),
    // IsCollectionLoaded: selectIsCollectionLoaded(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
// export default withRouter(connect(mapStateToProps)(CollectionPage));

/* 
const CollectionPage = ({
  fetchCollectionsStartAsync,
  isCollectionFetching,
}) => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));

  if (!collection) {
    fetchCollectionsStartAsync();
  }
  // const collection = useSelector((state) => {
  //   const collection = selectCollection(collectionId)(state);
  //   return collection;
  // });
  // const { title, items } = collection;

  return isCollectionFetching ? (
    <div className="SpinnerOverlay">
      <div className="SpinnerContainer" />
    </div>
  ) : (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );

  // <div className="collection-page">
  //   <h2 className="title">{title}</h2>
  //   <div className="items">
  //     {items.map((item) => {
  //       return <CollectionItem key={item.id} item={item} />;
  //     })}
  //   </div>
  // </div>
};

const mapStateToProps = (state) => {
  return {
    isCollectionFetching: selectIsCollectionFetching(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  };
};
// const mapStateToProps = (state, ownProps) => {
//   return {
//     collection: selectCollection(ownProps.params.collectionId)(state),
//     isCollectionFetching: selectIsCollectionFetching(state),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
// export default withRouter(connect(mapStateToProps)(CollectionPage));
 */
