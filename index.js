const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const host = 'localhost';
const port = 3001;

// reuest = data masuk dari luar
// response = data keluar dari sistem
const server = http.createServer(function (request, response) {

    // const = variabel yang bisa diubah
    // let variabel bisa diubah
    const nama = "mhamdany";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)

    // download file
    // fs.appendFile('sisauang.txt', sisa, () => {
    //     console.log('data uang berhasil disimpan');
    // });

    const hasil = `halo nama saya ${nama}, saya jajan sebayak ${jajan}, uang saya tadinya ${uang}, sekarang menjadi ${sisa}`;

    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, function () {
    console.log(`server menyala di ${host}:${port}`);
});