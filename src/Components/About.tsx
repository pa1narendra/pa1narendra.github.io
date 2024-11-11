import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen flex justify-center items-center flex-col gap-4"
    >
      <p className=" text-3xl tracking-wider text-center w-1/2">
        Hi there , I am{" "}
        <span
          className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-pacify text-5xl"
          style={{ fontFamily: "Protest Guerrilla, sans-serif" }}
        >
          Pavan Narendra{" "}
        </span>{" "}
        a Software Engineer passionate about technology and innovation. Updating
        my skill library with new tech books and creative articles. Open to
        collaborate and discuss about any idea in our domain, build it and bring
        it to live.
      </p>
      <p>
        Click here to know more?
        <span className="text-3xl">
          <NavLink to="/More">
            {" "}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {"Click Me"}
            </button>
          </NavLink>
        </span>
      </p>
    </div>
  );
};

export default About;
