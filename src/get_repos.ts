import { Repo } from "./types";

export default async function getRepos(): Promise<Repo[]> {
    const url = "https://api.github.com/users/Rohit19060/repos";
    let allRepos: Repo[] = [];
    let nextUrl: string | null = url;

    while (nextUrl) {
        const response = await fetch(nextUrl, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching repos: ${response.statusText}`);
        }

        const data = await response.json();
        const repos = data.map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            owner: repo.owner.login,
            fork: repo.fork,
            homepage: repo.homepage
        }));

        allRepos = allRepos.concat(repos);

        // Get next page URL from the Link header
        const linkHeader = response.headers.get("link");
        const nextLink = linkHeader?.match(/<([^>]+)>;\s*rel="next"/);
        nextUrl = nextLink ? nextLink[1] : null;
    }

    return allRepos;
}
