const ejs = require('ejs');
const fs = require('fs');

function writeFile(output, input, data) {
    let html = ejs.renderFile(input, { local: data }, {}, (err, html) => {
        if(err) throw err;
        fs.writeFileSync(output, html);
    });
}

writeFile('dist/index.html', 'src/html/index.ejs', {
    test: "Example",
    eelectron: {
        version: JSON.parse(fs.readFileSync('./package.json', 'utf8')).version,
        message: "Locals are beeing loaded in the &nbsp;<pre>e.js</pre>&nbsp; file to allow full access."
    }
});

console.log("Finished compiling EJS files");