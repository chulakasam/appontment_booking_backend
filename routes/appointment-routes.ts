import express from "express";
import {AddAppointment} from "../database/prisma-appointment-data-store";

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
export default router;