import React, { ReactNode, Component, FunctionComponent, ComponentType } from 'react';
import Caret from '../../../common/Caret';
import withOpen from '../../../hocs/withOpen';
import { compose } from '../../../utils/functions';

interface Own {
  children: ReactNode;
  style: Object;
  list: [],
  onDraw: (list: JSX.Element[], index: number) => JSX.Element,
}

const StatefulLi = ({ children, style, list, onDraw, isOpen, setIsOpen }: Added) => (
  <>
    <li style={style}>
      {children} <Caret orientation={isOpen ? 'up' : 'down'} onClick={() => setIsOpen(!isOpen)} />
    </li>
    {isOpen && list.map((entry: JSX.Element, index: number) => entry.props.children && onDraw(entry.props.children, index))}
  </>
);

interface Added extends Own {
  isOpen: boolean,
  setIsOpen: (value: boolean) => boolean,
}

const enhancer = compose(
  withOpen,
);

export default enhancer(StatefulLi);
