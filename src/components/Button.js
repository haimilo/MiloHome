import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#000d1a' : '#cd853f')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
    font-size: ${({ big }) => (big ? '20px' : '14px')};
    color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};

    &:hover {
        transform: translateY(-2px);
        background: ${({ primary }) => (primary ? '#cd853f' : '#000d1a')};
        color: ${({ primary }) => (primary ? '#000d1a' : '#fff')};
    }
`;