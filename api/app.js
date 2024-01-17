import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path'


mongoose.connect(process.env.MONGO_DB).then(()=> {
    console.log('Connected to MongoDB!');
}).catch((err)=>{
    console.log(err);
})

const __dirname = path.resolve();
const app = express();



app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})
app.listen(3000, () => {
    console.log('Server running on port 3000!!!!');
})