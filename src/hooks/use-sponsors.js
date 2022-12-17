import { graphql, useStaticQuery } from 'gatsby';

const useSponsors = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allDatoCmsSponsor {
                    nodes {
                        id
                        tag
                        image {
                            fluid(maxWidth: 1200) {
                                ...GatsbyDatoCmsFluid
                            }
                        }
                    }
                }
            }
        `,
    );

    return data.allDatoCmsSponsor.nodes.map((sponsor) => ({
        id: sponsor.id,
        tag: sponsor.tag,
        image: sponsor.image,
    }));
};

export default useSponsors;
