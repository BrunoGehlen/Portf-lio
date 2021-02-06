import AboutMe from "./components/about_me";
import MyInfo from "./components/my_info"
import MyProjects from "./components/my_projects";
import MySkills from "./components/my_skills";

const App = () => {
  return (
    <>
      <MyInfo/>
      <AboutMe/>
      <MySkills/>
      <MyProjects/>
    </>
  );
}

export default App;
