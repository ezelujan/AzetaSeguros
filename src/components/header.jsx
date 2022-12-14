import React from 'react';
import { graphql, useStaticQuery  } from 'gatsby';
import { Button } from './ui';
import styled from '@emotion/styled';

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
    );
}

const HeaderContent = styled.header`
    display: flex;
    padding: 1rem;
    padding: 3rem 10rem;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--bgHeader);
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