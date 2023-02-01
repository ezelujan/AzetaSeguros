import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

const Ally = ({ ally }) => {
    return (
        <ContainerIcon>
            <Image fluid={ally.icon.fluid} />
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
