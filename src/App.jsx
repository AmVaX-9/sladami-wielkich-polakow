// 1. Zmień import na HashRouter
import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css';

const tasksData = {
    "wp-01-kj92xLp4vM7nQrt8Z5": {
        name: "Wincenty Pol",
        img: "1pol.JPG",
        prompt: "Jedna rzecz, którą mogę zrobić już dziś, zamiast odkładać ją na później." // [cite: 63]
    },
    "kj-02-bH6mN3k8fV2pL9xZ1w": {
        name: "Królowa Jadwiga",
        img: "2jadwiga.JPG",
        prompt: "Jaką jedną umiejętność zdobytą w szkole uważasz za najważniejszą w przyszłej pracy?" // [cite: 74]
    },
    "hl-03-zP9vR4mL7k2xQ8nB5j": {
        name: "Hieronim Łopaciński",
        img: "3lopacinski.JPG",
        prompt: "Co zrobiłeś/zrobiłaś w 5 minut, zamiast odkładać to na potem? (Prześlij dowód)" // [cite: 94]
    },
    // Uwaga: Plik dla Wojewody nie widnieje na liście assets, użyjemy placeholder'a lub dodaj plik "wojewoda.JPG"
    "wl-04-mK7xL2pQ9vR4nB8j3w": {
        name: "Wojewoda Lubelski",
        img: "4prus.JPG", // Przypisane do 4prus.JPG wg Twojej listy, sprawdź czy to celowe
        prompt: "Wyślij nazwę najbliższego terminu oraz ile dni zostało do jego realizacji." // [cite: 110-111]
    },
    "bp-05-vR4nB8j3wM7xL2pQ9k": {
        name: "Bolesław Prus",
        img: "4prus.JPG",
        prompt: "Nagraj taneczny trend z TikToka z #nieprzespijjutra i oznaczeniem @nie.przespij.jutra" // [cite: 123-124]
    },
    "msc-06-bH6mN3k8fV2pL9xZ1x": {
        name: "Maria Skłodowska-Curie",
        img: "5sklodowska.JPG",
        prompt: "Wyślij zdjęcie swojego szkicu z podpisem: 'Moje marzenie w obrazie'." // [cite: 137]
    },
    "jc-07-zP9vR4mL7k2xQ8nB5v": {
        name: "Józef Czechowicz",
        img: "6czechowicz.JPG",
        prompt: "Prześlij zdjęcie lub opis z podpisem: 'Mój mały gest dla społeczności'." // [cite: 150]
    },
    "jh-08-mK7xL2pQ9vR4nB8j3y": {
        name: "Julia Hartwig",
        img: "7hartwig.JPG",
        prompt: "Wymyśl zadanie na jutro, które przybliży Cię do celu. Wyślij: 'Mój plan na jutro: ...'" // [cite: 164]
    },
    "ss-09-vR4nB8j3wM7xL2pQ9z": {
        name: "Stanisław Staszic",
        img: "8staszic.JPG",
        prompt: "Wyślij: 'Stanowisko: ... | Umiejętność do rozwoju: ...' z portalu Pracuj.pl" // [cite: 181]
    },
    "ijp-10-bH6mN3k8fV2pL9xZ1q": {
        name: "Ignacy Jan Paderewski",
        img: "9paderewski.JPG",
        prompt: "Napisz o jednej szansie na rozwój (stypendium, kurs), z której chcesz skorzystać." // [cite: 196]
    }
};

function TaskPage() {
    const { slug } = useParams();
    const task = tasksData[slug];
    if (!task) return <div className="container"><h1>Nie znaleziono zadania!</h1><a href="#/">Wróć do mapy</a></div>;

    return (
        <div className="container">
            {/* 2. Usuwamy /src/ z początku ścieżki, jeśli przeniosłeś folder assets do public */}
            <img src={`assets/${task.img}`} alt={task.name} className="task-image" />
            <div className="task-card">
                <p>{task.prompt}</p>
                <a href="https://www.instagram.com/nie.przespij.jutra/" className="btn-insta">WYŚLIJ NA INSTAGRAM</a>
            </div>
            <a href="#/" className="btn-back">Wstecz do mapy</a>
        </div>
    );
}

function Home() {
    return (
        <div className="container">
            <h1>Śladami Wielkich Polaków</h1>
            {/* 3. Poprawiona ścieżka do mapy */}
            <img src="assets/mapa-lublin.jpg" alt="Mapa gry" className="map-image" />
            <div className="info-card">
                <a href="REGULAMIN.pdf" target="_blank" className="btn-reg">REGULAMIN GRY</a>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Usunięcie /zadanie/ sprawi, że linki będą krótsze */}
                <Route path="/:slug" element={<TaskPage />} />
            </Routes>
        </Router>
    );
}