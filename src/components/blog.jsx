import React from 'react';
import styled from '@emotion/styled';

const Blog = () => {
    const title = "<span>Respuestas</span> para cada etapa de la <span>vida</span>";

    return (
        <SectionBlog>
            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Leer más</p>
                    </div>
                    <div>
                        <h2>Planificando una vida juntos</h2>
                        <p>Agregar a su familia significa agregar a sus necesidades financieras. Estamos aquí para guiarlo mientras trabaja para asegurar el futuro de sus seres queridos.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Leer más</p>
                    </div>
                    <div>
                        <h2>Creciendo tu familia</h2>
                        <p>Agregar a su familia significa agregar a sus necesidades financieras. Estamos aquí para guiarlo mientras trabaja para asegurar el futuro de sus seres queridos.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Leer más</p>
                    </div>
                    <div>
                        <h2>Habicia la jubilación</h2>
                        <p>Agregar a su familia significa agregar a sus necesidades financieras. Estamos aquí para guiarlo mientras trabaja para asegurar el futuro de sus seres queridos.</p>
                    </div>
                </div>
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

export default Blog;
