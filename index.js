const oak = require('oak');
const path = require('path');
const localFile = 'file://' + path.join(__dirname, 'index.html');

oak.on('ready', () => {
    oak.load({
        // url: 'http://mockup.o2.oath.com/ade/load-test/standard.html',
        url: localFile,
        title: 'O2 Player OAK OS Demo',
        size: '1024x768'
    });
});