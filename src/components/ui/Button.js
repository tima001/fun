import styled from "styled-components";
import bgImg from '../../img/heart.png'; // Путь к изображению

export function Button({ children, className, ...props }) {
    return (
        <StyledButton className={className} {...props}>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    position: relative;

    /* Множество фонов */
    background: linear-gradient(45deg, rgba(255, 0, 150, 0.8), rgba(0, 204, 255, 0.8)),
    url(${bgImg}) no-repeat center center / cover; /* Использование локального изображения */
    background-size: 100%;

    /* Эффект при наведении */

    &:hover {
        background: linear-gradient(45deg, rgba(255, 0, 150, 0.8), rgba(0, 204, 255, 0.8)),
        url(${bgImg}) no-repeat center center / cover; /* То же изображение на hover */
        background-size: 150%;
    }
`;
