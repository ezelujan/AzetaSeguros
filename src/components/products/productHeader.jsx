import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProductHeader = () => {
    const { allDatoCmsProductheader } = useStaticQuery(
        graphql`
            query {
                allDatoCmsProductheader {
                    nodes {
                        title
                        description
                        descriptionoptional
                        illustration {
                            gatsbyImageData
                        }
                    }
                }
            }
        `,
    );

    const { title, description, descriptionoptional, illustration } = allDatoCmsProductheader.nodes[0];
    const image = getImage(illustration);

    return (
        <Background>
            <FloatWindow>
                <h2>50+ Productos</h2>
                <p>Nuestros productos garantizan y satisfacen la vida de nuestros clientes.</p>
            </FloatWindow>
            <ContainerHome>
                <ContainerIllustration>
                    <GatsbyImage image={image} alt={title} />
                </ContainerIllustration>
                <ContainerText>
                    <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
                    <p>{description}</p>
                    <p className="description_optional">{descriptionoptional}</p>
                </ContainerText>
            </ContainerHome>
        </Background>
    );
};

const Background = styled.div`
    position: relative;
    background: linear-gradient(to right, white 40%, var(--bgHeader) 10%, var(--bgHeader) 50%);
    @media (max-width: 48em) {
        background: var(--bgHeader);
    }
`;

const FloatWindow = styled.div`
    top: 22.5%;
    left: 42.5%;
    width: 20rem;
    height: 14rem;
    display: block;
    position: absolute;
    text-align: center;
    border-radius: 2rem;
    padding: 2.5rem 1.3rem;
    word-wrap: break-word;
    background-color: white;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 100px rgba(165, 165, 165, 0.25);
    @media (max-width: 90em) {
        left: 40%;
    }
    @media (max-width: 75em) {
        left: 37%;
    }
    @media (max-width: 62.5em) {
        display: none;
    }
    h2 {
        font-size: var(--fsz20);
        font-weight: 600;
        color: var(--grayWhite);
    }
    p {
        margin: 1rem 0;
        font-size: var(--fsz17);
        color: var(--grayWhite80);
        font-weight: 400;
    }
`;

const ContainerHome = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 48em) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
    }
    @media (max-width: 48em) {
        width: 80%;
    }
    @media (max-width: 30em) {
        width: 95%;
    }
`;

const ContainerText = styled.div`
    padding: 8rem 0 0 8rem;
    @media (max-width: 75em) {
        padding: 8rem 0 0 4rem;
    }
    @media (max-width: 62.5em) {
        padding: 8rem 0 0 2rem;
        .description_optional {
            display: none;
        }
    }
    @media (max-width: 768px) {
        text-align: center;
    }
    h1 {
        line-height: 1.2;
        font-weight: 400;
        font-size: var(--fsz110);
        color: var(--gray);
        @media (max-width: 75em) {
            font-size: var(--fsz80);
        }
        @media (max-width: 62.5em) {
            font-size: var(--fsz70);
        }
        @media (max-width: 48em) {
            margin: 0 auto;
            text-align: center;
        }
        span {
            color: var(--blue);
            font-weight: 700;
        }
    }
    p {
        margin: 3rem 0 3rem 0;
        font-size: var(--fsz20);
        color: var(--gray80);
        @media (max-width: 48em) {
            margin: 3rem 0 0 0;
        }
    }
`;

const ContainerIllustration = styled.div`
    padding: 0 5rem 0 0;
    background: white;
    margin-left: -40%;
    margin-top: -8%;
    border-radius: 0 0 10rem 0;
    @media (max-width: 62.5em) {
        padding: 0 1rem 0 0;
    }
    @media (max-width: 48em) {
        display: none;
    }
`;

export default ProductHeader;
