import express from 'express'
import userRoute from './routes/user.route.js'
const app = express();


app.use(express.json());


app.use("/user",userRoute )

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`)
})