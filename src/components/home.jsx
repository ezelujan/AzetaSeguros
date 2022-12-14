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
                {/* <Image fluid={illustration.fluid} /> */}
                <img src={illustration.fluid.src} alt={illustration.notes} />
            </ContainerIllustration>
        </ContainerHome>
    );
}

const ContainerHome = styled.div`
    display: flex;
`;

const ContainerText = styled.div`
    
`;

const ContainerIllustration = styled.div`
    img {
        width: 50rem;
    }
`;

export default Home;