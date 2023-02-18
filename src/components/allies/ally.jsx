import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Ally = ({ ally }) => {
    const image = getImage(ally.icon);
    return (
        <ContainerIcon>
            <a href={ally.link} target='_blank'>
                <GatsbyImage image={image} alt={ally.name} />
            </a>
        </ContainerIcon>
    );
};

const ContainerIcon = styled.div`
    width: 14rem;
    .gatsby-image-wrapper img {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        &:hover {
            cursor: pointer;
            -webkit-filter: none;
            filter: none;
        }
    }
`;

export default Ally;
