const mongoose = require('mongoose')

require('dotenv').config();

const Seed=require('./model')


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});


const seedData=[  
    {name:"superadmin1", email:"superadmin@gmail.com",password:'fnsjdnfsjkd99u9u0912'},  
    {name:"admin", email:"admin@gmail.com",password:'fnsjdnfsjkd99u9u0912'}  
] 


const seedDB=async ()=>{
    await Seed.deleteMany({})
    await Seed.insertMany(seedData)
}



seedDB().then(()=>{
    mongoose.connection.close();
})