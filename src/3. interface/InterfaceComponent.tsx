const InterfaceComponent = () => {
  /**
   */
  interface IUser {
    username: string;
    email: string;
    age: number;
  }

  interface IEmployee extends IUser {
    employeeId: number;
  }

  const emp: IEmployee = {
    username: "bis",
    email: "bis",
    age: 12,
    employeeId: 12345,
  };

  interface IAuthor{
    id: number,
    username:string
  }

  interface IPost{
    id: number,
    title: string,
    
  }

  return <h1>Interface</h1>;
};

export default InterfaceComponent;
