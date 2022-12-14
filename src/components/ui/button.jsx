import React from 'react';
import styled from '@emotion/styled';

export const Button = ({ text }) => {
    return (
        <ButtonUI href="">{text}</ButtonUI>
    )
}

const ButtonUI = styled.div`
    width: auto;
    outline: none;
    color: white;
    cursor: pointer;
    font-weight: 400;
    border-radius: .5rem;
    padding: 1rem 2.5rem;
    text-decoration: none;
    text-transform: uppercase;
    background-color: var(--orange);
`;