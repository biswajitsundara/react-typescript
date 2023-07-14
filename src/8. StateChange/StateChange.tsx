import { useState } from "react";

type Usertype = {
  name: string;
  sessionId: number;
};
const StateChange = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<Usertype | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: username,
      sessionId: Math.random(),
    });
  };

  return (
    <div>
      {user ? (
        `${user.name} logged in`
      ) : (
        <form action="">
          <input type="text" onChange={handleChange} />
          <button onClick={handleClick}>Login</button>
        </form>
      )}
       
      {/* since user can be null add the question mark so if it's null it won't check name  */}
      {user?.name}
    </div>
  );
};

export default StateChange;
