# Html static website template

## Get started

0. To install parcel, if don't have

```bash
npm install -g parcel-bundler
```
1. Update dependencies

```bash
npm install
```

2. To run dev env & watch

```bash
npm run dev
```

3. For build production-ready files, run

```bash
npm run build
```

4. Open http://localhost:1234 and enjoy!

## Development features description

### Project structure

```blocks``` - contains logics blocks with content: html template, js, css.

```index.html``` - main entrypoint. To include blocks, using Posthtml with ```.posthtmlrc.js``` configuration file

```master.css``` - main css file. Syntax for imports:

```css
@import "./blocks/framework/*.css";
```

```index.js``` - main js file. Syntax for imports:
```js
// CommonJS
const dep = require('./path/to/dep')
// or ES6
import dep from './path/to/dep'
```

```dist``` - builds result's folder
