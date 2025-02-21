import { githubApi } from "../config/api/githubApi";
import {
  CurrentUser,
  ReposAPIResponse,
  User,
  UserGithubAPIResponse,
} from "../interfaces/interfaces";

export const getUserByName = async (user: User): Promise<CurrentUser> => {
  try {
    const [{ data }, { data: repos }] = await Promise.all([
      githubApi.get<UserGithubAPIResponse>(`/users/${user.login}`),
      githubApi.get<ReposAPIResponse[]>(`/users/${user.login}/repos`),
    ]);

    const currentUser: CurrentUser = {
      login: data.login,
      id: data.id,
      avatar_url: data.avatar_url,
      bio: data.bio || "No have bio",
      location: data.location || "Narnia",
      html_url: data.html_url,
      followers: data.followers,
      following: data.followers,
      repos: repos.map((repo) => ({
        description: repo.description,
        forks_count: repo.forks_count,
        html_url: repo.html_url,
        id: repo.id,
        license: repo.license,
        name: repo.name,
        stargazers_count: repo.stargazers_count,
        updated_at: repo.updated_at,
      })),
    };

    return currentUser;
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting an user by name: ${name}`);
  }
};
