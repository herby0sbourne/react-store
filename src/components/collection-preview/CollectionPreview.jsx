import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';

import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...item }) => {
            return <CollectionItem key={id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
