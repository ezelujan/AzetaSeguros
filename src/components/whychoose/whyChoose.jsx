import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'gatsby-image';
import { Button } from '../ui';

const WhyChoose = () => {
    const { allDatoCmsWhychoose } = useStaticQuery(
        graphql`
            query {
                allDatoCmsWhychoose {
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

    const { title, description, illustration } = allDatoCmsWhychoose.nodes[0];

    return (
        <Background>
            <WhyChooseSection>
                <ContainerText>
                    <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
                    <p>Agregar a su familia significa agregar a sus necesidades financieras. Estamos aquí para guiarlo mientras trabaja para asegurar el futuro de sus seres queridos.</p>
                    <div css={css`display: flex;`} >
                        <Button bg={true}>Leer más</Button>
                    </div>
                </ContainerText>
                <ContainerIllustration>
                    <Image fluid={illustration.fluid} />
                </ContainerIllustration>
            </WhyChooseSection>
        </Background>
    );
}

const Background = styled.div`
    background-color: var(--bgHeader);
`;

const WhyChooseSection = styled.section`
    padding: 10rem 0;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
    }
`

const ContainerText = styled.div`
    @media (max-width: 768px) {
        text-align: center;   
    }
    h1 {
        line-height: 1.2;
        font-weight: 700;
        font-size: var(--fsz80);
        width: 95%;
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
        width: 70%;
        margin: 3rem 0 5rem 0;
        font-size: var(--fsz20);
        color: var(--gray80);
        @media (max-width: 768px) {
            margin: 3rem auto;
        }
    }
`;
 
const ContainerIllustration = styled.div`
    /* padding: 0 5rem 0 0; */
    margin-left: -5%;
    border-radius: 0 0 10rem 0;
    @media (max-width: 768px) {
        display: none;
    }
`

export default WhyChoose;