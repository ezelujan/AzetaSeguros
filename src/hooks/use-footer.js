import { graphql, useStaticQuery } from 'gatsby';

const useFooter = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allDatoCmsSocialnetwork {
                    nodes {
                        id
                        name
                        link
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

    return data.allDatoCmsSocialnetwork.nodes.map((network) => ({
        id: network.id,
        name: network.name,
        link: network.link,
        icon: network.icon,
    }));
};

export default useFooter;
