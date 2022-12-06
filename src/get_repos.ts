import { Repo } from "./types";

export default async function getRepos(): Promise<Repo[]> {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/Rohit19060/repos", false);
    xhr.send();
    const data = JSON.parse(xhr.responseText);
    return data.map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        owner: repo.owner.login,
        fork: repo.fork,
        homepage: repo.homepage
    }))
}