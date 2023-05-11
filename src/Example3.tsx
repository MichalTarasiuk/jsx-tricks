import React from 'react';
import {useRerender} from '@react-hookz/web';

import type {ReactNode} from 'react';

type BoxProps = {
  children: ReactNode;
};

function Box({children}: BoxProps) {
  const rerender = useRerender();

  return React.createElement(
    'div',
    null,
    children,
    React.createElement('button', {onClick: rerender}, 're-render'),
  );
}

export function Example3() {
  return (
    <Box>
      <p>{Math.random()}</p>
    </Box>
  );
}
