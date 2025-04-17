import React, { useEffect, useState } from "react";
import doctorData from "../utils/doctorData";

import fetchAppointmentsForDoctor from "../utils/appointment";


const DoctorDashboard = () => {
  const [name, setName] = useState("");
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const data = await doctorData();
        console.log(data)
        // Assuming data contains a field "doctorName" or similar.
        setName(data.doctorName || "Doctor");
      } catch (error) {
        setName("error");
      }
    };
    fetchDoctorData();
  }, []);

  // appointments
  useEffect(()=>{
    const getAppointments = async () => {
        try {
            const data = await fetchAppointmentsForDoctor(name);
            console.log(data);
            if(!data) {
                setAppointments([]);
                return;
            }
            if(Array.isArray(data)) {
                setAppointments(data);
            }else if(data.appointments){
                setAppointments(data.appointments);
            }else{
                setAppointments([]);
            }
            // setAppointments(data.appointments);
        } catch (error) {
            console.error("Error fetching appointments:", error.message);
        }
    }
    if(name) {
        getAppointments();
    }
  },[name]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      {appointments.length === 0 ? (
        <p>No appointments found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Age</th>
                <th className="py-2 px-4 border">Address</th>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Timing</th>
                <th className="py-2 px-4 border">Disease</th>
                <th className="py-2 px-4 border">Doctor</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Gender</th>
                <th className="py-2 px-4 border">Mobile</th>
                {/* <th className="py-2 px-4 border">Token</th> */}
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt) => (
                <tr key={apt._id} className="text-center border-t">
                  <td className="py-2 px-4 border">{apt.name}</td>
                  <td className="py-2 px-4 border">{apt.age}</td>
                  <td className="py-2 px-4 border">{apt.address}</td>
                  <td className="py-2 px-4 border">
                    {new Date(apt.dateOfAppointment).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border">{apt.timing}</td>
                  <td className="py-2 px-4 border">{apt.disease}</td>
                  <td className="py-2 px-4 border">{apt.doctor}</td>
                  <td className="py-2 px-4 border">{apt.email}</td>
                  <td className="py-2 px-4 border">{apt.gender}</td>
                  <td className="py-2 px-4 border">{apt.mobile}</td>
                  {/* <td className="py-2 px-4 border">{apt.token}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;