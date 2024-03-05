# Goeter

Goeter is a simple Markdown parser package for Node.js.

## Installation

To install Goeter, you can use npm:

```
npm install goeter
```

## Usage

```javascript
const parseMarkdown = require('goeter');

const markdown = `
# Heading 1
## Heading 2
### Heading 3

* List item 1
* List item 2

Paragraph text.
`;

const html = parseMarkdown(markdown);
console.log(html);
```

This will parse the Markdown input and return the corresponding HTML.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
