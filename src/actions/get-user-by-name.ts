import { githubApi } from "../config/api/githubApi";
import {
  FullUser,
  ReposAPIResponse,
  User,
  UserGithubAPIResponse,
} from "../interfaces/interfaces";

export const getUserByName = async (user: User): Promise<FullUser> => {
  try {
    const [{ data }, { data: repos }] = await Promise.all([
      githubApi.get<UserGithubAPIResponse>(`/users/${user.login}`),
      githubApi.get<ReposAPIResponse[]>(`/users/${user.login}/repos`),
    ]);

    const currentUser: FullUser = {
      user: {
        id: data.id,
        html_url: data.html_url,
        image: data.avatar_url,
        name: data.login,
      },
      bio: data.bio || "No have bio",
      location: data.location || "Narnia",
      followers: data.followers.toString(),
      following: data.following.toString(),
      repositories: repos.map((repo) => ({
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
    throw new Error(`Error getting an user by name: ${user.login}`);
  }
};
