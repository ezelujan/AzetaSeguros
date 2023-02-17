import React from 'react';
import Image from 'gatsby-image';
import { Button } from '../ui';
import styled from '@emotion/styled';

const Agent = ({ agent }) => {
    return (
        <Background>
            <ContainerIllistation>
                <Image fluid={agent.illustration.fluid}/>
            </ContainerIllistation>
            <Text>
                <h2>{agent.name}</h2>
                <Button bg={false} href={agent.link}>Contactar</Button>
            </Text>
        </Background>
    );
}

const Background = styled.div`
    border-radius: 2rem;
    background-color: var(--white);
    box-shadow: 0px 0px 50px rgba(139, 141, 164, 0.17);
`
 
const ContainerIllistation = styled.div`
    width: 35rem;
    height: 28rem;
    padding: 2rem 8rem 2rem 8rem;
`
 
const Text = styled.div`
    padding: 0 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2rem;
    h2 {
        color: var(--gray);
        font-weight: 600;
        font-size: var(--fsz40);
    }
`
 
export default Agent;