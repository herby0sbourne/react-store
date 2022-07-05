import React from 'react';
import Spinner from '../spinner/Spinner';
// import './spinner.scss';

const WithSpinner = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...props} />;
  };
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

export default WithSpinner;
