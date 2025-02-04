import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Proposal from "./components/Proposal";
import styled from "styled-components";

function SuccessPage() {
    return (
        <Flexbox>
            <MainText>Ура! Я знал что ты хочеешь! 💖</MainText>
            <Gif
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2Y1ZjFkODQ5OWQ1ZGRmMjQ5ZDY2OTdhMmI3NDg5MGY3NzQ2NjZjYSZjdD1n/mGcNjsfWAjY5AEZNw6/giphy.gif"
                alt="Happy Gif"
                className="rounded-lg shadow-lg"
            />
        </Flexbox>
    );
}


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Proposal/>}/>
                <Route path="/success" element={<SuccessPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;

const Gif = styled.img`
    margin: 20px;
    margin-right: 40px;
    width: -webkit-fill-available;
`
const MainText = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

const Flexbox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    margin-top: 80px;
`;