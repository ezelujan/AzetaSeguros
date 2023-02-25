import React from 'react';
import styled from '@emotion/styled';
import useArticles from '../../hooks/use-articles';
import Article from './article';

const Articles = () => {
    const title = "<span>Respuestas</span> para cada etapa de la <span>vida</span>";
    
    const articles = useArticles();
    if (!articles.length) return false;

    return (
        <SectionBlog id="articles">
            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
            <ContenedorArticle>
                {articles.map((article, index) => (
                    <Article 
                        index={index}
                        key={article.id}
                        article={article}
                    />
                ))}
            </ContenedorArticle>
        </SectionBlog>
    );
};

const SectionBlog = styled.section`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        text-align: center;
        line-height: 1.2;
        font-weight: 700;
        font-size: var(--fsz80);
        width: 50%;
        margin-bottom: 6rem;
        color: var(--gray);
        @media (max-width: 840px) {
            font-size: var(--fsz60);
            width: 80%;
        }
        @media (max-width: 37.5em) {
            font-size: var(--fsz50);
        }
        @media (max-width: 30em) {
            width: 95%;
        }
        span {
            color: var(--blue);
            font-weight: 700;
        }
    }
`;

const ContenedorArticle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;
    @media (max-width: 62.5em) {
        gap: 1.5rem;
    }
    @media (max-width: 840px) {
        flex-direction: column;
        gap: 4rem;
        margin-bottom: 15rem;
    }
`;

export default Articles;
