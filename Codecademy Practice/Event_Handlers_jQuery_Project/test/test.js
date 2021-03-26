console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('js/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      on('click', () => {
        $('.nav-menu').show();
      })  
    };


    let isMatch = Structured.match(code, structure);
    assert.isOk(isMatch, 'Did you change \'____\' to \'click\'?');
  });
});