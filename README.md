## [Inline Menu with async fetching of options](https://async-menu.now.sh)

1. The menu popup adjusts it's size according to screen width/height so
   it never gets cropped. Try changing height and width and opening menu
   and you'll se what I am talking about.

1. The fetching of menu options is done async but it is cached as well so
   the next time a user do same search then there won't be a loading time
   as menu-options will be picked from cache.

1. Completely keyboard accessible.

1. While searching/fetching a loader is shown. Right now the loader is
   shown on the right when you type a text but we can easily move that loader to the menu
   itself wher currently <i>Loading...</i> text is shown. That's just a
   preference design wise but easily implementable.

1. Easily migratable to any theme.
