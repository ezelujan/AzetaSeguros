import React from 'react';
import { graphql, useStaticQuery  } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from './ui';

const Header = () => {
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

    return (
        <header
            css={css`
                background-color: var(--bgHeader);
                padding: 1rem;
            `}
        >
            <HeaderContent>
                <Img src={allDatoCmsAsset.nodes[0].fluid.src} alt={allDatoCmsAsset.nodes[0].notes} />
                <nav>
                    <Menu>
                        <li>Inicio</li>
                        <li>Seguros</li>
                        <li>Beneficios</li>
                        <li>Quienes Somos</li>
                    </Menu>
                </nav>
                <Button text="Contáctanos" />
            </HeaderContent>
        </header>
    );
}

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
`

const Img = styled.img`
    width: 18rem;
    height: 4.3rem;
`

const Menu = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5rem;
    gap: 2rem;
`

export default Header;