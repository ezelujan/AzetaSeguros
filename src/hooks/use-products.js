import { graphql, useStaticQuery } from 'gatsby';

const useProducts = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allDatoCmsProduct {
                    nodes {
                        id
                        title
                        link
                        description
                        icon {
                            fluid {
                                ...GatsbyDatoCmsFluid
                            }
                        }
                    }
                }
            }
        `,
    );

    return data.allDatoCmsProduct.nodes.map((product) => ({
        id: product.id,
        title: product.title,
        link: product.link,
        description: product.description,
        icon: product.icon,
    }));
};

export default useProducts;
