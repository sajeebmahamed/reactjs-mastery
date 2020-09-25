export const patientState = {
    patient: []
}
export const patientReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name
            }
            // const allPatient = [...state.patient, newPatient]
            return { patient: [...state.patient, newPatient] }
        case 'REMOVE_PATIENT':
            const remainingPatient = state.patient.filter(pt => pt.id !== action.id)
            const newState = { patient: remainingPatient}
            return newState
        default:
            return state
    }
}