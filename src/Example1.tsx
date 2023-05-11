import {useEffect} from 'react';
import {useRerender} from '@react-hookz/web';

import type {FunctionComponent} from 'react';

type ChildProps = {
  item: FunctionComponent;
};

function RenderItem({item: Item}: ChildProps) {
  return <Item />;
}

function Item() {
  useEffect(() => {
    console.log('mount');

    return () => {
      console.log('unmount');
    };
  });

  return <p>item</p>;
}

export function Example1() {
  const rerender = useRerender();

  return (
    <div>
      <RenderItem item={Item} />
      <button onClick={rerender}>re-render</button>
    </div>
  );
}
