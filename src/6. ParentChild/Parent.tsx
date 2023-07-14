const Parent = ({children}: {children:React.ReactNode}) => {
  return <div>
    <h1>{'This is parent'}</h1>
    {children}
  </div>;
};

export default Parent;
