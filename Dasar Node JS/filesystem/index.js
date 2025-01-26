const fs = require('fs'); //import modul file system
const path = require('path'); //import modul path

// menentukan path dinamis untuk notes.txt
const filePath = path.resolve(__dirname, 'notes.txt');


//membaca file secara asynchronous
fs.readFile(filePath, 'UTF-8', (error, data) => {
    if(error) {
        console.error('Gagal membaca berkas', error.message);
        return;
    }
    console.log(data);
});



