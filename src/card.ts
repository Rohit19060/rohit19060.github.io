import "./style.css";
import { Repo } from "./types";

export default function createCard(e: Repo): Element
{
  let card = document.createElement("a");
  card.href = e.homepage != null && e.homepage != "" && e.homepage != "null" &&
    e.homepage != "undefined" && e.homepage.includes("https://")
    ? e.homepage
    : e.html_url;
  card.target = "_blank";
  card.className = "card";
  card.title = e.name;
  card.innerHTML = `
  <div>
    <h3>${e.name}</h3>
    <h5 class="description">${e.description == null ? "" : e.description}</h5>
</div>`;
  card.innerHTML += `<div class="upper_card">
    <a href="${e.html_url}" target="_blank" class="btn">Code</a>
</div>`;
  return card;
}
