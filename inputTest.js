function prompt(edate, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(edate);

    stdin.once('data', function (data,err) {
        callback(Date.parse("'" + data.toString().trim()+"'").toString())
    });
}

prompt('Enter Date: ', function (input) {
    console.log(input);
    process.exit(console.log("Unix conversion complete"))
});