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
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onClickBurgerMenu = () => setOpenBurgerMenu(!openBurgerMenu);

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
                <Button css={css`
                    @media (max-width: 1000px) {
                        font-size: var(--fsz18);
                    }
                `} bg={true} href={allDatoCmsSocialnetwork.nodes[0].link} target='_blank'>Contáctanos</Button>
                <BurgerMenu onClick={onClickBurgerMenu}>
                    <span className={openBurgerMenu ? 'line1' : 'none'}></span>
                    <span className={openBurgerMenu ? 'line2' : 'none'}></span>
                    <span className={openBurgerMenu ? 'line3' : 'none'}></span>
                </BurgerMenu>
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
    @media (max-width: 1000px) {
        width: 15rem;
        height: 3.5rem;
    }
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
        @media (max-width: 1000px) {
            font-size: var(--fsz18);
        }
    }
`;

const BurgerMenu = styled.div`
    display: none;
    gap: 4px;
    flex-direction: column;
    justify-content: center;
    width: 48px;
    height: 48px;
    padding: 12px;
    transition: .3s;
    border-radius: 100%;
    &:hover {
        cursor: pointer;
        background-color: var(--bgHeaderDrak);
        span {
            background-color: var(--orange80);
        }
    }
    span {
        display: block;
        width: 100%;
        height: 3px;
        transition: .3s;
        transform-origin: 0px 100%;
        background-color: var(--orange);
    }
    .line1 {
        transform: rotate(45deg) translate(1px, -3px);
    }
    .line2 {
        opacity: 0;
        margin-left: -30px;
    }
    .line3 {
        transform: rotate(-45deg) translate(2px, 4px);
    }
`;

export default Header;
