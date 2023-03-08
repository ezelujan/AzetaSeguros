import { graphql, useStaticQuery } from 'gatsby';

const useBenefits = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allDatoCmsBenefit {
                    nodes {
                        id
                        title
                        subtitle
                        description
                    }
                }
            }
        `,
    );

    return data.allDatoCmsBenefit.nodes.map((benefit) => ({
        id: benefit.id,
        title: benefit.title,
        subtitle: benefit.subtitle,
        description: benefit.description,
    }));
};

export default useBenefits;
