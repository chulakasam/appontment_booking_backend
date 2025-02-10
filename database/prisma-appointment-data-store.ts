import {PrismaClient} from "@prisma/client";
import Appointment from "../model/Appointment";

const prisma = new PrismaClient();

export async function AddAppointment(adding_appointment:Appointment){
    try{
        const added_appointment = await prisma.appointment.create({
            data: {
                id: adding_appointment.id,
                name: adding_appointment.name,
                contact: adding_appointment.contact,
                date: adding_appointment.date,
                time: adding_appointment.time
            }
        });
        console.log('appointment create successfully',added_appointment);
    }catch(error){
        console.log("error adding appointment",error);
    }
}
