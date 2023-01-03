import React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

const Article = ({ article }) => (
    <div>
        <div>
        <Image fluid={article.icon.fluid} />
            <p>Leer más</p>
        </div>
        <div>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
        </div>
    </div>
)

const example = styled.section`
    
`;

export default Article;
