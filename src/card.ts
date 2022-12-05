import './style.css';
import { Card } from './types';

export default function createCard(x: Card): Element {
    const card = document.createElement('a');
    card.href = x.link;
    card.classList.add('card');
    card.innerHTML = `<strong>${x.title}</strong>
    <p>${x.description}</p>`;
    return card;
}

