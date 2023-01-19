import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import useProducts from '../../hooks/use-products';

const Products = () => {
    const { allDatoCmsAsset } = useStaticQuery(
        graphql`
            query {
                allDatoCmsAsset(filter: { basename: { eq: "right-arrow" } }) {
                    nodes {
                        notes
                        fluid(maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        `,
    );
    const products = useProducts();
    if (!products.length) return false;

    return (
        <Background>
            <Img src={allDatoCmsAsset.nodes[0].fluid.src} alt={allDatoCmsAsset.nodes[0].notes} fetchpriority="low" rotate={true} />
            <ContenedorProducto>
                <ContenedorImg>
                    <Image fluid={products[0].icon.fluid} />
                </ContenedorImg>
                <Text>
                    <h2>{ products[0].title }</h2>
                    <p>{ products[0].description }</p>
                </Text>
                <Button bg={false}>Cotizar</Button>
            </ContenedorProducto>
            <ContenedorProducto>
                <ContenedorImg>
                    <Image fluid={products[0].icon.fluid} />
                </ContenedorImg>
                <Text>
                    <h2>{ products[0].title }</h2>
                    <p>{ products[0].description }</p>
                </Text>
                <Button bg={false}>Cotizar</Button>
            </ContenedorProducto>
            <ContenedorProducto>
                <ContenedorImg>
                    <Image fluid={products[0].icon.fluid} />
                </ContenedorImg>
                <Text>
                    <h2>{ products[0].title }</h2>
                    <p>{ products[0].description }</p>
                </Text>
                <Button bg={false}>Cotizar</Button>
            </ContenedorProducto>
            <ContenedorProducto>
                <ContenedorImg>
                    <Image fluid={products[0].icon.fluid} />
                </ContenedorImg>
                <Text>
                    <h2>{ products[0].title }</h2>
                    <p>{ products[0].description }</p>
                </Text>
                <Button bg={false}>Cotizar</Button>
            </ContenedorProducto>
            <Img src={allDatoCmsAsset.nodes[0].fluid.src} alt={allDatoCmsAsset.nodes[0].notes} fetchpriority="low" />
        </Background>
    );
};

export const Background = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    background-color: var(--bgHeader);
    padding: 10rem;
`;

const Img = styled.img`
    width: 4rem;
    height: 4rem;
    background: var(--white);
    padding: 1rem;
    border-radius: 100%;
    cursor: pointer;
    transition: all .2s ease;
    transform: ${(props) => (props.rotate ? 'rotate(180deg)' : 'none')};
    &:hover {
        background: rgb(245, 245, 245);
    }
`

const ContenedorProducto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30rem;
    height: 38rem;
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

export default Products;
