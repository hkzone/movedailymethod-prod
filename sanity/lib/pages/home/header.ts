import { defineQuery } from 'groq';
import { sanityFetch } from '../../live';

export async function getHeaderData() {
  const getHeaderQuery =
    defineQuery(`*[_type == "header" && isActive == true][0] {
    _id,
    _createdAt,
     logo,
    logoSvg,
    logoLink,
    navigationItems,
    isActive
  }`);

  const result = await sanityFetch({
    query: getHeaderQuery,
  });

  return result.data;
}
