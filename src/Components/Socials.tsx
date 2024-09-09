import { useState } from "react";
const Socials = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="header fixed top-3">
      <button
        onClick={() => {
          setActive(!active);
        }}
      ></button>
    </div>
  );
};

export default Socials;
