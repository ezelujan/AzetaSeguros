import React from 'react';
import styled from '@emotion/styled';
import useArticles from '../../hooks/use-articles';
import Article from './article';

const Articles = () => {
    const title = "<span>Respuestas</span> para cada etapa de la <span>vida</span>";
    
    const articles = useArticles();
    if (!articles.length) return false;

    return (
        <SectionBlog>
            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
            <div>
                {articles.map(article => (
                    <Article 
                        key={article.id}
                        article={article}
                    />
                ))}
            </div>
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
        @media (max-width: 768px) {
            margin: 0 auto;
            text-align: center;
        }
        span {
            color: var(--blue);
            font-weight: 700;
        }
    }
`;

export default Articles;
