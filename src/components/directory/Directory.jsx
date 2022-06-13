import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelector';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...section }) => {
        return <MenuItem key={id} {...section} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
// const mapStateToProps = (state) => {
//   return {
//     sections: selectDirectorySections(state),
//   };
// };

export default connect(mapStateToProps)(Directory);
