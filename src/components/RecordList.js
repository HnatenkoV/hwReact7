import React from 'react';
import PhoneCard from "./phoneCard";



const RecordList = (props) => {
    return (
        <div>
            {props.recordList?.data &&
                props.recordList.data.map((record, index) => (
                    <PhoneCard key={`phone-card-${index}`} index={index} record={record}></PhoneCard>
                ))}
        </div>
    );
};

export default RecordList;