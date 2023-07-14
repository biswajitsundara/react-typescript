const TypeComponent = () => {
  /**
   * 1. Implicit Types
   * When we initialize the variable with a value then it will auto assign the types.
   */

  let variable = "hello";
  console.log(variable);
  // variable = 12; not allowed
  // variable = false
  // variable = {name:'Mark'}
  // variable = []
  variable = "hi"; //has to be string

  let age = 12;
  //age = 'twelve' not allowed

  /**
   * 2. Explicit Types
   * We specify the type in the variable.
   */
  let phone: number;
  //phone = 'twelve' not allowed
  phone = 12345678;

  let myage: number = 12;

  let married: boolean;
  married = true;
  married = false;
  //married = 'married' not allowed

  /**
   * 3. Union types
   * We can specify multiple types using OR operator
   */
  let testStringOrNumber: string | number;
  testStringOrNumber = "123";
  testStringOrNumber = 123;
  // testStringOrNumber = true not allowed

  /**
   * 4. Arrays
   * We can specify multiple types using OR operator
   */
  let names = ["john", "jane", "tom"];
  //names.push(3); not allowed
  names.push("Dave");

  let ages = [12, 33, 45];
  //ages.push(true); not allowed
  ages.push(31);

  let stringArray: string[];
  // stringArray = [1,2,3,4] not allowed
  stringArray = ["one", "two", "three"];

  let testNumberArray: number[];
  // testNumberArray = [true, false, 'Prasad'] not allowed
  testNumberArray = [21, 34, 76];

  let numberORString: (number | string)[];
  numberORString = [1, "two", "three"];

  /**
   * 5. Objects
   */

  let user = {
    name: "john",
    age: 21,
    isAdmin: false,
  };

  user.name = "Jane";
  //user.age = 'twenty' not allowed
  //user.isAdmin = 'yes' not allowed
  user.isAdmin = true;
  //user.phone = '23456'; not allowed to add new key

  /**
   * 5. Objects (Advanced)
   */

  let userObj: {
    name: string;
    age: number;
    isAdmin: boolean;
  };

  // userObj = {
  //   name: 'Mark',
  //   age: 12
  // } not allowed, isAdmin is missing

  userObj = {
    name: "Mark",
    age: 12,
    isAdmin: true,
  };

  let userObj2: {
    name: string;
    age: number;
    isAdmin: boolean;
    phone?: string; //optional field
  };

  userObj2 = {
    name: "mark",
    age: 32,
    isAdmin: true,
  };

  userObj2 = {
    name: "mark",
    age: 32,
    isAdmin: true,
    phone: "+91243543",
  };

  /**
   * 6. ANY
   * It can accept any type of data.
   * Be careful while using it, we should prefer having specific data types
   * If we don't specify the type then by default it's any
   */
  let testAny: any;
  testAny = 123;
  testAny = false;
  testAny = {};
  testAny = "Any";

  let testAnyArray: any[];
  testAnyArray = [1, '2', false];

  return <h1>About Types</h1>;
};

export default TypeComponent;
