const express = require('express')
const router = express.Router();
const {ensureAuth} = require('../middleware/auth')
const Story = require('../models/Story')

router.get('/add',ensureAuth,(req,res) =>{
  res.render('stories/add');
})

router.post('/',ensureAuth,async (req,res) =>{
  try{
    req.body.user = req.user.id;
    await Story.create(req.body);
    res.redirect('/dashboard')
  }
  catch(err){
    console.log(err);
    res.render('error/500');
  }
})
router.get('/',ensureAuth, async (req,res) =>{
  try{
    const stories = await Story.find({status:'public'}).populate('user').sort({createdAt:'desc'}).lean();
    console.log()
    res.render('stories/index',{stories : stories});
  }catch(err){
    console.error(err);
    res.render('error/500');
  }
})
router.get('/:id',ensureAuth, async (req,res) =>{
  const id = req.params.id;
  console.log(id)
  const fetchStory = await Story.findById(id).lean();
  console.log(fetchStory)
  res.render('stories/view',{
    story: fetchStory,
  });
})


module.exports = router