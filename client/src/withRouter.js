import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} {...{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter;

/* import React from 'react';

import {
  useLocation,
  useMatch,
  useParams,
  useNavigate,
} from 'react-router-dom';

function withRouter(Child) {
  return function withRouter(props) {
    const location = useLocation;
    const navigate = useNavigate;
    // const history = useHistory();
    const match = useMatch;
    const params = useParams;
    // other relevant props

    return (
      <Child
        {...props}
        navigate={navigate}
        // history={history}
        location={location}
        match={match}
        params={params}
      />
    );
  };
}

export default withRouter; */
