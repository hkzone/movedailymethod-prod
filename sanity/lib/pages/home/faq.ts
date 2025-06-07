import { defineQuery } from 'groq';
import { sanityFetch } from '../../live';

export async function getFaqData() {
  const getFaqQuery = defineQuery(`*[_type == "faq" && isActive == true][0] {
    _id,
    _createdAt,
    title,
    description,
    contactButtonText,
    contactButtonLink,
    questions,
    isActive
  }`);

  const result = await sanityFetch({
    query: getFaqQuery,
  });

  return result.data;
}
