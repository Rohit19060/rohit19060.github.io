import card from './card';
import getRepos from './get_repos';
import badge from './github_opensource';

let x = ``;
getRepos().then((repos) => {
    repos.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    repos.forEach((repo) => {
        x += card({
            title: repo.name,
            description: repo.description,
            link: repo.html_url,
            owner: repo.owner,
        }).outerHTML;
    });
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h2>My Projects</h2>
    <div>${badge('https://github.com/Rohit19060/rohit19060.github.io')}</div>
    <main>${x}</main>`;
});


