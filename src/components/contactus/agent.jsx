import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import { Button } from '../ui';
import styled from '@emotion/styled';

const Agent = ({ agent }) => {
    const image = getImage(agent.illustration);

    return (
        <Background>
            <ContainerIllistation>
                <GatsbyImage image={image} alt={agent.name} />
            </ContainerIllistation>
            <Text>
                <h2>{agent.name}</h2>
                <Button css={css`
                    @media (max-width: 37.5em) {
                        font-size: var(--fsz18);
                    }
                `} bg={false} href={agent.link} target='_blank'>Contactar</Button>
            </Text>
        </Background>
    );
}

const Background = styled.div`
    width: 35rem;
    border-radius: 2rem;
    background-color: var(--white);
    box-shadow: 0px 0px 50px rgba(139, 141, 164, 0.17);
    @media (max-width: 37.5em) {
        width: 26rem;
    }
`
 
const ContainerIllistation = styled.div`
    width: 35rem;
    height: 28rem;
    padding: 2rem 8rem 2rem 8rem;
    @media (max-width: 37.5em) {
        width: 28rem;
        height: 21rem;
    }
`
 
const Text = styled.div`
    padding: 0 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2rem;
    @media (max-width: 37.5em) {
        gap: 1.5rem;
    }
    h2 {
        color: var(--gray);
        font-weight: 600;
        font-size: var(--fsz40);
        @media (max-width: 37.5em) {
            font-size: var(--fsz30);
        }
    }
`
 
export default Agent;