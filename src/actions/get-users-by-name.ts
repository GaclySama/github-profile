import { githubApi } from "../config/api/githubApi";
import { User, UsersGithubAPIResponse } from "../interfaces/interfaces";

export const getUsersByName = async (name: string): Promise<User[]> => {
  try {
    const { data } = await githubApi.get<UsersGithubAPIResponse>(
      `/search/users?q=${name}+in:login&page=1&per_page=5`
    );

    const users = data.items.map<User>((user) => ({
      login: user.login,
      id: user.id,
      avatar_url: user.avatar_url,
      url: user.url,
      html_url: user.html_url,
      followers_url: user.followers_url,
      following_url: user.following_url,
      repos_url: user.repos_url,
    }));

    console.log(users, "Mapeados");

    return users;
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting an user by name: ${name}`);
  }
};
