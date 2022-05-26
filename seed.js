const mongoose = require('mongoose')

require('dotenv').config();

const Seed = require('./model')


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});


const seedData = [
    { name: "superadmin2", email: "superadmin@gmail.com", password: 'fnsjdnfsjkd99u9u0912' },
    { name: "admin11", email: "admin@gmail.com", password: 'fnsjdnfsjkd99u9u0912' }
]


const seedDB = async () => {

    for (let i = 0; i < seedData.length; i++) {
        await Seed.find({ name: seedData[i].name })
        .exec()
        .then((seed) => {
            if (seed.length >= 1) {
               
               
            }
            else {
                Seed.insertMany(seedData[i]);
               
            }
        })

  



    }


  
}




seedDB()