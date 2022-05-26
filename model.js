const mongoose=require("mongoose")

const seedSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
 
})

const Seed = mongoose.model('Seed',seedSchema);

module.exports=Seed



