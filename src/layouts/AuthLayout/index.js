import React from 'react';
import PropsTypes from 'prop-types';

export default function AuthLayout({ children }) {
  return <div>{children}</div>;
}

AuthLayout.propTypes = {
  children: PropsTypes.element.isRequired,
};
