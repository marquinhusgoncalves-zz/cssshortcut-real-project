# CSS Shortcut

[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/marquinhusgoncalves/cssshortcut-real-project/LICENSE.md)

> :rocket: A template to help you create open source projects more organized.

## Run the project locally

1 - Prepare the enviromment

`$ npm install -g gulp-cli`

2- Clone the project and install the dependencies:

```
$ git clone https://github.com/marquinhusgoncalves/cssshortcut-real-project.git
$ cd cssshortcut-real-project
$ npm install
```

3 - Run static server and livereload

`$ gulp server`

## Stack

- Task Runner: [Gulp](http://gulpjs.com/)
- HTML Template Engine: [Pug](https://pugjs.org/api/getting-started.html)
- CSS Preprocessor: [Stylus](http://stylus-lang.com/)

## Folders Structure

.
├── README.md
├── LICENSE.md
├── CONTRIBUTING.md
├── out/
├── src/
├── ├── icons/
|   ├── assets/
|   |   ├── img/
|   |   ├── scripts/
|   |   |   └── script.js
|   |   └── styles/
|   |       └── modules/
|   |       └── style.styl
|   ├── partials/
|   |   ├── footer.pug
|   |   └── header.pug
|   ├── layouts/
|   |   └── default.pug
|   ├── projects.pug
|   └── index.pug
├── gulpfile.js
├── package.json
├── projects.json
├── .editorconfig
└── .gitignore

## Automatic Tasks

- `$ gulp build`: Compile, concat and minify all files.
- `$ gulp server`: Watch the files to build and start a static server.

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing
Find on our [roadmap](https://github.com/marquinhusgoncalves/cssshortcut-real-project/issues) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/marquinhusgoncalves/cssshortcut-real-project/CONTRIBUTING.md).

## History
See [Releases](https://github.com/marquinhusgoncalves/cssshortcut-real-project/releases) for detailed changelog.

## License
[MIT License](https://github.com/marquinhusgoncalves/cssshortcut-real-project/LICENSE.md) © [Marquinhus Gonçalves](http://marquinhusgoncalves.com/)