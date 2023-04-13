import React from 'react';
import { useState } from "react";
import axios from 'axios';
import useFetchRecords from "./useFetchRecords";

const useUpdateRecords = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);


    const updateRecord = (id, items) => {
        setLoading(true);
        axios.put(`records/${id}`, items).then((resp) => {
            setData(resp);
            setLoading(false);
        }) ;
    }

    return { updateRecord, data, loading, error };
};

export default useUpdateRecords;
