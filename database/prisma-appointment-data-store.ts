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

export async function GetAllAppointment() {
    try {
        const appointment_details = await prisma.appointment.findMany();
        console.log('Fetched Data:', appointment_details);
        return appointment_details;
    } catch (error) {
        console.error('Error fetching appointments:', error);
        throw error;
    }
}

export async function CancelAppointment(appointmentId:string){
    try {
        const deletedAppointment=await prisma.appointment.delete({
            where:{id:appointmentId}
        });
        console.log('delete appointment successfully',deletedAppointment);
        return deletedAppointment;
    }catch (error){
        console.log('error deleting appointment',error);
    }
}
