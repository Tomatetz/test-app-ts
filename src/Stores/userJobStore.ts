import axios from "axios";
import { USER_CAREER_PATH_MOCK } from "../Mocks/careerPathMock";
import { UserCareerPath } from "../model";

export const getUserJobs = async (): Promise<UserCareerPath[]> => {
  try {
    const { data } = await axios.get(`/user/jobs`);
    return data.userJob;
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      const data = USER_CAREER_PATH_MOCK;
      return data.careerPaths;
    }
    return [];
  }
};
