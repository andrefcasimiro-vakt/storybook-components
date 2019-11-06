import React, { ReactNode, useState } from 'react';
import Caret from '../../../common/Caret';

interface ILiProps {
  children: ReactNode;
  style: any;
  list: [],
  onDraw: Function,
}

const StatefulLi = ({ children, style, list, onDraw }: ILiProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <li style={style}>
          {children} <Caret orientation={isOpen ? 'up' : 'down'} onClick={() => setIsOpen(!isOpen)} />
      </li>
      {isOpen &&
          list.map((entry: any, index: number) => entry.props.children && isOpen && onDraw(entry.props.children, index))
      }
    </>
  );
};

export default StatefulLi;
