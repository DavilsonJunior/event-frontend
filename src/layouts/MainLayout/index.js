import React from 'react';
import PropsTypes from 'prop-types';

export default function MainLayout({ children }) {
  return <div>{children}</div>;
}

MainLayout.propTypes = {
  children: PropsTypes.element.isRequired,
};
