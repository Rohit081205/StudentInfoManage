import React, { useEffect, useState } from "react";

function AddStudent({ onAdd, onClose, studentData }) {
    const [sno, setSno] = useState('');
    const [regno, setRegno] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mark, setMark] = useState('');
    const [rank, setRank] = useState('');

    // Use useEffect to populate fields if studentData is provided
    useEffect(() => {
        if (studentData) {
            setSno(studentData.sno);
            setRegno(studentData.regno);
            setName(studentData.name);
            setEmail(studentData.email);
            setMark(studentData.mark);
            setRank(studentData.rank);
        } else {
            // Reset fields if no studentData is provided
            setSno('');
            setRegno('');
            setName('');
            setEmail('');
            setMark('');
            setRank('');
        }
    }, [studentData]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const markValue = parseFloat(mark);

        if (name && email) {
            onAdd({
                id: studentData ? studentData.id : Date.now(), // Use existing ID for updates
                sno,
                regno,
                name,
                email,
                mark: isNaN(markValue) ? 0 : markValue,
                rank,
            });

            // Reset form fields after submission
            setSno('');
            setRegno('');
            setName('');
            setEmail('');
            setMark('');
            setRank('');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-green-800 bg-opacity-50 mb-4 pl-30">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4 mx-4 mt-4 ">
                    {studentData ? 'Edit' : 'Add'} Student Info
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium mx-2 align-items-center">S.No: </label>
                        <input
                            type="text"
                            value={sno}
                            onChange={(e) => setSno(e.target.value)}
                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium mx-2">Reg.No: </label>
                        <input
                            type="text"
                            value={regno}
                            onChange={(e) => setRegno(e.target.value)}
                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium mx-2">Name: </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium mx-2">Email: </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium mx-2">Mark: </label>
                        <input
                            type="number"
                            value={mark}
                            onChange={(e) => setMark(e.target.value)}
                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium mx-2">Rank:</label>
                        <input
                            type="text"
                            value={rank}
                            onChange={(e) => setRank(e.target.value)}
                            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 transition mx-2 my-2"
                        >
                            {studentData ? 'Update' : 'Add'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddStudent;
