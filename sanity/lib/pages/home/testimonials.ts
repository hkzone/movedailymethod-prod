import { defineQuery } from 'groq';
import { sanityFetch } from '../../live';

export async function getTestimonialsData() {
  const getTestimonialsQuery =
    defineQuery(`*[_type == "testimonials" && isActive == true][0] {
    _id,
    _createdAt,
    id,
    quote,
    author,
    rating,
    isActive
  }`);

  const result = await sanityFetch({
    query: getTestimonialsQuery,
  });

  return result.data;
}
