import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Button } from '../ui';

const LetStartNow = () => {
    const { allDatoCmsLetstart } = useStaticQuery(
        graphql`
            query {
                allDatoCmsLetstart {
                    nodes {
                        title
                        description
                        illustrationizq {
                            gatsbyImageData
                        }
                        illustrationright {
                            gatsbyImageData
                        }
                    }
                }
            }
        `,
    );

    const { title, description, illustrationizq, illustrationright } = allDatoCmsLetstart.nodes[0];
    const imageizq = getImage(illustrationizq);
    const imageright = getImage(illustrationright);

    return (
        <Background>
            <LetStartSection>
                <ContainerIllustrationIzq>
                    <GatsbyImage image={imageizq} alt={title} />
                </ContainerIllustrationIzq>
                <ContainerText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Button bg={true} href='#seguros'>Cotizar ahora mismo</Button>
                </ContainerText>
                <ContainerIllustrationRight>
                    <GatsbyImage image={imageright} alt={title} />
                </ContainerIllustrationRight>
            </LetStartSection>
        </Background>
    );
};

const Background = styled.div`
    background-color: var(--blue);
    margin: 12rem 0;
`

const LetStartSection = styled.section`
    padding: 7rem 0;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 1rem;
    }
`

const ContainerIllustrationIzq = styled.div`
    padding: 0 8rem;
    margin-left: -5%;
    border-radius: 0 0 10rem 0;
    @media (max-width: 768px) {
        display: none;
    }
`

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1 {
        font-size: var(--fsz90);
        line-height: 1;
        color: var(--white);
        font-weight: 700;
        margin-bottom: 3.5rem;
    }
    p {
        font-size: var(--fsz25);
        color: var(--white80);
        font-weight: 400;
        margin-bottom: 5rem;
    }
`

const ContainerIllustrationRight = styled.div`
    padding: 0 8rem;
    margin-right: -5%;
    border-radius: 0 0 10rem 0;
    @media (max-width: 768px) {
        display: none;
    }
`

export default LetStartNow;
