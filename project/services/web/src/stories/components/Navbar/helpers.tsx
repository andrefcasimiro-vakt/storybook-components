import React, { ReactNode } from 'react'

export const mapChildren = (children: JSX.Element[] | JSX.Element, drawMethod: (c: any) => (ReactNode)): ReactNode => {
  if (!children || Array.isArray(children) && !children.length) {
      return null;
  }

  return drawMethod(children);
};
