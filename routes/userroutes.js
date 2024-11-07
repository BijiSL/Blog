const express=require('express');
const router=express.Router();
const UserData=require('../model/userData');
router.use(express.json());

router.post('/login',async(req,res)=>{
    try{
    const user=UserData.findOne({email:req.body.email});
if(!user){
    res.status(200).send('Login successful');
}    
else{
res.status(400).send('Invalid credential')
}
}catch(error){
console.log('error');
    }
})

module.exports=UserData;