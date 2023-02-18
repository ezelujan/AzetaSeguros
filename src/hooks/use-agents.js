import { graphql, useStaticQuery } from 'gatsby';

const useAgents = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allDatoCmsAgent {
                    nodes {
                        id
                        name
                        link
                        illustration {
                            gatsbyImageData
                        }
                    }
                }
            }
        `,
    );

    return data.allDatoCmsAgent.nodes.map((agent) => ({
        id: agent.id,
        name: agent.name,
        link: agent.link,
        illustration: agent.illustration,
    }));
};

export default useAgents;
