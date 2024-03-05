// markdown-parser.js

function parseMarkdown(markdown) {
    const lines = markdown.split('\n');
    let result = '';

    lines.forEach(line => {
        if (line.startsWith('# ')) {
            result += `<h1>${line.substring(2)}</h1>`;
        } else if (line.startsWith('## ')) {
            result += `<h2>${line.substring(3)}</h2>`;
        } else if (line.startsWith('### ')) {
            result += `<h3>${line.substring(4)}</h3>`;
        } else if (line.startsWith('* ')) {
            result += `<li>${line.substring(2)}</li>`;
        } else {
            result += `<p>${line}</p>`;
        }
    });

    return result;
}

module.exports = parseMarkdown;
