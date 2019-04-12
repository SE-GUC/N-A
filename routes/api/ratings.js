const express = require('express');
const router = express.Router();
const Rating= require('../../models/Rating');
const User=require('../../models/User');

router.get('/:id',(req,res)=>{
  const id=req.params.id
  Rating.findOne({'_id':id})
  
});

 router.post('/', async (req,res) => {
     const rating =req.body.rating
     const review=req.body.review
     const project_id=req.body.project_id
     const reviewer_id=req.body.reviewer_id
     const reviewed_id=req.body.reviewed_id
     const R=await Rating.create({
       'rating':rating,
       'review':review,
       'project_id':project_id,
       'reviewer_id':reviewer_id,
       'reviewed_id':reviewed_id
     })
     const user=await User.find({'_id':reviewed_id})
    
     (user.Ratings).push(R._id)
     const X =await user.updateOne({'Ratings':user.Ratings})
     const count=0
     for(let i=0;i<X.Ratings.length;i++){
          const Y=Rating.findOne({'_id':X.Ratings[i]})
          count+=Y.rating
     }
     const avg=count/X.Ratings.length
     await X.updateOne({'Avg_Rating':avg})
    
     res.json({msg:'OK'})
	
	})
  
router.delete('/:id', async (req,res) => {
    const S=Rating.findOne({'_id':req.params.id})
    const user=User.findOne({'_id':S.reviewed_id})
    const result=[]
    for(let i=0;i<user.Ratings.length;i++)
      if(user.Ratings[i]._id!=req.params.id)
          result.push(user.Ratings[i]) 
    const X=await user.updateOne({'Ratings':result})
    await Rating.findOneAndRemove({'_id':req.params.id})
    const count=0
     for(let i=0;i<X.Ratings.length;i++)
            count+=X.Ratings[i].rating
     const avg=count/X.Ratings.length
     await X.updateOne({'Avg_Rating':avg})
       
 })
 module.exports = router;
 