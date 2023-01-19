import React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

const SocialNetwork = ({ network }) => {
    return (
        <ContainerIllistation>
            <Image fluid={network.icon.fluid}/>
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