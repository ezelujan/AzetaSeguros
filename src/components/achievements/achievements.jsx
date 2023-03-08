import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button } from '../ui';
import useBenefits from '../../hooks/use-benefits';

const Achievements = () => {
    const { allDatoCmsBenefitheader } = useStaticQuery(
        graphql`
            query {
                allDatoCmsBenefitheader {
                    nodes {
                        title
                        description
                    }
                }
            }
        `,
    );

    const benefits = useBenefits();
    if (!benefits.length) return false;

    const { title, description } = allDatoCmsBenefitheader.nodes[0];

    return (
        <AchievementsSection id="beneficios">
            <ContainerText>
                <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
                <p>{description}</p>
                <div
                    css={css`
                        display: flex;
                        @media (max-width: 840px) {
                            margin-bottom: 5rem;
                        }
                    `}
                >
                    <Button bg={true} href="#productos">
                        Cotiza tu seguro
                    </Button>
                </div>
            </ContainerText>
            <ContainerAchievements>
                <ColumnAchievements id="first">
                    <Achievement
                        css={css`
                            background-color: #f0f1ff;
                            h3 {
                                color: #3b4eff;
                            }
                        `}
                    >
                        <h2>{benefits[0].title}</h2>
                        <h3>{benefits[0].subtitle}</h3>
                        <p>{benefits[0].description}</p>
                    </Achievement>
                    <Achievement
                        css={css`
                            background-color: #fff8e0;
                            h3 {
                                color: #ffce33;
                            }
                        `}
                    >
                        <h2>{benefits[1].title}</h2>
                        <h3>{benefits[1].subtitle}</h3>
                        <p>{benefits[1].description}</p>
                    </Achievement>
                </ColumnAchievements>
                <ColumnAchievements id="second">
                    <Achievement
                        css={css`
                            background-color: #fff0eb;
                            h3 {
                                color: #f76031;
                            }
                        `}
                    >
                        <h2>{benefits[2].title}</h2>
                        <h3>{benefits[2].subtitle}</h3>
                        <p>{benefits[2].description}</p>
                    </Achievement>
                    <Achievement
                        css={css`
                            background-color: #f0f6ff;
                            h3 {
                                color: #3485ff;
                            }
                        `}
                    >
                        <h2>{benefits[3].title}</h2>
                        <h3>{benefits[3].subtitle}</h3>
                        <p>{benefits[3].description}</p>
                    </Achievement>
                </ColumnAchievements>
            </ContainerAchievements>
        </AchievementsSection>
    );
};

const AchievementsSection = styled.section`
    padding: 10rem 0;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 840px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
    }
`;

const ContainerText = styled.div`
    @media (max-width: 840px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    @media (max-width: 768px) {
        text-align: center;
    }
    h1 {
        line-height: 1.2;
        font-weight: 700;
        font-size: var(--fsz80);
        width: 95%;
        color: var(--gray);
        @media (max-width: 62.5em) {
            font-size: var(--fsz60);
        }
        @media (max-width: 48em) {
            margin: 0 auto;
            text-align: center;
        }
        @media (max-width: 37.5em) {
            font-size: var(--fsz50);
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
        @media (max-width: 48em) {
            margin: 3rem auto;
        }
        @media (max-width: 37.5em) {
            font-size: var(--fsz18);
        }
    }
`;

const ContainerAchievements = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    #second {
        transform: translate(0%, 8%);
    }
    @media (max-width: 840px) {
        padding-left: 5rem;
    }
    @media (max-width: 37.5em) {
        padding-left: 0rem;
    }
    @media (max-width: 30em) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const ColumnAchievements = styled.div`
    display: grid;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    row-gap: 2rem;
`;

const Achievement = styled.div`
    width: 26rem;
    height: 20rem;
    padding: 2rem 3rem;
    text-align: center;
    border-radius: 2rem;
    @media (max-width: 62.5em) {
        width: 24rem;
        height: 18rem;
    }
    @media (max-width: 37.5em) {
        width: 19rem;
        height: 16rem;
    }
    h2 {
        font-weight: 400;
        color: var(--gray);
        margin-bottom: 1rem;
        font-size: var(--fsz20);
        @media (max-width: 62.5em) {
            font-size: var(--fsz18);
        }
        @media (max-width: 37.5em) {
            font-size: var(--fsz16);
        }
    }
    h3 {
        font-weight: 500;
        color: var(--blue);
        margin-bottom: 2rem;
        font-size: var(--fsz40);
        @media (max-width: 62.5em) {
            font-size: var(--fsz30);
        }
        @media (max-width: 37.5em) {
            font-size: var(--fsz25);
        }
    }
    p {
        color: var(--gray80);
        font-weight: 400;
        font-size: var(--fsz18);
        @media (max-width: 62.5em) {
            font-size: var(--fsz16);
        }
        @media (max-width: 37.5em) {
            font-size: var(--fsz14);
        }
    }
`;

export default Achievements;
