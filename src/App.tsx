import React, { useEffect, useState } from "react";
import "./App.scss";
import { getUserJobs } from "./Stores/userJobStore";
import { UserCareerPath } from "./model";

const App = () => {
  const [careerPaths, setCareerPaths] = useState([] as UserCareerPath[]);
  useEffect(() => {
    getUserJobs().then((response) => {
      response && setCareerPaths(response);
    });
  }, []);
  return (
    <div className="App">
      {careerPaths.map((path) => (
        <div>{path.name}</div>
      ))}
    </div>
  );
};

export default App;
