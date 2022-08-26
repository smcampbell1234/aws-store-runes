# App Notes

### Routing

React-Router V.6

```
npm install react-router-dom
```

React Icons (font awsome)

```
npm install react-icons --save
// in Navbar.js
import { IconName } from "react-icons/fa";
```

Lodash

```
npm i --save lodash
```

### Netlify CI/CD Requirements

create redirect file in public (single underscore) and add this line to it \_redirects file in public

```
/*    /index.html   200
```

package.json in scripts section of package.json replace build field with this (it includes CI=)

```
"build": "CI= react-scripts build",
```
