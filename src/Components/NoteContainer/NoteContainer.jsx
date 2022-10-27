import React from 'react'
import Note from '../Note/Note'
import './NoteContainer.css'
// import kaamharuIcon from '../../assets/kaamharulogo.png'

export default function NoteContainer(props) {


    //Reversing array so the newly added arrays will be shown at top/first
    const reverArray = (arr) => {
        const array = []
        for (let i = arr.length - 1; i >= 0; --i) {
            array.push(arr[i]);
        }
        return array
    }

    const notes = reverArray(props.notes)
    return (
        <div className='note-container'>
            {/* <img src={kaamharuIcon} alt="logo" /> */}
            <h2>To Dos</h2>
            <div className="note-container-notes custom-scroll">
                {
                    notes?.length > 0 ? notes.map((item, index) =>

                    (<Note key={item.id} note={item} deleteNote={props.deleteNote}
                        updateText={props.updateText} />)) : <h3> No Todos left<br></br>Click on the plus icon to add a new task.</h3>}




            </div>
        </div>
    )
}
