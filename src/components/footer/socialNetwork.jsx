import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

const SocialNetwork = ({ network }) => {
    const image = getImage(network.icon);

    return (
        <ContainerIllistation>
            <a href={network.link} target='_blank'>
            <GatsbyImage image={image} alt={network.name} />
            </a>
        </ContainerIllistation>
    );
}
 
const ContainerIllistation = styled.div`
    width: 4.5rem;
    height: 4.5rem;
    &:hover {
        cursor: pointer
    }
`

export default SocialNetwork;