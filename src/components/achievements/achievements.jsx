import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button } from '../ui';

const Achievements = () => {
    const title = '<h1>Obtén <span>protección</span> adecuada para seguir <span>avanzando</span></h1>';

    return (
        <AchievementsSection id='beneficios'>
            <ContainerText>
                <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
                <p>Obtener la protección adecuada es fundamental para seguir avanzando en la vida, brinda tranquilidad y seguridad financiera en caso de situaciones inesperadas o imprevistas.</p>
                <div css={css`display: flex;`} >
                    <Button bg={true} href='#seguros'>Cotiza tu seguro</Button>
                </div>
            </ContainerText>
            <ContainerAchievements>
                <ColumnAchievements id='first'>
                    <Achievement
                        css={css`
                            background-color: #F0F1FF;
                            h3 { color: #3B4EFF; }
                        `}
                    >
                        <h2>Ahorros</h2>
                        <h3>Más de $700</h3>
                        <p>Ahorro medio anual de los conductores que se pasan a Progresivo y ahorran</p>
                    </Achievement>
                    <Achievement
                        css={css`
                            background-color: #FFF8E0;
                            h3 { color: #FFCE33; }
                        `}
                    >
                        <h2>Soporte</h2>
                        <h3>24/7 horas</h3>
                        <p>Ahorro medio anual de los conductores que se pasan a Progresivo y ahorran</p>
                    </Achievement>
                </ColumnAchievements>
                <ColumnAchievements id='second'>
                    <Achievement
                        css={css`
                            background-color: #FFF0EB;
                            h3 { color: #F76031; }
                        `}
                    >
                        <h2>Clientes</h2>
                        <h3>25 millones+</h3>
                        <p>Ahorro medio anual de los conductores que se pasan a Progresivo y ahorran</p>
                    </Achievement>
                    <Achievement
                        css={css`
                            background-color: #F0F6FF;
                            h3 { color: #3485FF; }
                        `}
                    >
                        <h2>Premios</h2>
                        <h3>50+ ganados</h3>
                        <p>Ahorro medio anual de los conductores que se pasan a Progresivo y ahorran</p>
                    </Achievement>
                </ColumnAchievements>
            </ContainerAchievements>
        </AchievementsSection>
    );
}

const AchievementsSection = styled.section`
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
 
const ContainerAchievements = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
        #second {
            transform: translate(0%, 8%);
        }
    }
`

const ColumnAchievements = styled.div`
    display: grid;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    row-gap: 2rem;
`

const Achievement = styled.div`
    width: 26rem;
    height: 20rem;
    padding: 2rem 3rem;
    text-align: center;
    border-radius: 2rem;
    h2 {
        font-weight: 400;
        color: var(--gray);
        margin-bottom: 1rem;
        font-size: var(--fsz20);
    }
    h3 {
        font-weight: 500;
        color: var(--blue);
        margin-bottom: 2rem;
        font-size: var(--fsz40);
    }
    p {
        color: var(--gray80);
        font-weight: 400;
        font-size: var(--fsz18);

    }
`

export default Achievements;