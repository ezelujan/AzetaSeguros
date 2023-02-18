import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery  } from 'gatsby';
import useFooter from '../../hooks/use-footer';
import SocialNetwork from './socialNetwork';

const Footer = () => {
    const { allDatoCmsAsset } = useStaticQuery(
        graphql`
            query {
                allDatoCmsAsset(filter: { basename: { eq: "logo" } }) {
                    nodes {
                        notes,
                        fluid(maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        `
    );

    const footer = useFooter();
    if (!footer.length) return false;

    return (
        <ContainerFooter>
            <ListFooter>
                <ContainerIcons>
                    <Img src={allDatoCmsAsset.nodes[0].fluid.src} alt={allDatoCmsAsset.nodes[0].notes} fetchpriority="high" />
                    <ContainerSocialMedia>
                        {footer.map(network => (
                            <SocialNetwork
                                key={network.id}
                                network={network}
                            />
                        ))}
                    </ContainerSocialMedia>
                </ContainerIcons>
                <ContainerList>
                    <h2>Productos</h2>
                    <ul>
                        <li id="selected">Seguro de vida</li>
                        <li>Seguro de salud</li>
                        <li>Seguro de hogar</li>
                        <li>Seguro de auto</li>
                    </ul>
                </ContainerList>
                <ContainerList>
                    <h2>Características</h2>
                    <ul>
                        <li>Sugerencias</li>
                        <li>API</li>
                        <li>Giveback</li>
                        <li>Renters</li>
                    </ul>
                </ContainerList>
                <ContainerList>
                    <h2>Compañia</h2>
                    <ul>
                        <li>Únete al equipo</li>
                        <li>Asuntos legales</li>
                        <li>Inversionistas</li>
                        <li>Reseñas</li>
                    </ul>
                </ContainerList>
                <ContainerList>
                    <h2>Recursos</h2>
                    <ul>
                        <li>Blog</li>
                        <li>Transparencia</li>
                        <li>Comunidad</li>
                    </ul>
                </ContainerList>
            </ListFooter>
            <Divider></Divider>
            <Copyright>
                <p>&copy; {new Date().getFullYear()}. Todos los derehos reservados</p>
                <div>
                    <p>Política de privacidad</p>
                    <p>Terminos & condiciones</p>
                </div>
            </Copyright>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.footer`
    padding-bottom: 5rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }
`

const ListFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ContainerIcons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const Img = styled.img`
    width: 18rem;
    height: 4.3rem;
`

const ContainerSocialMedia = styled.div`
    display: flex;
    gap: 1rem;
`

const ContainerList = styled.div`
    h2 {
        margin-bottom: 3rem;
        font-weight: 500;
        font-size: var(--fsz20);
        color: var(--grayWhite);
        text-transform: uppercase;
    }
    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
            font-weight: 400;
            font-size: var(--fsz18);
            color: var(--grayWhite80);
            &:hover {
                cursor: pointer;
            }
        }
        #selected {
            color: var(--blue);
        }
    }
`

const Divider = styled.div`
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--grayWhite15);
`

const Copyright = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
        font-weight: 400;
        font-size: var(--fsz16);
        color: var(--grayWhite80);
    }
    div {
        display: flex;
        gap: 2rem;
    }
`

export default Footer;