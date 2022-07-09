import {useEffect, useState} from "react";
import './Calendar.css'
import {v4 as uuidv4} from 'uuid';

function numberInMonth(number){
    switch (number) {
        case 0:
            return "Janvier";
        case 1:
            return "Février";
        case 2:
            return "Mars";
        case 3:
            return "Avril";
        case 4:
            return "Mai";
        case 5:
            return "Juin";
        case 6:
            return "Juillet";
        case 7:
            return "Aout";
        case 8:
            return "Septembre";
        case 9:
            return "Octobre";
        case 10:
            return "Novembre";
        case 11:
            return "Décembre";
    }
}

function daysWithNumberMonth(number){
    switch (number){
        case 0:
            return 31;
        case 1:
            return 28;
        case 2:
            return 31;
        case 3:
            return 30;
        case 4:
            return 31;
        case 5:
            return 30;
        case 6:
            return 31;
        case 7:
            return 31;
        case 8:
            return 30;
        case 9:
            return 31;
        case 10:
            return 30;
        case 11:
            return 31;
    }
}

export default function Calendar(opt) {

    const [time, SetTime] = useState([]);

    const [buttons, SetButtons] = useState([]);

    useEffect(() => {

        let newArr = [...time];

        newArr[0] = "Lundi";
        newArr[1] = "Mardi";
        newArr[2] = "Mercredi";
        newArr[3] = "Jeudi";
        newArr[4] = "Vendredi";
        newArr[5] = "Samedi";
        newArr[6] = "Dimanche";

        let j = 1;

        for (let i = 1;j<=daysWithNumberMonth(new Date(opt.yearAndMonth).getMonth());i++) {
            if(new Date(opt.yearAndMonth).getDay() > i){
                newArr = [...newArr, 99];
            }else {
                if(new Date(opt.yearAndMonth).getDay() === 0 && i === 1){
                    for (let j = 0;j<=5;j++){
                        newArr = [...newArr, 99];
                    }
                }
                newArr = [...newArr, j];
                j++;
            }
        }

        let buttonsa = [...buttons];

        newArr.forEach(index => {

            if(isNaN(index)){
                const uuid = uuidv4();
                buttonsa = [...buttonsa, <button id={uuid} key={uuid} disabled>{index}</button>];
            }else if(index === 99){
                const uuid = uuidv4();
                buttonsa = [...buttonsa, <button key={uuid} id={uuid} disabled></button>]
            }else {
                const uuid = uuidv4();
                buttonsa = [...buttonsa, <button key={uuid} id={uuid} onClick={e => cliqued(e)}>{index}</button>]
            }
        })

        const cliqued = e => {

            let result = undefined;

            buttonsa.map(index => {
                const id = index.props.id;
                if(id === e.target.id){
                    result = index;
                }
            })

            if(result === undefined) return;

            let newArr = [];

            buttonsa.map(index => {
                if(index !== result){
                    newArr = [...newArr, index];
                }else {
                    console.log(result);
                    newArr = [...newArr, <button key={result.key} style={{background: "blue"}} id={result.key} onClick={e => cliqued(e)}>{index.props.value}</button>];
                }
            })

            buttonsa = newArr;

            SetButtons(newArr);

        }

        SetButtons(buttonsa);
        SetTime(newArr);

    }, [])

    return (
        <section className="Calendar">
            <h1 className="title">{numberInMonth(new Date(opt.yearAndMonth).getMonth())}</h1>
            <div className="days">
                {
                    buttons.map(index => {
                        return index;
                    })
                }
            </div>
        </section>
    )
}