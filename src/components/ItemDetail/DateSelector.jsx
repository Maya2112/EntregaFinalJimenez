import { useContext, useState} from 'react';
import Boton from '../CartWidget/Boton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateContext } from '../../context/DateContext';


const DateSelector = () => {

    const [date, setDate] = useState(null)
    const { isFull, addDate } = useContext(DateContext);

    const handleDate = (date) => {
        setDate(date)
    }
    const handleAgregarDate = () => {
        isFull(date)
        addDate(date)
    }

    return (
            <div className ="flex-col">
                <label>Seleccionar Fecha:</label>
                <DatePicker
                    selected={date}
                    onChange={handleDate}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Selecciona una fecha"
                />
                <Boton onClick={handleAgregarDate}>Agregar fecha</Boton>
            </div>
    );
};

export default DateSelector;