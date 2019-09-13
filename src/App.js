import React from "react";

import InlineMenu from "./InlineMenu";
import "./App.css";

const App = () => (
  <div className="app">
    <InlineMenu />
    <div className="description">
      <h3>
        Inline Menu with async fetching of options(
        <a href="https://github.com/arshdkhn1/menu-with-async-fetching">Code</a>
        )
      </h3>
      <ol>
        <li>
          Try entering a text in the select and you ll get the results matching
          your text. The results are fetched asynchronously.
        </li>
        <li>
          The menu popup adjusts it's size according to screen width/height so
          it never gets cropped. Try changing height and width and opening menu
          and you'll se what I am talking about.
        </li>
        <li>
          The fetching of menu options is done async but it is cached as well so
          the next time a user do same search then there won't be a loading time
          as menu-options will be picked from cache.
        </li>
        <li>Completely keyboard accessible.</li>
        <li>
          While searching/fetching a loader is shown. Right now the loader is
          shown on the left but we can easily move that loader to the menu
          itself wher currently <i>Loading...</i> text is shown. That's just a
          preference design wise but easily implementable.
        </li>
        <li>Easily migratable to any theme.</li>
      </ol>
    </div>
  </div>
);

export default App;
