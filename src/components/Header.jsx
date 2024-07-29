import React, { useContext } from 'react'
import { MdAdd } from "react-icons/md";
import { noteContext } from '../Store/store';
export const Header = () => {
    const {setLayout} = useContext(noteContext);
    const handelAddClick =() => {
        setLayout(false);
    }
    return (
        <div className="header h-16 bg-blue-500">
            <div className="container flex items-center justify-between h-16">
                <h1 className="text-white font-mono">My Notes</h1>
                <div className="addNote flex items-center bg-white px-2 py-1 rounded-md cursor-pointer"onClick={handelAddClick}>
                    <MdAdd />
                    <h3 className="text-black font-sans text-lg">add note</h3>
                </div>
            </div>
        </div>
    )
}
