import { graphql, useStaticQuery } from 'gatsby';

const useAllies = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allDatoCmsAlly {
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

    return data.allDatoCmsAlly.nodes.map((ally) => ({
        id: ally.id,
        name: ally.name,
        link: ally.link,
        icon: ally.icon,
    }));
};

export default useAllies;
