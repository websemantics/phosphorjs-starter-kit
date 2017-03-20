```
                 ╭──────●──────╮                                                       
╭──────╮╭────╮   │  ●───●───●  │ ╭──────╮╭──────╮╭────╮  ╭──────╮╭───┬──╮ ╭───╮╭──────╮
│   ╭╮ ││    ╰─╮ ●  │  ╭●╮  │  ● │  ────┤│   ╭╮ ││    ╰─╮│   ╭╮ ││      │ │   ││  ────┤
│   ╰╯ ││      │ │  ●  │ │  ●  │ │      ││   ╰╯ ││      ││   ││ ││    ╭─╯╭╯   ││      │
│    ╭─╯│   ╭╮ │ │  │  ╰●╯  │  │ ├────  ││    ╭─╯│   ╭╮ ││   ╰╯ ││    │  │    │├────  │
╰────╯  ╰───╯╰─╯ │  ●───●───●  │ ╰──────╯╰────╯  ╰───╯╰─╯╰──────╯╰────╯  ╰────╯╰──────╯
     Starter Kit ╰────●───●────╯ Web App Boilerplate                                                     
```
> A full-featured [Webpack](https://webpack.github.io/) + [PhosphorJS](http://phosphorjs.github.io/) starter kit with live reload, linting, and fast development setup.

@gbraad been thinking along similar lines where software is built in layers (Docker-like) to manage complixity, each addresses a different concern which make it easier to understand,

[![Build Status](https://travis-ci.org/websemantics/phosphorjs-starter-kit.svg?branch=master)](https://travis-ci.org/websemantics/phosphorjs-starter-kit) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/websemantics/phosphorjs-starter-kit/master/LICENSE.md) [![GitHub forks](https://img.shields.io/github/forks/websemantics/phosphorjs-starter-kit.svg)](https://github.com/websemantics/phosphorjs-starter-kit/network) [![GitHub stars](https://img.shields.io/github/stars/websemantics/phosphorjs-starter-kit.svg)](https://github.com/websemantics/phosphorjs-starter-kit/stargazers)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/websemantics/phosphorjs-starter-kit.svg)](http://isitmaintained.com/project/websemantics/phosphorjs-starter-kit "Percentage of issues still open") [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

#### [Try it](http://websemantics.github.io/phosphorjs-starter-kit/)

## Features

- Fast development configuration using [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- Maintain clean, error-free code with linting (feedback can be viewed @ Browser Console)
- Live reload during development for convenience 
- Consistent coding styles with [Editor Config](http://editorconfig.org)
- Separate vendor and app script bundles
- Based on the example code [@phosphor](https://github.com/phosphorjs/phosphor)
- Experimental themes and widgets

## Preview

![Preview](https://raw.githubusercontent.com/websemantics/phosphorjs-starter-kit/master/preview_1.gif)

## Getting Started

Clone this repository,
``` bash
git clone https://github.com/websemantics/phosphorjs-starter-kit
```

Install dependencies,
``` bash
cd phosphorjs-starter-kit
npm install
```

Build for production to `dist` folder,
``` bash
npm run build 
```

Start development server,
``` bash
npm run start 
```

## Support

Need help or have a question? post at [StackOverflow](https://stackoverflow.com/questions/tagged/phosphorjs-starter-kit+websemantics).

*Please don't use the issue trackers for support/questions.*

*Star if you find this project useful, to show support or simply for being awesome :)*

## Contribution

Contributions to this project are accepted in the form of feedback, bugs reports and even better - pull requests.

## License

[MIT license](http://opensource.org/licenses/mit-license.php) Copyright (c) Web Semantics, Inc.