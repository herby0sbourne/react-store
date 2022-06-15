import React from 'react';

import './spinner.scss';

const Spinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...props }) => {
    return isLoading ? (
      <div className="SpinnerOverlay">
        <div className="SpinnerContainer" />
      </div>
    ) : (
      <WrappedComponent {...props} />
    );
  };
  return Spinner;
};
// const Spinner =
//   (WrappedComponent) =>
//   ({ isLoading, ...props }) => {
//     return isLoading ? (
//       <div className="SpinnerOverlay">
//         <div className="SpinnerContainer" />
//       </div>
//     ) : (
//       <WrappedComponent {...props} />
//     );
//   };

// const Spinner = (WrappedComponent) => {
//   return ({ isLoading, ...props }) => {
//     return isLoading ? (
//       <div className="SpinnerOverlay">
//         <div className="SpinnerContainer" />
//       </div>
//     ) : (
//       <WrappedComponent {...props} />
//     );
//   };
// };

export default Spinner;
