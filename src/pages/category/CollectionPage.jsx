import React from 'react';
import { connect, useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/CollectionItem';
import './collection.scss';

const CollectionPage = () => {
  const { collectionId } = useParams();

  const collection = useSelector((state) => {
    const collection = selectCollection(collectionId)(state);
    return collection;
  });

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
