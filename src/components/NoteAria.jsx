import React, { useContext, useRef } from 'react'
import { noteContext } from '../Store/store';

export const NoteAria = () => {

    const noteElem = useRef();

    const {notes, setLayout, addNote} = useContext(noteContext)

    const handelOnAddButton=()=> {
        function getCurrentDateString() {
            return new Date().toISOString().split('T')[0];
        }
        const newDate = getCurrentDateString();
        const noteText = noteElem.current.value;
        const id = notes.length+1;
        if(noteText)
        addNote(id, noteText, newDate);
        setLayout(true);
    }
    return (
        <div className='container'>
            <div className='mt-10'>
                <textarea ref={noteElem} id="feedback" name="feedback" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="Add your note here..."></textarea>
                <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handelOnAddButton}>Add note</button>
            </div>
        </div>
    )
}
