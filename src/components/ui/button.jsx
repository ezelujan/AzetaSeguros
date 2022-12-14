import styled from '@emotion/styled';

export const Button = styled.a`
    display: block;
    width: auto;
    outline: none;
    color: ${props => props.bg ? 'var(--white)' : 'var(--orange)'};
    cursor: pointer;
    font-weight: 400;
    border-radius: .5rem;
    font-size: var(--fsz20);
    padding: 1rem 2.5rem;
    text-decoration: none;
    text-transform: uppercase;
    background-color: ${props => props.bg ? 'var(--orange)' : 'transparent'};
`;
