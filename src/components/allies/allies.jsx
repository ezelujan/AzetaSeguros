import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import useAllies from '../../hooks/use-allies';
import Ally from '../allies/ally';

const Allies = () => {
    const { allDatoCmsAllyheader } = useStaticQuery(
        graphql`
            query {
                allDatoCmsAllyheader {
                    nodes {
                        title
                        description
                        illustration {
                            gatsbyImageData
                        }
                    }
                }
            }
        `,
    );

    const { title, description, illustration } = allDatoCmsAllyheader.nodes[0];
    const image = getImage(illustration);

    const allies = useAllies();
    if (!allies.length) return false;

    return (
        <Background id='nuestros-aliados'>
            <WhyChooseSection>
                <ContainerText>
                    <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
                    <p>{description}</p>
                    <ListAllies>
                        {allies.map(ally => (
                            <Ally
                                key={ally.id}
                                ally={ally}
                            />
                        ))}
                    </ListAllies>
                </ContainerText>
                <ContainerIllustration>
                    <GatsbyImage image={image} alt={title} />
                </ContainerIllustration>
            </WhyChooseSection>
        </Background>
    );
};

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
`;

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

const ListAllies = styled.div`
    /* margin-right: 10rem; */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    column-gap: 1rem;
    row-gap: 2rem;
    @media (max-width: 48em) {
        padding-left: 2rem;
    }
`;

const ContainerIllustration = styled.div`
    /* padding: 0 5rem 0 0; */
    margin-left: 20%;
    border-radius: 0 0 10rem 0;
    @media (max-width: 75em) {
        margin-left: 10%;
        margin-top: 5%;
    }
    @media (max-width: 62.5em) {
        margin-left: 5%;
        margin-top: 10%;
    }
    @media (max-width: 840px) {
        margin-left: 0;
        margin-top: 20%;
    }
    @media (max-width: 48em) {
        display: none;
    }
`;

export default Allies;
