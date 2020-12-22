import {EmojiWidget} from "../EmojiWidget.js";
import {Context} from "../Context.js";

export function createSearch() {
    const search = document.createElement('div');
    search.classList.add('search');
    const searchInput = document.createElement('input');
    searchInput.classList.add('search-input');
    searchInput.placeholder = 'Search';
    search.appendChild(searchInput);

    searchInput.addEventListener('input', (e) => {
        const searchString = e.target.value.toLowerCase();
        EmojiWidget.filterEmoji(searchString);
    });

    Context.searchInput = searchInput;
    return search;
}