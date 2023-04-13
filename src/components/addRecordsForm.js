import React from 'react';
import useAddRecords from "../hooks/useAddRecords";

const AddRecordForm = () => {
    const {addRecord, data, loading, error} = useAddRecords();

    const addRecordHandler = () => {
        addRecord({
            name: "fios2",
            surname: "wild",
            phone: "+380730000000"
        });
    }

    return (<>
        <button className="btn" onClick={addRecordHandler}>Add record</button>
    </>)
}

export default AddRecordForm;