import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addStatus} from "../store/reducers/statusReducer";

const StatusBlock = () => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.data);
    const status = useSelector(state => state.status);

    const [caption, setCaption] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        dispatch(addStatus(data));
        setCaption(status.caption);
        setDescription(status.description);

    }, [data]);
    return (
        <section className={
            "dushnila-mood " +
            (!status.isNormCO2 || !status.isNormTemp
                ? "background-red"
                : "background-green")
        }>
            <h2 className="dushnila-mood-title">{caption}</h2>
            <p className="dushnila-mood-description">{description}</p>
        </section>
    );
};

export default StatusBlock;