export default function Text() {
  return (
    <div className=" absolute flex flex-col  items-center justify-center mt-[250px] leading-tight">
      <p className=" text-3xl tracking-wider text-center w-1/2">
        Hi there , I am{" "}
        <span
          className="bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 bg-clip-text text-transparent text-5xl font-bold"
          style={{ fontFamily: "Protest Guerrilla, sans-serif" }}
        >
          Pavan Narendra{" "}
        </span>{" "}
        a Software Engineer passionate about technology and innovation. Updating
        my skill library with new tech books and creative articles. Open to
        collaborate and discuss about any idea in our domain, build it and bring
        it to live.I play chess in order to get rid of stress but end up being
        in more stress.
      </p>
    </div>
  );
}
