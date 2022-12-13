import card from './card';
import getRepos from './get_repos';
import badge from './github_opensource';

let x = ``;
getRepos().then((repos) => {
    repos.sort((a, b) => {
        if (a.fork) {
            return 1;
        }
        if (b.fork) {
            return -1;
        }
        return 0;
    });
    repos.forEach((repo) => {
        x += card(repo).outerHTML;
    });
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="header"><h1>My Projects</h1></div>
    <div>${badge('https://github.com/Rohit19060/rohit19060.github.io')}</div>
    <main>${x}</main>`;
});


