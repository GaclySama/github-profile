export interface UsersGithubAPIResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
}

export interface Item {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
  score: number;
}

export interface UserGithubAPIResponse {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
  user_view_type: string;
  name: string;
  location: null;
  bio: null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

export interface ReposAPIResponse {
  id: number;
  html_url: string;
  name: string;
  description: null | string;
  license: License | null;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
}

export interface License {
  key: string;
  name: string;
  spdx_id: string;
}

// * My interfaces

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
}

export interface CurrentUser {
  login: string;
  id: number;
  avatar_url: string;
  bio: string;
  location: string;
  html_url: string;
  followers: number;
  following: number;
  repos: ReposAPIResponse[];
}
