import React, { ComponentType, useState } from 'react';
import { GetProps } from '../types/typescript';

interface Added {
  isOpen: boolean,
  setIsOpen: (v: boolean) => boolean,
}

export default function withOpen<
  ComponentProps extends GetProps<ComponentType>,
  WrappedComponentProps extends Added & ComponentProps,
>(C: ComponentType<ComponentProps>): ComponentType<WrappedComponentProps> {

  function WrappedComponent(props: ComponentProps) {
    const [isOpen, setIsOpen] = useState(false);

    return <C isOpen={isOpen} setIsOpen={setIsOpen} {...props} />
  }

  return WrappedComponent;
}
