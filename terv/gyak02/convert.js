"use strict";

const fs = require('fs');
const jimp = require('jimp');
const DataStore = require('nedb');

const db= new DataStore({
    filename: 'images.nedb',
    autoload: true,
})

db.remove({},{multi: true}, function(err, numRemoved) {
    if (err) throw err;
    fs.readdir('terv/gyak02/images/', function (err, files) {
        if (err) throw err;
        let count = files.length;
        console.log(files);
        files.forEach(function (fileName){
            jimp.read(`terv/gyak02/images/${fileName}`, function(err, image){
                console.log(image);
                //const width = image.bitmap.width;
                //const height = image.bitmap.height;
                const {width, height}= image.bitmap; //objektum dekonstruálás
                db.insert({fileName, width, height}, function(err, insertedImage){
                    console.log(insertedImage);
                    image.resize(100, jimp.AUTO);
                    image.write(`terv/gyak02/converted/${insertedImage._id}.png`, function(err, fileName){
                        if (err) throw err;
                        console.log(fileName, 'feldolgozva');
                        count --;
                        if(count == 0){
                            console.log('VEGE');
                        }
                    })
                })
            })
        })
    });
})

//parancssorba npm init
// npm install --save nedb
// npm install -- save jimp