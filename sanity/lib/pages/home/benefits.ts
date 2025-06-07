import { defineQuery } from 'groq';
import { sanityFetch } from '../../live';

export async function getBenefitsData() {
  const getBenefitsQuery =
    defineQuery(`*[_type == "benefits" && isActive == true][0] {
      _id,
      _createdAt,
      id,
      tagline,
      title,
      description,
      primaryButton,
      secondaryButton,
      image,
      isActive
    }`);

  const result = await sanityFetch({
    query: getBenefitsQuery,
  });

  return result.data;
}
