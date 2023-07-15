type themeType = "dark" | "light";
type colorType = "red" | "blue" | "yellow";

type ItemProps = {
    //color :`${themeType}-${colorType}`

    color : Exclude<`${themeType}-${colorType}`, "dark-yellow">
}

const Shape = (props: ItemProps) => {
  return <div>Shape</div>;
};

export default Shape;
