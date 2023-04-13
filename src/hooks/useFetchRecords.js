import React from 'react';
import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { RecordsDataContext } from "../providers/recordsDataProvider";
import RecordsDataContextProvider from "../providers/recordsDataProvider";

const useFetchRecords = (isManual = false) => {
  const recordsCtx = useContext(RecordsDataContext);
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (!isManual) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await axios.get('records/')
      recordsCtx.setRecords(data);
      setLoading(false);
    } catch (e) {
      alert("error")
    }
  }

  return { data: recordsCtx.records, loading, error, fetchData };
};

export default useFetchRecords;
