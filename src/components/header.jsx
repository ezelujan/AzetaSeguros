import React, { useState, useEffect } from 'react';
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

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <HeaderDiv css={offset > 0 ? css`
            padding: 1rem;
            opacity: .97;
        ` : ''}>
            <HeaderContent>
                <a href="#">
                    <Img
                        src={allDatoCmsAsset.nodes[0].fluid.src}
                        alt={allDatoCmsAsset.nodes[0].notes}
                        fetchpriority="high"
                    />
                </a>
                <Menu>
                    <nav>
                        <ul>
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#seguros">Seguros</a></li>
                            <li><a href="#beneficios">Beneficios</a></li>
                            <li><a href="#nuestros-aliados">Nuestros Aliados</a></li>
                        </ul>
                    </nav>
                </Menu>
                <Button bg={true} href={allDatoCmsSocialnetwork.nodes[0].link} target='_blank'>Contáctanos</Button>
            </HeaderContent>
        </HeaderDiv>
    );
};

const HeaderDiv = styled.header`
    width: 100%;
    z-index: 100;
    padding: 3rem;
    position: sticky;
    top: 0;
    transition: 0.5s;
    background-color: var(--bgHeader);
`;

const HeaderContent = styled.div`
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

const Menu = styled.div`
    nav ul {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: var(--fsz20);
        color: var(--gray);
        gap: 4rem;
    }
`;

export default Header;
