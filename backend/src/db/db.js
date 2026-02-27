const mongoose=require('mongoose')

const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://shiv:4Uvj7PrQEfce9OXn@notes.a9xaoya.mongodb.net/profile')
    console.log('db connected')
}

module.exports=connectDB