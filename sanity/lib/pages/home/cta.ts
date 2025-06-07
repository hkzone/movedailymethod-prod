import { defineQuery } from 'groq';
import { sanityFetch } from '../../live';

export async function getCtaData() {
  const getCtaQuery = defineQuery(`*[_type == "cta" && isActive == true][0] {
    _id,
    _createdAt,
    id,
    title,
    description,
    primaryButton,
    secondaryButton,
    image,
    isActive
  }`);

  const result = await sanityFetch({
    query: getCtaQuery,
  });

  return result.data;
}
