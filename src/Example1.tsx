import {useEffect} from 'react';
import {useRerender} from '@react-hookz/web';

import type {FunctionComponent} from 'react';

type RenderItemProps = {
  item: FunctionComponent;
};

function BrokenRenderItem({item: Item}: RenderItemProps) {
  return <Item />;
}

function RenderItem({item}: RenderItemProps) {
  return item({name: 'default'});
}

type ItemProps = {
  name: string;
};

function Item({name}: ItemProps) {
  useEffect(() => {
    console.log(`${name}: mount`);

    return () => {
      console.log(`${name}: unmount`);
    };
  }, [name]);

  return <p>item</p>;
}

export function Example1() {
  const rerender = useRerender();

  return (
    <div>
      <BrokenRenderItem item={() => <Item name='broken' />} />
      <RenderItem item={() => <Item name='default' />} />
      <button onClick={rerender}>re-render</button>
    </div>
  );
}
