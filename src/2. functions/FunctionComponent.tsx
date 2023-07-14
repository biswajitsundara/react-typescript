const FunctionComponent = () => {
  /**
   *  Return types
   */

  //Returns void
  const sayHi = () => {
    console.log("Hi");
  };

  //Returns string
  const greetings = (): string => {
    return "Hello";
  };

  //Though the return type isn't specified, it returns number
  const multipleBy2 = (num: number) => {
    return num * 2;
  };

  const multipleBy3 = (num: number): number => {
    return num * 3;
  };

  const multipleBy4 = (num: number): void => {
    console.log(num * 4);
  };

  /**
   * Optional parameter
   * we need use the symbol ?:
   */
  const sum = (num1: number, num2: number, another?: number) => {
    return num1 + num2;
  };

  console.log(sum(2, 3));

  /**
   * Bad Practice
   * As the number of arguments is really long
   */
  const user = (user: { username: string; age: number; phone?: number }) => {
    console.log(user.username);
  };

  /**
   * Type aliases to solve the above problem
   */
  type userType = {
    username: string;
    age: number;
    phone?: string;
  };

  const userfn = (appuser: userType) => {
    console.log(appuser.username);
  };

  /**
   * Function types
   */

  type myFunc = (a: number, b: string) => void;

  let write: myFunc = (a, b) => {
    console.log(`${a} times ${b}`);
  };

  write(2, "bis");

  type userType2 = {
    username: string;
    age: number;
    phone?: string;
    theme: "dark" | "light";
  };

  const userWithTheme: userType2 = {
    username: "Mark",
    age: 21,
    theme: "dark", //only any of the two values are allowed.
    //theme: "pink", not allowed
  };

  return <h1>Functions</h1>;
};

export default FunctionComponent;
