const User=require('./user');
exports.signup=async(req,res,next)=>{
    const newUser=await User.create(reeq.body);
    res.status(201).json({
        status:'success',
        data:{
            user:newUser
        }
    });
};
