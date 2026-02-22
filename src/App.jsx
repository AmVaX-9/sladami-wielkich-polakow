import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css';

const tasksData = {
    "wp-01-kj92xLp4vM7nQrt8Z5": {
        name: "Wincenty Pol",
        images: ["1a1pol.jpg", "1a2pol.jpg"],
        prompt: "Jedna rzecz, którą mogę zrobić już dziś, zamiast odkładać ją na później."
    },
    "kj-02-bH6mN3k8fV2pL9xZ1w": {
        name: "Królowa Jadwiga",
        images: ["2a1jadwiga.jpg", "2a2jadwiga.jpg"],
        prompt: "Jaką jedną umiejętność zdobytą w szkole uważasz za najważniejszą w przyszłej pracy?"
    },
    "hl-03-zP9vR4mL7k2xQ8nB5j": {
        name: "Hieronim Łopaciński",
        images: ["3a1lopacinski.jpg", "3a2lopacinski.jpg"],
        prompt: "Co zrobiłeś/zrobiłaś w 5 minut, zamiast odkładać to na potem? (Prześlij dowód)"
    },
    "wl-04-mK7xL2pQ9vR4nB8j3w": {
        name: "Wojewoda Lubelski",
        img: "4a1wojewoda.jpg",
        prompt: "Wyślij nazwę najbliższego terminu oraz ile dni zostało do jego realizacji."
    },
    "bp-05-vR4nB8j3wM7xL2pQ9k": {
        name: "Bolesław Prus",
        images: ["5a1prus.jpg", "5a2prus.jpg"],
        prompt: "Nagraj taneczny trend z TikToka z #nieprzespijjutra i oznaczeniem @nie.przespij.jutra"
    },
    "msc-06-bH6mN3k8fV2pL9xZ1x": {
        name: "Maria Skłodowska-Curie",
        images: ["6a1sklodowka.jpg", "6a2sklodowka.jpg"],
        prompt: "Wyślij zdjęcie swojego szkicu z podpisem: 'Moje marzenie w obrazie'."
    },
    "jc-07-zP9vR4mL7k2xQ8nB5v": {
        name: "Józef Czechowicz",
        images: ["7a1czechowicz.jpg", "7a2czechowicz.jpg"],
        prompt: "Prześlij zdjęcie lub opis z podpisem: 'Mój mały gest dla społeczności'."
    },
    "jh-08-mK7xL2pQ9vR4nB8j3y": {
        name: "Julia Hartwig",
        images: ["8a1hartwig.jpg", "8a2hartwig.jpg"],
        prompt: "Wymyśl zadanie na jutro, które przybliży Cię do celu. Wyślij: 'Mój plan na jutro: ...'"
    },
    "ss-09-vR4nB8j3wM7xL2pQ9z": {
        name: "Stanisław Staszic",
        images: ["9a1staszic.jpg", "9a2staszic.jpg"],
        prompt: "Wyślij: 'Stanowisko: ... | Umiejętność do rozwoju: ...' z portalu Pracuj.pl"
    },
    "ijp-10-bH6mN3k8fV2pL9xZ1q": {
        name: "Ignacy Jan Paderewski",
        images: ["10a1paderewski.jpg", "10a2paderewski.jpg"],
        prompt: "Napisz o jednej szansie na rozwój (stypendium, kurs), z której chcesz skorzystać."
    }
};

function TaskPage() {
    const { slug } = useParams();
    const task = tasksData[slug];
    if (!task) return <div className="container"><h1>Nie znaleziono zadania!</h1><a href="#/">Wróć do mapy</a></div>;

    return (
        <div className="container">
            <h2>{task.name}</h2>

            {task.images && task.images.map((imageFile, index) => (
                <img
                    key={index}
                    src={`assets/${imageFile}`}
                    alt={`${task.name} - część ${index + 1}`}
                    className="task-image"
                />
            ))}

            {task.img && (
                <img src={`assets/${task.img}`} alt={task.name} className="task-image" />
            )}

            <div className="task-card">
                <p>{task.prompt}</p>
                <a href="https://www.instagram.com/nie.przespij.jutra/" target="_blank" rel="noopener noreferrer" className="btn-insta">WYŚLIJ NA INSTAGRAM</a>
            </div>
            <a href="#/" className="btn-back">Wstecz do mapy</a>
        </div>
    );
}

function Home() {
    return (
        <div className="container">

            <header>
                <h1>Śladami Wielkich Polaków</h1>

                <div className="date-container">
                    <img src="assets/LoGoS.png" alt="Logo twórców" className="creator-logo-small" />
                    <p className="subtitle">02.03 - 27.03.2026 | Lublin</p>
                </div>

            </header>

            <div className="interactive-map-container">
                <iframe
                    src="https://www.google.com/maps/d/embed?mid=1eJGEGYWipj_PNBLzcO6b9FqDX1_2CBo&ehbc=2E312F"
                    className="interactive-map"
                    title="Mapa punktów gry terenowej"
                    loading="lazy"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="info-card">
                <p>Znajdź punkty na mapie i zeskanuj kody QR!</p>
                <p className="prize-text">Nagrody do 200 PLN czekają!</p>
                <a href="REGULAMIN.pdf" target="_blank" className="btn-reg">REGULAMIN GRY</a>
                <p className="terms-text">Biorąc udział w grze akceptujesz regulamin!</p>
            </div>

            <section className="about-section">
                <h3>O PROJEKCIE</h3>
                <p>
                    Gra terenowa <strong>„Śladami Wielkich Polaków”</strong> to inicjatywa edukacyjno-społeczna realizowana na terenie Lublina, której celem jest wzmacnianie odporności społecznej poprzez przypominanie dorobku Wielkich Polaków. Wierzymy, że rezyliencji nie buduje się samą teorią. Buduje się ją poprzez kontakt z prawdziwymi historiami ludzi, którzy mimo trudności potrafili działać, podejmować decyzje i zmieniać rzeczywistość wokół siebie.
                </p>
                <p>
                    Gra łączy ruch w przestrzeni miejskiej z refleksją nad historią i odpowiedzialnością za własny rozwój. W 10 lokalizacjach na terenie Lublina umieszczone zostały plakaty z kodami QR. Po ich zeskanowaniu uczestnicy poznają krótką historię wybitnej postaci związanej z Lubelszczyzną oraz otrzymają zadanie konkursowe. Każda z tych historii pokazuje, że odporność psychiczna, systematyczność i gotowość do działania były realnym fundamentem sukcesu.
                </p>
                <p>
                    Poprzez upamiętnianie dorobku tych postaci chcemy pokazać, że odporność społeczna nie jest chwilowym trendem, ale wartością, która od pokoleń pozwalała budować kulturę, naukę, instytucje i wspólnotę. Rezyliencja to umiejętność podnoszenia się po porażkach, konsekwencja w dążeniu do celu i odpowiedzialność za innych.
                </p>
                <p>
                    Zadania w grze odnoszą się do konkretnych postaw: wytrwałości mimo przeciwności, odwagi w podejmowaniu decyzji, pracy nad sobą czy działania na rzecz wspólnoty. Dzięki temu uczestnicy nie tylko poznają historię, ale mogą zastanowić się, jak te wartości wykorzystać w swoim życiu – w szkole, w relacjach i w przyszłej pracy.
                </p>
                <p>
                    Projekt ma na celu wzmacnianie rezyliencji poprzez kontakt z inspirującymi biografiami, pielęgnowanie pamięci o Wielkich Polakach jako elemencie naszej tożsamości oraz budowanie poczucia sprawczości i odpowiedzialności społecznej. To także okazja do integracji lokalnej społeczności wokół wspólnych wartości.
                </p>

                <div className="quote-box">
                    „Gra jest symboliczną drogą – od historii do teraźniejszości, od pamięci do działania. Pokazuje, że odporność społeczna zaczyna się od małych kroków: od podjęcia wyzwania, od wyjścia z domu, od zeskanowania pierwszego kodu, od wykonania pierwszego zadania.”
                </div>

                <p>
                    To nie tylko forma zabawy, ale doświadczenie, które ma inspirować do świadomego działania. Bo historia nie jest zamkniętym rozdziałem. Jest punktem odniesienia i źródłem siły, z którego możemy czerpać każdego dnia.
                </p>
            </section>

            <footer>
                <p>Projekt realizowany przez <strong>„Nie prześpij jutra”</strong></p>
                <p>w ramach Ogólnopolskiej Olimpiady „Zwolnieni z Teorii”</p>
            </footer>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:slug" element={<TaskPage />} />
            </Routes>
        </Router>
    );
}