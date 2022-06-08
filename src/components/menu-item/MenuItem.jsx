import React from 'react';
import { useNavigate } from 'react-router-dom';
// import withRouter from '../../withRouter';
import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  // console.log(props.match());

  const navigate = useNavigate();
  return (
    <div
      className={`menu-item ${size ? size : ''}`}
      onClick={() => navigate(`${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
