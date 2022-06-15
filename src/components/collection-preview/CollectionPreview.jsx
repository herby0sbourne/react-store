import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CollectionItem from '../collection-item/CollectionItem';

import './collection-preview.scss';

const CollectionPreview = ({ title, items, routeName }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => navigate(`${pathname}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
