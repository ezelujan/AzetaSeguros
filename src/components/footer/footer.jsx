import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import useFooter from '../../hooks/use-footer';
import useProducts from '../../hooks/use-products';
import SocialNetwork from './socialNetwork';

const Footer = () => {
    const { allDatoCmsAsset } = useStaticQuery(
        graphql`
            query {
                allDatoCmsAsset(filter: { basename: { eq: "logo" } }) {
                    nodes {
                        notes
                        fluid(maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        `,
    );

    const products = useProducts();

    const footer = useFooter();
    if (!footer.length) return false;

    return (
        <ContainerFooter>
            <ListFooter>
                <ContainerIcons>
                    <Img
                        src={allDatoCmsAsset.nodes[0].fluid.src}
                        alt={allDatoCmsAsset.nodes[0].notes}
                        fetchpriority="high"
                    />
                    <ContainerSocialMedia>
                        {footer.map((network) => (
                            <SocialNetwork key={network.id} network={network} />
                        ))}
                    </ContainerSocialMedia>
                </ContainerIcons>
                {products.length ? (
                    <ContainerList>
                        <h2>Productos</h2>
                        <ul>
                            {products.map((product) => (
                                <li key={product.id}><a href='#productos'>{product.title}</a></li>
                            ))}
                        </ul>
                    </ContainerList>
                ) : null}
                <ContainerList>
                    <h2>Compañia</h2>
                    <ul>
                        <li><a href="">Únete al equipo</a></li>
                        <li><a href="">Asuntos legales</a></li>
                        <li><a href="">Inversionistas</a></li>
                        <li><a href="">Reseñas</a></li>
                    </ul>
                </ContainerList>
                <ContainerList>
                    <h2>Recursos</h2>
                    <ul>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Transparencia</a></li>
                        <li><a href="">Comunidad</a></li>
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
};

const ContainerFooter = styled.footer`
    padding-bottom: 5rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

const ListFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 48em) {
        display: grid;
        gap: 3rem;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    }
`;

const ContainerIcons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Img = styled.img`
    width: 18rem;
    height: 4.3rem;
`;

const ContainerSocialMedia = styled.div`
    display: flex;
    gap: 1rem;
`;

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
            a {
                font-weight: 400;
                font-size: var(--fsz18);
                color: var(--grayWhite80);
            }
            &:hover {
                cursor: pointer;
            }
            a:hover {
                color: var(--blue);
            }
        }
        #selected {
            color: var(--blue);
        }
    }
`;

const Divider = styled.div`
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--grayWhite15);
`;

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
`;

export default Footer;
