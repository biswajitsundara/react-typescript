type ShapeType = "cube" | "square" | "rectangle" | "triangle";
type TwoDShapeType = Exclude<ShapeType, "cube">;

type themeType = "dark" | "light";
type colorType = "red" | "blue" | "yellow";

type ItemProps = {
    color :`${themetype}-${colorType}`
}

const Shape = () => {
  const shape: ShapeType = "cube";
  const twodshape: TwoDShapeType = "square";



  return <div>Shape</div>;
};

export default Shape;
