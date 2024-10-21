import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { IoAddCircleOutline, IoTrashOutline, IoCreateOutline } from "react-icons/io5"; // Import delete and edit icons
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import AddStudent from './add'; 

function DashboardPage() {
    const navigate = useNavigate(); // Initialize navigate for redirection

    const columns = [
        {
            name: 'S.No',
            selector: row => row.sno,
            cell: row => <span className="font-semibold text-blue-600">{row.sno}</span>,
        },
        {
            name: 'RegNo',
            selector: row => row.regno,
            cell: row => <span className="font-semibold text-blue-600">{row.regno}</span>,
        },
        {
            name: 'Name',
            selector: row => row.name,
            cell: row => <span className="font-semibold text-blue-600">{row.name}</span>,
        },
        {
            name: "Email",
            selector: row => row.email, 
            cell: row => <span className="font-medium text-gray-800">{row.email}</span>,
        },
        {
            name: "Mark",
            selector: row => row.mark, 
            cell: row => <span className="font-medium text-gray-800">{row.mark}</span>,
        },
        {
            name: "Rank",
            selector: row => row.rank, 
            cell: row => <span className="font-medium text-gray-800">{row.rank}</span>,
        },
        {
            name: "Actions",
            cell: row => (
                <div>
                    <Button onClick={() => handleEditStudent(row)}><IoCreateOutline /></Button>
                    <Button onClick={() => handleDeleteStudent(row.sno)}><IoTrashOutline /></Button>
                </div>
            ),
        },
    ];

    const initialData = [
        // Your initial data...
    ];

    const [records, setRecords] = useState(initialData);
    const [showAddStudent, setShowAddStudent] = useState(false);
    const [editStudent, setEditStudent] = useState(null);

    const handleAddStudent = (newStudent) => {
        setRecords([...records, newStudent]);
        setShowAddStudent(false);
    };

    const handleEditStudent = (student) => {
        setEditStudent(student);
        setShowAddStudent(true);
    };

    const handleDeleteStudent = (sno) => {
        const updatedRecords = records.filter(record => record.sno !== sno);
        setRecords(updatedRecords);
    };

    const handleLogout = () => {
        navigate('/login'); // Redirect to login page on logout
    };

    return (
        <div className="abcd">
            {/* Styled Logout button at the top left corner */}
            <div className="flex justify-start p-4">
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleLogout} 
                    className="ml-4 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300"
                >
                    Logout
                </Button>
            </div>
            
            <div className="cda mt-5 p-4 bg-white shadow-md rounded-lg mr-50">
                <DataTable
                    columns={columns}
                    data={records}
                    fixedHeader
                    pagination
                    highlightOnHover
                    pointerOnHover
                    className="5px border border-black-800 rounded-lg"
                />
                {showAddStudent && 
                    <AddStudent 
                        onAdd={handleAddStudent} 
                        onClose={() => {
                            setShowAddStudent(false);
                            setEditStudent(null);
                        }} 
                        student={editStudent} // Pass the student to edit if editing
                    />
                }
                <div className="text-end mb-4">
                    <Button variant="contained" onClick={() => setShowAddStudent(true)} className="flex items-center bg-blue-500 hover:bg-blue-600 text-white">
                        <IoAddCircleOutline className="mr-2" /> Add Student Info
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
