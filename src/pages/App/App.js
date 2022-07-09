import './App.css';
import Calendar from "../../components/Calendar/Calendar";

export default function App() {
    return (
        <section className="App">
            <Calendar yearAndMonth="2022-01-01"/>
            <Calendar yearAndMonth="2022-02-01"/>
            <Calendar yearAndMonth="2022-03-01"/>
        </section>
    )
}