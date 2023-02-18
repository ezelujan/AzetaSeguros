import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

const Product = ({ product }) => {
    const image = getImage(product.icon);

    return (
        <ContenedorProducto>
            <ContenedorImg>
                <GatsbyImage image={image} alt={product.title} />
            </ContenedorImg>
            <Text>
                <h2>{ product.title }</h2>
                <p>{ product.description }</p>
            </Text>
            <Button bg={false} href={product.link} target='_blank'>Cotizar</Button>
        </ContenedorProducto>
    );
}
 
const ContenedorProducto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30rem;
    height: 43rem;
    padding: 4rem 5rem;
    background: var(--white);
    border-radius: 2rem;
    box-shadow: 0px 40px 80px rgba(120, 122, 141, 0.07);
    transition: all .2s ease;
    &:hover {
        cursor: pointer;
        transform: scale(1.025);
    }
`

const ContenedorImg = styled.div`
    width: 7.5rem;
    padding: 1rem;
    margin-bottom: 3rem;
    background: var(--white);
    box-shadow: 0px 0px 50px rgba(131, 134, 153, 0.19);
    border-radius: 100%;
`

const Text = styled.div`
    text-align: center;
    h2 {
        font-weight: 500;
        font-size: var(--fsz30);
        color: var(--gray);
        margin-bottom: 1.4rem;
    }
    p {
        font-weight: 400;
        font-size: var(--fsz18);
        color: var(--gray80);
        margin-bottom: 5rem;
    }
`

export const Button = styled.a`
    display: block;
    width: auto;
    outline: none;
    color: ${(props) => (props.bg ? 'var(--white)' : 'var(--orange)')};
    cursor: pointer;
    font-weight: 400;
    border-radius: 0.5rem;
    font-size: var(--fsz20);
    padding: 1rem 2.5rem;
    text-decoration: none;
    text-transform: uppercase;
    border: 2px solid var(--orange);
    border-radius: 5px;
    background-color: ${(props) => (props.bg ? 'var(--orange)' : 'transparent')};
    transition: all .2s ease;
    &:hover {
        background-color: var(--orange);
        color: var(--white);
    }
`;

export default Product;