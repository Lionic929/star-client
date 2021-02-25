import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { HeaderView } from './View';

export const HeaderContainer = ({ logged, activePath, typePath, user }) => {
  const isLoaded = () => logged !== null && typePath !== null;

  return <HeaderView activePath={activePath} logged={logged} typePath={typePath} loaded={isLoaded()} user={user} />;
};

const mapStateToProps = ({ auth: { logged, user }, navigation: { activePath, typePath } }) => ({
  logged,
  activePath,
  typePath,
  user,
});

HeaderContainer.propTypes = {
  logged: PropTypes.bool.isRequired,
  activePath: PropTypes.string.isRequired,
  typePath: PropTypes.string,
  user: PropTypes.object.isRequired,
};

export const Header = compose(connect(mapStateToProps))(HeaderContainer);
