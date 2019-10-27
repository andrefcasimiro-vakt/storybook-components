import React, { CSSProperties, ReactNode } from 'react';
import StatefulLi from './StatefulLi';
import { mapChildren } from './helpers'
import 'antd/dist/antd.css';

interface INavbarProps {
  style?: {
      nav: CSSProperties | any,
      ul: CSSProperties | any,
      li: CSSProperties | any,
  };
  children: JSX.Element[] | JSX.Element;
}

/**
 * A dynamic navbar that evaluates its children and decides how to display them.
 * If child entry is of type ul, will render sub-children as a group of navbar links
 * Otherwise, it will render child elements as per display and flex guidelines
 */
const Navbar = ({ children, style }: INavbarProps) => {
  if (!children) {
      return null;
  }

  const hasLinks = (element: JSX.Element): boolean => {
      if (element.type === 'ul') {
          return true;
      }

      return false;
  };

  /**
   * Draws list of links a first time. If it happens that one of the links has sublinks, it will use
   * recursion to replicate this behaviour in a nested context, meaning we can infinite sublinks.
   *
  */
  const drawList = (list: JSX.Element[], index: number): JSX.Element => (
    <ul style={style && style.ul} key={index}>
      {Array.isArray(list) && list.length && list.map((entry: JSX.Element, entryIndex) => {
        // Search for any nested ul type children
        const nestedUl =
            Array.isArray(entry.props.children)
            && entry.props.children.filter((child: JSX.Element) => child.type === 'ul');

        if (nestedUl.length) {
          return (
            <StatefulLi style={style && style.li} key={index} list={nestedUl} onDraw={drawList}>
              {entry.props.children[0]}
            </StatefulLi>
          );
        }

        return (
            <li style={style && style.li} key={entryIndex}>
                {entry}
            </li>
        );
      })}
    </ul>
  );

  return (
    <nav style={style && style.nav}>
      {mapChildren(children, (content: JSX.Element[]) => content.map((child: JSX.Element, childIndex: number) => {
        if (hasLinks(child)) {
            const list = child.props.children;

            return drawList(list, childIndex);
        }

        return child;
      }))}
    </nav>
  );
};

export default Navbar;
