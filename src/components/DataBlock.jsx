import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addDataAction} from "../store/reducers/dataReducer";
import {fetchData} from "../asyncActions/data";
import {addStatus} from "../store/reducers/statusReducer";

const DataBlock = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const status = useSelector(state => state.status)

    // Функция, которая будет выполнена каждую минуту
    const downloadData = () => {
        dispatch(fetchData())
    };

    useEffect(() => {
        downloadData();
        // Установка интервала на 1 минуту (в миллисекундах)
        const intervalId = setInterval(downloadData, 5000);

        // Очистка интервала при размонтировании компонента
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div
            className={
            "dushnila-data " +
                (!status.isNormCO2 || !status.isNormTemp
                    ? "background-linear-red"
                    : "background-linear-green")
            }>
            <section className="temperature">
                <p className="temperature-description">{data.temp} ℃</p>
                <h2 className="temperature-caption">Температура</h2>
            </section>
            <section className="сarbon">
                <p className="carbon-description">{data.co2} ppm</p>
                <h2 className="carbon-caption">CO2</h2>
            </section>
        </div>
    );
};

export default DataBlock;