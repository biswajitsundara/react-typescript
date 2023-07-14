const EventExample = () => {
 

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //e.preventDefault();
    console.log(e.target);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    //e.preventDefault();
    console.log(`Post ${id} has been deleted`);
    console.log(e.target);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Hello World</button>
      <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
    </>
  );
};

export default EventExample;
