const shell = require('shelljs');

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'file name?',
  },
  {
    type: 'select',
    name: 'path',
    message: 'path',
    choices: ['components', ...shell.ls('-d', `screens/**/components`)],
  },
];
