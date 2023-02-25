import React from 'react';
import styled from '@emotion/styled';
import useAgents from '../../hooks/use-agents';
import Agent from './agent';

const ContactUs = () => {
    const agents = useAgents();
    if (!agents.length) return false;

    const title = 'Nuestros <span>asesores</span> están listos para <span>ayudarlo</span>';

    return (
        <ContactUsSection>
            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
            <ContainerAgents>
                {agents.map(agent => (
                    <Agent
                        key={agent.id}
                        agent={agent}
                    />
                ))}
            </ContainerAgents>
        </ContactUsSection>
    );
}

const ContactUsSection = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 10rem auto;
    @media (min-width: 768px) {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    h1 {
        line-height: 1.2;
        font-weight: 700;
        font-size: var(--fsz80);
        width: 70%;
        color: var(--gray);
        margin-bottom: 10rem;
        @media (max-width: 48em) {
            font-size: var(--fsz60);
            margin: 0 auto;
            padding-bottom: 5rem;
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
`

const ContainerAgents = styled.div`
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    @media (max-width: 747px) {
        padding-left: 18rem;
    }
    @media (max-width: 650px) {
        padding-left: 14rem;
    }
    @media (max-width: 525px) {
        padding-left: 11rem;
    }
    @media (max-width: 30em) {
        padding-left: 8rem;
    }
    @media (max-width: 25em) {
        padding-left: 5rem;
    }
    @media (max-width: 20.625em) {
        padding-left: 0;
    }
`
 
export default ContactUs;