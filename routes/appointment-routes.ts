import express from "express";
import {AddAppointment, GetAllAppointment} from "../database/prisma-appointment-data-store";

const router = express.Router();

router.post('/',async (req, res) => {
    const adding_appointment = req.body;

    try {
          const newAppointment = await AddAppointment(adding_appointment);
          res.json(newAppointment);
      }catch (error){
          console.log('error saving appointment');
      }
});

router.get('/', async (req, res) => {
    try {
        const getAllDetails = await GetAllAppointment();
        res.json(getAllDetails);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


export default router;