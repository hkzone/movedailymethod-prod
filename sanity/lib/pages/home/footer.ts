import { defineQuery } from 'groq';
import { sanityFetch } from '../../live';

export async function getFooterData() {
  const getFooterQuery =
    defineQuery(`*[_type == "footer" && isActive == true][0] {
    _id,
    _createdAt,
    logo,
    logoSvg,
    logoLink,
    navigationItems,
    socialLinks,
    copyrightText,
    isActive
  }`);

  const result = await sanityFetch({
    query: getFooterQuery,
  });

  return result.data;
}
