// src/components/StudentManagement.js

import React, { useState } from "react";
import AddStudent from "../add"; // Adjust the import path as necessary

function StudentManagement() {
    const [students, setStudents] = useState([]);
    const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);

    const handleAddOrUpdateStudent = (student) => {
        if (editingStudent) {
            // Update existing student
            setStudents((prevStudents) =>
                prevStudents.map((s) => (s.id === student.id ? student : s))
            );
        } else {
            // Add new student
            setStudents((prevStudents) => [...prevStudents, student]);
        }
        setIsAddStudentOpen(false); // Close the modal after adding/updating
        setEditingStudent(null); // Reset the editing student
    };

    const handleEdit = (student) => {
        setEditingStudent(student); // Set the student to be edited
        setIsAddStudentOpen(true); // Open the modal
    };

    return (
        <div>
            <button onClick={() => { setIsAddStudentOpen(true); setEditingStudent(null); }}>Add Student</button>
            {isAddStudentOpen && (
                <AddStudent
                    onAddOrUpdate={handleAddOrUpdateStudent} // Ensure this function is passed correctly
                    onClose={() => {
                        setIsAddStudentOpen(false);
                        setEditingStudent(null); // Reset editing student when closing
                    }}
                    student={editingStudent} // Pass the student to be edited
                />
            )}
            {/* Render the list of students */}
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.name} 
                        <button onClick={() => handleEdit(student)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentManagement;
