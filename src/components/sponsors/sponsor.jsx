import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

const Sponsor = ({ sponsor }) => {
    const image = getImage(sponsor.image);

    return (
        <ContainerSponsor id="sponsor">
            <a href={sponsor.link} target="_blank">
                <GatsbyImage image={image} alt={sponsor.name} />
            </a>
        </ContainerSponsor>
    );
};

const ContainerSponsor = styled.div`
    width: 30rem;
    padding: 0 6rem;
    display: inline-block;
    .gatsby-image-wrapper img {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        &:hover {
            cursor: pointer;
            -webkit-filter: none;
            filter: none;
        }
    }
    @media (max-width: 768px) {
        width: 15rem;
        padding: 0 3rem;
    }
`;

export default Sponsor;
