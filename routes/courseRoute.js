const express = require('express');
const courseController = require('../controllers/courseControllers');

const router = express.Router();

router
  .route('/')
  .post(courseController.createCourse)
  .get(courseController.getAllCourses);

module.exports = router;
