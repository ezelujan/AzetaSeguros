import React from 'react';
import styled from '@emotion/styled';
import useSponsors from '../../hooks/use-sponsors';
import Sponsor from './sponsor';

const Sponsors = () => {
    const sponsors = useSponsors();
    if (!sponsors.length) return false;

    const scrollSlider = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + slider.scrollWidth / (sponsors.length * 1.1);
    };

    return (
        <ListadoSponsors>
            <Slider id="slider">
                {sponsors.map(sponsor => (
                    <Sponsor
                        key={sponsor.id}
                        sponsor={sponsor}
                    />
                ))}
            </Slider>
        </ListadoSponsors>
    );
};

const ListadoSponsors = styled.div`
    width: 95%;
    max-width: 1200px;
    margin: 6rem auto;
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const Slider = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {display: none;}
`;

export default Sponsors;
