const Projects = () => {
  return (
    <div
      id="projects"
      className="h-screen"
    >
      <h2 className="text-center text-3xl mb-7">Here are few of my projects</h2>
      <div className="w-7/8 grid justify-center items-center grid-cols-2">
        <div className="flex justify-center p-10 gap-6">
          <img className="w-1/5 h-[200px]" src="" alt="" />
          <p className="pro-description text-xl w-1/3">
            Fresh Meals is an Idea generated from the confusion we faced when we
            went to a new city and tried to have some food. There are several
            food items and many restaurants to choose from. We thought it would
            be nice to have an app that tells us what are the most famous dishes
            of that area in that particular season , and which restaurants
            produce that item.
          </p>
        </div>
        <div className="flex justify-center p-10 gap-6">
          <img className="w-1/5 h-[200px]" src="" alt="" />
          <p className="pro-description text-xl w-1/3">
            Smart Grow is an IoT based project. This project helps farmers to
            monitor their crops and to take necessary actions in order to
            increase their yield. This project is based on the concept of
            Internet of Things (IoT).
          </p>
        </div>
        <div className="flex justify-center p-10 gap-6">
          <img className="w-1/5 h-[200px]" src="" alt="" />
          <p className="pro-description text-xl w-1/3">
            CSE Site is a website that provides information about Computer Science
            and Engineering Department of KITS Guntur. This website is built
            using Traditional HTML, CSS and JS.It has all details about the events, 
            faculty members, and other important information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
