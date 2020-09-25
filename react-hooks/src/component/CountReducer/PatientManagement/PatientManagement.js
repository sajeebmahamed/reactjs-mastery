import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../../../reducer/patientReducer';

const PatientManagement = () => {
    const nameRef = useRef()
    const [state, dispatch] = useReducer(patientReducer, patientState)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patient.length
        })
        nameRef.current.value = ''
    }
    return (
        <div>
            <h2> Patient Management {state.patient.length} </h2>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef}/>
            </form>
        </div>
    );
};

export default PatientManagement;