import { getUsers } from "./users.js";
export const userFilter = (filter = {}) => {
  if (Object.keys(filter).length > 0) {
    if ("skills" in filter) {
      const { skills } = filter;
      const users = getUsers();
      return users.filter((user) => user.skills === skills);
    } else {
      return [];
    }
  } else {
    return getUsers;
  }
};
