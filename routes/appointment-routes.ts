import express from "express";
import {AddAppointment, CancelAppointment, GetAllAppointment} from "../database/prisma-appointment-data-store";

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

router.delete('/:id',async (req, res) => {
    try{
        const appointmentId = req.params.id;
        const cancel_appointment = await CancelAppointment(appointmentId);
        res.json(cancel_appointment);
    }catch (error) {
        console.log('error deleting appointment',error);
    }
})

export default router;