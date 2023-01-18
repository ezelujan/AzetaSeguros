import { graphql, useStaticQuery } from 'gatsby';

const useProducts = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allDatoCmsProduct {
                    nodes {
                        id
                        title
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
        description: product.description,
        icon: product.icon,
    }));
};

export default useProducts;
