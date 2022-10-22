const Course = require('../models/Course'); // burada oluşrulan course modelini sayfamıza import ediyoruz.
exports.createCourse = async (req, res) => {
  //exports ile dışarıya açıyoruz.
  // ASYNC AWAIT  yaplması için async yazıyoruz.
  try {
    //try catch bloğu ile hata yakalama işlemi yapıyoruz.
    const newCourse = await Course.create(req.body); //await ile Course modelinden gelen verileri create ile oluşturuyoruz.
    res.status(201).json({
      //201 status kodu ile oluşturma işlemi başarılı olduğunu gösteriyoruz. json ile de veriyi gönderiyoruz.
      status: 'success', //status olarak success gönderiyoruz.bu da başarılı olduğunu gösteriyor.

      data: {
        //data olarak da oluşturulan course gönderiyoruz.
        course: newCourse, //
      },
    });
  } catch (err) {
    //hata yakalama işlemi
    res.status(400).json({
      //400 status kodu ile hata olduğunu gösteriyoruz.
      status: 'fail', //status olarak fail gönderiyoruz.bu da başarısız olduğunu gösteriyor.
      message: err, //message olarak da hata mesajını gönderiyoruz.
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      status: 'success',
      results: courses.length,
      data: {
        courses,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        course,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        course,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
