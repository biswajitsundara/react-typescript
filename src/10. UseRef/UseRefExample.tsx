import React, { useEffect, useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    inputRef.current?.focus()
  },[])

    function handleClick(): void {
        console.log('username' + usernameInputRef.current?.value);
    }

  return (
    <div className="useRefExample">
      <input type="text" ref={inputRef} placeholder="focus here" />
      <input type="text" ref={usernameInputRef} placeholder="username" />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default UseRefExample;
