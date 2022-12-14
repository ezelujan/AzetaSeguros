import React from 'react';
import { graphql, useStaticQuery  } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Button } from './ui';

const Home = () => {
    const { allDatoCmsHome } = useStaticQuery(
        graphql`
            query {
                allDatoCmsHome {
                  nodes {
                    title,
                    description,
                    illustration {
                      fluid {
                        ...GatsbyDatoCmsFluid
                      }
                    }
                  }
                }
            }
        `
    );

    const { title, description, illustration } = allDatoCmsHome.nodes[0];

    return (
        <ContainerHome>
            <ContainerText>
                <span>Azeta Seguros para todos</span>
                <h1>{title}</h1>
                <p>{description}</p>
                <Button text="Solicitar Producto" />
            </ContainerText>
            <ContainerIllustration>
                <Image fluid={illustration.fluid} />
            </ContainerIllustration>
        </ContainerHome>
    );
}

const ContainerHome = styled.div`
    padding-top: 4rem;
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
    
`;

const ContainerIllustration = styled.div`
    /* img {
        width: 50rem;
    } */
`;

export default Home;