import React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const colors = ['#FFF8E1', '#EDEFFF', '#FFF3EF'];

const Article = ({ article, index }) => (
    <ContenedorArticle>
        <Header 
            css={css`
                background-color: ${colors[index]};
            `}
        >
            <ContainerImage
                css={css`
                    padding: ${index === 2 ? '0 1rem' : '0'};
                `}
            >
                <Image fluid={article.icon.fluid} />
            </ContainerImage>
            <a>Leer más</a>
        </Header>
        <Text>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
        </Text>
    </ContenedorArticle>
)

const ContenedorArticle = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    box-shadow: 0px 0px 50px rgba(139, 141, 164, 0.17);
    border-radius: 2rem;
    margin-bottom: 15rem;
    padding: 2.5rem 0;
`;

const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    text-align: right;
    padding: 1rem 3rem;
    margin-bottom: 2rem;
    a {
        color: var(--orange);
        font-size: var(--fsz20);
        text-transform: uppercase;
        font-weight: 500;
        text-decoration: none;
        outline: none;
        cursor: pointer;
    }
`

const ContainerImage = styled.div`
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Text = styled.div`
    padding: 0 3rem;
    h2 {
        font-size: var(--fsz30);
        margin-bottom: 2rem;
        font-weight: 500;
        color: var(--gray);
    }
    p {
        color: var(--gray80);
        font-size: var(--fsz20);
        font-weight: 400;
    }
`;

export default Article;
