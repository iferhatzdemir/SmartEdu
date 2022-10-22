const mongoose = require('mongoose'); //MongoDB işlemlerini kolaylaştıran bir ODM modülüdür ve bunu burada tanımlıyoruz.
const Schema = mongoose.Schema; //schema veriyi modellemimizi sağlar.
const courseSchema = new Schema({
  //Schema oluşturuyoruz.

  name: {
    //Schema içerisindeki name alanı
    type: String, //String tipinde
    required: true, //Zorunlu alan
    unique: true, //her name burada farklı olmalı bunun içinde burada unique: true diyerek bunu sağlıyoruz.
  },
  description: {
    type: String,
    required: true,
    trim: true, //boşlukları siler
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
