/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
const fs = require('fs');
const path = require('path');

//menentukan path file input dan output
const inputPath = path.resolve(__dirname, 'input.txt');
const outputPath = path.resolve(__dirname, 'output.txt');

//membuat readable stream dengan ukuran 15 karakter (highwatermark)
const readableStream = fs.createReadStream(inputPath, {
    highWaterMark: 15, //Buffer ukuran 15 karakter
    encoding: 'utf8', // agar karakter yg dapat dibaca adalah teks
});

//membuat writable stream untuk menulis ke file output.txt
const writableStream = fs.createWriteStream(outputPath);

//Event readable: Dipicu saat chunk dapat dibaca
readableStream.on('readable', () => {
    let chunk;
    //membaca chunk selama ada data
    while ((chunk = readableStream.read()) !== null) {
        //menulis chunk ke output.txt dengan menambahkan newline (\n)
        writableStream.write(chunk + '\n');
    }
});

//event end: dipicu saat seluruh proses membaca selesai
readableStream.on('end', () => {
    console.log('Proses membaca dan menulis selesai.');
    writableStream.end(); //menutup writable stream
});

//event error: menangani error
readableStream.on('error', (err) => {
    console.error('Error saat membaca file:', err.message);
});

writableStream.on('error', (err) => {
    console.error('Error saat membaca file:', err.message);
});