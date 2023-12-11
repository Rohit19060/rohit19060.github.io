import card from "./card";
import getRepos from "./get_repos";
import badge from "./github_opensource";
import { Repo } from "./types";

let x = document.createElement("div");
let repos: Repo[] = [];

async function updateRepos()
{
  repos = (await getRepos()).sort((a, b) =>
  {
    if (a.fork)
    {
      return 1;
    }
    if (b.fork)
    {
      return -1;
    }
    return 0;
  });
}
updateRepos().then(() =>
{
  repos.forEach((repo) =>
  {
    x.appendChild(card(repo));
  });
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div class="header"><h1>My Projects</h1></div>
    <div>${badge("https://github.com/Rohit19060/rohit19060.github.io")}</div>
    <div class="text-center">
        <input type="search" name="search" id="search" placeholder="Search" title="Search">
    </div>
    <main></main>`;

  document.querySelector<HTMLDivElement>("main")!.appendChild(x);

  let searchELE = document.getElementById("search") as HTMLInputElement;

  searchELE.addEventListener("input", (e) =>
  {
    let x = document.createElement("div");
    let search = (e.target as HTMLInputElement).value;
    let newCardArr = repos.filter((card) =>
      card.name.toLowerCase().includes(search.toLowerCase())
    );
    newCardArr.forEach((repo) =>
    {
      x.appendChild(card(repo));
    });
    document.querySelector<HTMLDivElement>("main")!.innerHTML = "";
    document.querySelector<HTMLDivElement>("main")!.appendChild(x);
  });
});

