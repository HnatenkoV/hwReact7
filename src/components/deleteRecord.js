import React from 'react';
import useDeleteRecords from "../hooks/useDeleteRecords";

const DeleteRecord = ({index}) => {
    const {delRecord, data, loading, error} = useDeleteRecords()

    const deleteHandler = (index) => {
        delRecord(index);
    };
    return (
        <>
            <button className="btn" onClick={() => deleteHandler(index)}>Delete</button>
        </>
    );
};

export default DeleteRecord;