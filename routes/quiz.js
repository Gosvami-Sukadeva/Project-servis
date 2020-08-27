const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz')

/* GET home page. */
router.get('/', (req, res)=> {
// new Quiz({title: 'Pytanie 1', vote: 0}).save(); - linijka która nam utworzyła i dodała model w naszej bazie
Quiz.find({}, (err, data) => {
console.log(data)

  res.render('quiz', { title: 'Quiz' });
})
  
});




module.exports = router;