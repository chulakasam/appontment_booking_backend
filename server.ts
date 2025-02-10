import express from 'express';
import appointmentRoutes from "./routes/appointment-routes";

const app = express();

app.use(express.json());
app.use('/',(req,res,next)=>{
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

   next();
});
app.use('/appointment',appointmentRoutes);


app.listen('5000',()=>{
   console.log('server running port 5000');
});