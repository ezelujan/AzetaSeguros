import { graphql, useStaticQuery } from 'gatsby';

const useSponsors = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allDatoCmsSponsor {
                    nodes {
                        id
                        name
                        link
                        image {
                            gatsbyImageData
                        }
                    }
                }
            }
        `,
    );

    return data.allDatoCmsSponsor.nodes.map((sponsor) => ({
        id: sponsor.id,
        name: sponsor.name,
        link: sponsor.link,
        image: sponsor.image,
    }));
};

export default useSponsors;
