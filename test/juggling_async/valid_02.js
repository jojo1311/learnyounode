var http = require('http'),
    feed = [],
    count = 0,
    url = process.argv.slice(2);

function allDone() {
    count += 1;
    if (count === feed.length) {
        feed.forEach( function (value) {
            console.log(value);
        });
    }
}

url.forEach(function (value, index) {
    feed[index] = '';
    http.get(value, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
            feed[index] += data;
        })
        response.on('end', allDone);
    })
})
