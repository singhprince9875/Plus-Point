import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import doctorData from "../utils/doctorData";
import fetchAppointmentsForDoctor from "../utils/appointment";

// Define helper function outside component (pure function)
const generateDiseaseStats = (appointments) => {
  const stats = {};

  appointments.forEach((apt) => {
    const disease = apt.disease;
    const age = apt.age;
    const location = apt.address;

    if (!stats[disease]) {
      stats[disease] = {
        count: 0,
        patients: [],
      };
    }

    stats[disease].count += 1;
    stats[disease].patients.push({ age, location, name: apt.name });
  });

  return stats;
};

const DoctorDashboard = () => {
  const [name, setName] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [diseaseStats, setDiseaseStats] = useState({});
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const data = await doctorData();
        console.log(data);
        // Assuming data contains a field "doctorName" or similar.
        setName(data.doctorName || "Doctor");
      } catch (error) {
        setName("error");
      }
    };
    fetchDoctorData();
  }, []);

  // appointments and stats useEffect
  useEffect(() => {
    const getAppointments = async () => {
      try {
        const data = await fetchAppointmentsForDoctor(name);
        console.log(data);
        
        let appointmentsData = [];
        
        if (!data) {
          setAppointments([]);
          setDiseaseStats({}); // clear stats
          setChartData([]); // clear chart data
          return;
        }
        
        if (Array.isArray(data)) {
          appointmentsData = data;
        } else if (data.appointments) {
          appointmentsData = data.appointments;
        } else {
          appointmentsData = [];
        }
        
        setAppointments(appointmentsData);
        
        // Generate disease stats
        if (appointmentsData.length > 0) {
          const stats = generateDiseaseStats(appointmentsData);
          setDiseaseStats(stats);
          
          // Generate chart data INSIDE the component function
          const flatChartData = [];
          Object.entries(stats).forEach(([disease, info]) => {
            info.patients.forEach((patient) => {
              flatChartData.push({
                name: patient.name,
                age: patient.age,
                disease,
              });
            });
          });
          
          setChartData(flatChartData);
        } else {
          setDiseaseStats({});
          setChartData([]);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error.message);
        setAppointments([]);
        setDiseaseStats({});
        setChartData([]);
      }
    };
    
    if (name) {
      getAppointments();
    }
  }, [name]);

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
                <th className="py-2 px-4 border">Token</th>
                <th className="py-2 px-4 border">Action</th>
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
                  <td className="py-2 px-4 border">{apt.token}</td>
                  <td className="py-2 px-4 border">
                    <a
                      href={`http://localhost:5173/room/${apt.token}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                    >
                      Join Call
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Bar Chart */}
      {chartData.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Patient Age Chart by Disease</h2>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-300">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: "Age", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="age" fill="#8884d8" name="Patient Age" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {Object.keys(diseaseStats).length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Disease Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(diseaseStats).map(([disease, info]) => (
              <div
                key={disease}
                className="p-6 rounded-lg shadow-md bg-white border border-gray-300"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  {disease} <span className="text-sm text-gray-600">({info.count} patients)</span>
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  {info.patients.map((patient, idx) => (
                    <li key={idx}>
                      <span className="font-medium">{patient.name}</span> — Age: {patient.age}, Location: {patient.location}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
