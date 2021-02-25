import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export const Text = ({ tid, values }) => {
  const { t } = useTranslation();

  return <>{t(tid, values)}</>;
};

Text.propTypes = {
  tid: PropTypes.string.isRequired,
  values: PropTypes.object,
};
