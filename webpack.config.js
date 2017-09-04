let entry = __dirname + '/resources/js/app/app.js';
let outputPath = __dirname + '/public/js/';

module.exports = {
    entry: entry,
    output: {
        path: outputPath,
        filename: 'app.bundle.js'
    }
};
