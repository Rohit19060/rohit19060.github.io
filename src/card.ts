import './style.css';
import { Repo } from './types';


export default function createCard(x: Repo): Element {
    const cardData = document.createElement('a');
    cardData.className = "card";
    cardData.href = x.html_url;
    cardData.title = x.name;
    cardData.target = '_blank';
    const div = document.createElement('div');
    div.classList.add('cardData');
    const name = document.createElement('h3');
    name.innerText = x.name.replaceAll("_", ' ').replaceAll("-", ' ');
    const desc = document.createElement('p');
    desc.innerText = x.description;
    div.appendChild(name);
    div.appendChild(desc);
    cardData.appendChild(div);
    return cardData;
}

