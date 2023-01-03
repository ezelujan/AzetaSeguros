import { graphql, useStaticQuery } from 'gatsby';

const useArticles = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allDatoCmsArticle {
                    nodes {
                        id
                        title
                        description
                        icon {
                            fluid(imgixParams: { fm: "png", auto: "compress" }) {
                                ...GatsbyDatoCmsFluid
                            }
                        }
                    }
                }
            }
        `,
    );

    return data.allDatoCmsArticle.nodes.map((article) => ({
        id: article.id,
        title: article.title,
        description: article.description,
        icon: article.icon,
    }));
};

export default useArticles;
