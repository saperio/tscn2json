tscn2json - tool to convert [Godot](https://godotengine.org) .tscn files to json, with command line and programmatic interfaces. Based on parser, generated with [PEG.js](https://pegjs.org), grammar can be found here: [grammar/tscn.pegjs](../blob/master/grammar/tscn.pegjs)
## Installation
To use the tscn2json command, install globally:

`npm install -g tscn2json`

To use the JavaScript API, install locally:

`npm install tscn2json`

## Command Line usage
Usage is simple: `tscn2json input [output]`

`input` - input tscn file, `output` - output json file, if omited, result will be printed to `stdout`.