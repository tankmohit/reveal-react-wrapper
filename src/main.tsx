import { render } from 'react-dom';
// @ts-ignore
import Highlight from 'reveal.js/plugin/highlight/highlight.esm';
// @ts-ignore
import Zoom from "reveal.js/plugin/zoom/zoom.esm";
// @ts-ignore
import Notes from "reveal.js/plugin/notes/notes.esm";
// @ts-ignore
import Search from "reveal.js/plugin/search/search.esm";
// @ts-ignore
import Markdown from "reveal.js/plugin/markdown/markdown.esm";

import { RevealJS } from './RevealCore';
import App from './App';

render(
    <RevealJS
        plugins={[Highlight, Zoom, Notes, Search, Markdown]}
        theme="black"
    >
        <App />
    </RevealJS>,
    document.querySelector('#root'),
);