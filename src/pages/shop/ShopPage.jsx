import React from 'react';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Spinner from '../../components/with-spinner/Spinner';
import { updateCollections } from '../../redux/shop/shopActions';
import firestore, {
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);

        updateCollections(collectionsMap);
        this.setState({ isLoading: false });

        // console.log(collectionsMap);
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        <div className="shop-page">
          <CollectionsOverviewWithSpinner isLoading={isLoading} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (collectionsMap) =>
      dispatch(updateCollections(collectionsMap)),
  };
};

export default connect(undefined, mapDispatchToProps)(ShopPage);
