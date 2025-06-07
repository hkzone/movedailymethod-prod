import { defineQuery } from 'groq';
import { sanityFetch } from '../../live';

export async function getFeaturesData() {
  const getFeaturesQuery =
    defineQuery(`*[_type == "features" && isActive == true][0] {
      _id,
      _createdAt,
      id,
      header,
      leftColumn {
        mainSection,
        featureBoxes
      },
      rightColumn {
        imageSection,
        programsSection
      },
      isActive
    }`);

  const result = await sanityFetch({
    query: getFeaturesQuery,
  });

  return result.data;
}
