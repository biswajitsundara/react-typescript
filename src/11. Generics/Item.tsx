import React from "react";

type ItemProps<T> = {
  id: number;
  title: string;
  extra: T[];
};

const Item = (props: ItemProps<Object>) => {
  return (
    <>
      <p>{props.id}</p>
      <p>{props.title}</p>
      <p>{JSON.stringify(props.extra)}</p>
    </>
  );
};

export default Item;
