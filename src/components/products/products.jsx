import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

const Home = () => {
    const { allDatoCmsProductheader } = useStaticQuery(
        graphql`
            query {
                allDatoCmsProductheader {
                    nodes {
                        title
                        description
                        descriptionoptional
                        illustration {
                            fluid {
                                ...GatsbyDatoCmsFluid
                            }
                        }
                    }
                }
            }
        `,
    );

    const { title, description, descriptionoptional, illustration } = allDatoCmsProductheader.nodes[0];

    return (
        <Background>
            <FloatWindow>
                <h2>50+ Productos</h2>
                <p>La gente confía en nosotros para asegurar lo que es importante para ellos.</p>
            </FloatWindow>
            <ContainerHome>
                <ContainerIllustration>
                    <Image fluid={illustration.fluid} />
                </ContainerIllustration>
                <ContainerText>
                    <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
                    <p>{description}</p>
                    <p>{descriptionoptional}</p>
                </ContainerText>
            </ContainerHome>
        </Background>
    );
};

const Background = styled.div`
    position: relative;
    @media (min-width: 768px) {
        background: blue;
        background: linear-gradient(to right, white 25%, var(--bgHeader) 25%, var(--bgHeader) 50%);
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
    h2 {
        font-size: var(--fsz20);
        font-weight: 600;
        color: var(--grayWhite);
    }
    p {
        margin: 1rem 0;
        font-size: var(--fsz16);
        color: var(--grayWhite80);
        font-weight: 400;
    }
`;

const ContainerHome = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
    }
`;

const ContainerText = styled.div`
    padding: 8rem 0 0 8rem;
    @media (max-width: 768px) {
        text-align: center;
    }
    h1 {
        line-height: 1.2;
        font-weight: 400;
        font-size: var(--fsz110);
        color: var(--gray);
        @media (max-width: 768px) {
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
        @media (max-width: 768px) {
            margin: 3rem auto;
        }
    }
`;

const ContainerIllustration = styled.div`
    padding: 0 5rem 0 0;
    background: white;
    margin-left: -40%;
    margin-top: -8%;
    border-radius: 0 0 10rem 0;
    @media (max-width: 768px) {
        display: none;
    }
`;

export default Home;
