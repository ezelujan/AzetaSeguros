import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useProducts from '../../hooks/use-products';
import Product from './product';
import useScreenSize from '../../hooks/use-screen';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Products = () => {
    const { allDatoCmsAsset } = useStaticQuery(
        graphql`
            query {
                allDatoCmsAsset(filter: { basename: { eq: "right-arrow" } }) {
                    nodes {
                        notes
                        fluid(maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        `,
    );
    
    const products = useProducts();
    if (!products.length) return false;

    const { width } = useScreenSize();
    const [swiperRef, setSwiperRef] = useState();
    const [countProduts, setCountProduts] = useState(products.length);
    const [maxSlides, setMaxSlides] = useState(countProduts);

    useEffect(() => {
        if (countProduts >= 5 && width < 2300) setMaxSlides(5)
        if (countProduts >= 4 && width < 2000) setMaxSlides(4)
        if (countProduts >= 3 && width < 1500) setMaxSlides(3)
        if (countProduts >= 2 && width < 1300) setMaxSlides(2)
        if (countProduts >= 1 && width < 1000) setMaxSlides(1)
    }, [width]);

    const handlePrevious = useCallback(() => {
        swiperRef?.slidePrev();
    }, [swiperRef]);

    const handleNext = useCallback(() => {
        swiperRef?.slideNext();
    }, [swiperRef]);

    return (
        <Background>
            <ContainerProducts id="productos">
                {products.length > maxSlides && maxSlides > 1 ? (
                    <Img
                        onClick={handlePrevious}
                        src={allDatoCmsAsset.nodes[0].fluid.src}
                        alt={allDatoCmsAsset.nodes[0].notes}
                        fetchpriority="low"
                        rotateImg={true}
                    />
                ) : null}
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={maxSlides}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Product key={product.id} product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {products.length > maxSlides && maxSlides > 1 ? (
                    <Img
                        onClick={handleNext}
                        src={allDatoCmsAsset.nodes[0].fluid.src}
                        alt={allDatoCmsAsset.nodes[0].notes}
                        fetchpriority="low"
                    />
                ) : null}
            </ContainerProducts>
        </Background>
    );
};

export const Background = styled.div`
    background-color: var(--bgHeader);
    padding: 10rem 15rem;
`;

export const ContainerProducts = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    /* display: grid; */
    /* grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr)); */
`;

const Img = styled.img`
    width: 4rem;
    height: 4rem;
    background: var(--white);
    padding: 1rem;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.2s ease;
    transform: ${(props) => (props.rotateImg ? 'rotate(180deg)' : 'none')};
    &:hover {
        background: rgb(245, 245, 245);
    }
`;

export const Button = styled.a`
    display: block;
    width: auto;
    outline: none;
    color: ${(props) => (props.bg ? 'var(--white)' : 'var(--orange)')};
    cursor: pointer;
    font-weight: 400;
    border-radius: 0.5rem;
    font-size: var(--fsz20);
    padding: 1rem 2.5rem;
    text-decoration: none;
    text-transform: uppercase;
    border: 2px solid var(--orange);
    border-radius: 5px;
    background-color: ${(props) => (props.bg ? 'var(--orange)' : 'transparent')};
    transition: all 0.2s ease;
    &:hover {
        background-color: var(--orange);
        color: var(--white);
    }
`;

export default Products;
