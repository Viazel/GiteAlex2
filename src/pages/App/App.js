import './App.css';
import Calendar from "../../components/Calendar/Calendar";

export default function App() {
    return (
        <section className="App">
            <Calendar yearAndMonth="2022-01-01"/>
            <Calendar yearAndMonth="2022-02-01"/>
            <Calendar yearAndMonth="2022-03-01"/>
            <Calendar yearAndMonth="2022-04-01"/>
            <Calendar yearAndMonth="2022-05-01"/>
            <Calendar yearAndMonth="2022-06-01"/>
            <Calendar yearAndMonth="2022-07-01"/>
            <Calendar yearAndMonth="2022-08-01"/>
            <Calendar yearAndMonth="2022-09-01"/>
            <Calendar yearAndMonth="2022-10-01"/>
            <Calendar yearAndMonth="2022-11-01"/>
            <Calendar yearAndMonth="2022-12-01"/>
        </section>
    )
}