import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button} from "./ui/Button";
import styled from "styled-components";

export default function Proposal() {
    const navigate = useNavigate(); // Для перенаправления
    const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });

    const moveNoButton = () => {
        const x = Math.random() * window.innerWidth * 0.8;
        const y = Math.random() * window.innerHeight * 0.8;
        setNoPosition({ top: `${y}px`, left: `${x}px` });
    };

    return (
        <Flexbox>
            <MainText>Пойдем со мной в лагманную балапан? 💖</MainText>
            <Flex>
                <Button onClick={() => navigate("/success")} >
                    Да ✅
                </Button>
                <StyledButton
                    style={ {position: "absolute", ...noPosition} }
                    onMouseEnter={moveNoButton}
                    onClick={moveNoButton}
                >
                    Нет ❌
                </StyledButton>
            </Flex>
        </Flexbox>
    );
}

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

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
`;
const StyledButton = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px; /* Adjust padding as needed */
    border-radius: 8px; /* Rounded corners */
    border: none;
    background-color: #4CAF50; /* Default green background */
    color: white;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #45a049; /* Darker green when hovering */
    }

    /* Add additional styles or modify them as needed */
`