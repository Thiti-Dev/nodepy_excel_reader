"use strict";
exports.__esModule = true;
exports.csv_to_array_object = void 0;
var child_process_1 = require("child_process");
var json5 = require("json5");
function spawn_pytohn_script(filename) {
    return child_process_1.spawn('py', ["core.py", filename], {
    // cwd:process.cwd(),
    // detached: false,
    // stdio: "inherit"
    });
}
function csv_to_array_object(filename) {
    var pyscript = spawn_pytohn_script(filename);
    var pipe_data = [];
    return new Promise(function (resolve, reject) {
        pyscript.stdout.on('data', function (data) {
            pipe_data.push(data);
        });
        pyscript.on('close', function (code) {
            var data = pipe_data.join("");
            // the data from python would be like -> {'vocaburary': 'test'}
            // we need to change the single ' to the " in order to make it parseable
            // or alternatively use json5 likes below
            var parsed_data = json5.parse(data);
            resolve(parsed_data);
        });
    });
}
exports.csv_to_array_object = csv_to_array_object;
