import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const DateContext = createContext()

export const DateProvider = ({ children }) => {
    const [dates, setDates] = useState([])


    const addDate = (date) => {
            setDates([...dates, date]);
    }

    const isFull = (date) => {
        return dates.forEach(dates =>{
            if (dates===date){
                let counter = counter +1
            }
            if (counter >= 3){
                Swal.fire('Esta fecha no tiene mas espacios libres', 'Escoge otra fecha por favor', 'info')
            }
        })
    }

    const ShowDates = () => {
        return dates.map((date, item) => (
            <p key={item.id}>
                {date.toDateString()}
            </p>
        ));
    }

    return (
        <DateContext.Provider value={{
            dates,
            isFull,
            addDate,
            ShowDates
        }}>
            {children}
        </DateContext.Provider>
    )
}
