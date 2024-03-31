// pages/mealplan.js
import { useState } from 'react';

const MealPlan = () => {
    const [notes, setNotes] = useState([]);
    const [noteInput, setNoteInput] = useState('');

    const handleAddNote = () => {
        if (!noteInput.trim()) return;
        setNotes([...notes, noteInput.trim()]);
        setNoteInput('');
    };

    const handleDeleteNote = (index) => {
        const newNotes = notes.filter((_, noteIndex) => noteIndex !== index);
        setNotes(newNotes);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Meal Plan Notes</h1>
            <div className="mb-4">
                <input
                    type="text"
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    placeholder="Add a new note..."
                    className="mr-2 p-2 border border-gray-300 rounded"
                />
                <button onClick={handleAddNote} className="p-2 bg-blue-500 text-white rounded">Add Note</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {notes.map((note, index) => (
                    <div key={index} className="p-4 bg-yellow-200 rounded shadow">
                        <p>{note}</p>
                        <button
                            onClick={() => handleDeleteNote(index)}
                            className="mt-2 p-1 bg-red-500 text-white rounded"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealPlan;
