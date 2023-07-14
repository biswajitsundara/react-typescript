const GenericComponent = () => {
  /**
   * Generics
   */

  interface IAuthor {
    id: number;
    username: string;
  }

  interface ICategory {
    id: number;
    title: string;
  }

  interface IPost {
    id: number;
    title: string;
    desc: string;
    extra: IAuthor[] | ICategory; //This is correct but every time we will have to update the other interfaces
  }

  interface IPostBetter<T> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
  }

  const testme: IPostBetter<String> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: ["Apple", "Mango"],
  };

  interface IPostEvenBetter<T extends object> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
  }

  const testMe2: IPostEvenBetter<{ id: number; username: string }> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{ id: 1, username: "john" }],
  };

  const testMe3: IPostEvenBetter<ICategory> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{ id: 1, title: "cat" }],
  };

  return <h1>Generics</h1>;
};

export default GenericComponent;
