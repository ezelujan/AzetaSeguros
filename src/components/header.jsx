import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from './ui';

const Header = () => {
    const { allDatoCmsAsset, allDatoCmsSocialnetwork } = useStaticQuery(
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
                allDatoCmsSocialnetwork(filter: { name: { eq: "whatsapp" } }) {
                    nodes {
                        link
                    }
                }
            }
        `,
    );

    return (
        <header
            css={css`
                background-color: var(--bgHeader);
                padding: 1rem;
                /* position: sticky;
                top: 0;
                z-index: 1; */
            `}
        >
            <HeaderContent>
                <a href="#">
                    <Img
                        src={allDatoCmsAsset.nodes[0].fluid.src}
                        alt={allDatoCmsAsset.nodes[0].notes}
                        fetchpriority="high"
                    />
                </a>
                <nav>
                    <Menu>
                        <li>
                            <a href="#inicio">Inicio</a>
                        </li>
                        <li>
                            <a href="#seguros">Seguros</a>
                        </li>
                        <li>
                            <a href="#beneficios">Beneficios</a>
                        </li>
                        <li>
                            <a href="#nuestros-aliados">Nuestros Aliados</a>
                        </li>
                    </Menu>
                </nav>
                <Button bg={true} href={allDatoCmsSocialnetwork.nodes[0].link} target='_blank'>Contáctanos</Button>
            </HeaderContent>
        </header>
    );
};

const HeaderContent = styled.div`
    padding: 1rem 0;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const Img = styled.img`
    width: 18rem;
    height: 4.3rem;
`;

const Menu = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: var(--fsz20);
    color: var(--gray);
    gap: 4rem;
`;

export default Header;
