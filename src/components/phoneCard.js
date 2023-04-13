import React, {useState} from 'react';
import useUpdateRecords from "../hooks/useUpdateRecords";
import DeleteRecord from "./deleteRecord";

const PhoneCard = ({record, index}) => {
    const { updateRecord, } = useUpdateRecords()
    const [items, setItems] = useState({});
    const [updateValue, setUpdateValue] = useState(false);


    const updHandler = (id, items) => {
        updateRecord(id, items)
    }

    // const changeVal = (e) => {
    //     record[e.currentTarget.id] = e.target.value;
    //     setItems({ ...items });
    // }


    return <div className="p-card">
        {items && (
        <div>
                {updateValue ? (
                    <>
                        <div>
                            <input className="inp" type='text' id={`name-${index}`} placeholder={"name"}
                                   defaultValue={record.name} onChange={(e) => setItems({...items, name: e.target.value})}/>
                            <input className="inp" type='text' id={`phone-${index}`} placeholder={"phone"}
                                   defaultValue={record.phone} onChange={(e) => setItems({...items, phone: e.target.value})}/>
                        </div>
                        <button className="btn" onClick={() => updHandler(index, items)}> save</button>
                    </>
                ) : (
                    <>
                        <h2>{record.name}</h2>
                        <h2>{record.phone}</h2>

                    </>
                )}
                <button className="btn" onClick={(e) => setUpdateValue(!updateValue)}>Edit</button>
                 <DeleteRecord index={index}/>
            </div>

        )}
    </div>

};





export default PhoneCard;



