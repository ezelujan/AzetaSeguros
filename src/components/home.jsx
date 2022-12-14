import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Button } from './ui';

const Home = () => {
    const { allDatoCmsHome } = useStaticQuery(
        graphql`
            query {
                allDatoCmsHome {
                    nodes {
                        title
                        description
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

    const { title, description, illustration } = allDatoCmsHome.nodes[0];

    return (
        <Background>
            <ContainerHome>
                <ContainerText>
                    <Span>Azeta Seguros para todos</Span>
                    <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
                    <p>{description}</p>
                    <div css={css` display: flex; gap: 2rem; `} >
                        <Button bg={true}>Solicitar producto</Button>
                        <Button bg={false}>Leer más</Button>
                    </div>
                </ContainerText>
                <ContainerIllustration>
                    <Image fluid={illustration.fluid} />
                </ContainerIllustration>
            </ContainerHome>
        </Background>
    );
};

const Background = styled.div`
    @media (min-width: 768px) {
        background: linear-gradient(to right, white 25%, var(--bgHeader) 25%, var(--bgHeader) 50%);
    }
`;

const ContainerHome = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

const ContainerText = styled.div`
    padding-top: 4rem;
    background-color: white;
    border-radius: 0 10rem 0 0;
    @media (max-width: 768px) {
        text-align: center;   
    }
    h1 {
        line-height: 1.2;
        font-weight: 400;
        font-size: var(--fsz110);
        width: 70%;
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
        width: 60%;
        margin: 3rem 0 5rem 0;
        font-size: var(--fsz20);
        color: var(--gray);
        @media (max-width: 768px) {
            margin: 3rem auto;
        }
    }
`;

const Span = styled.span`
    padding: 0.5rem 1rem;
    font-size: var(--fsz16);
    border-radius: 0.4rem;
    background-color: var(--yellow);
`;

const ContainerIllustration = styled.div`
    padding-top: 8rem;
    margin-bottom: -100%;
    @media (max-width: 768px) {
        display: none;
    }
`;

export default Home;
