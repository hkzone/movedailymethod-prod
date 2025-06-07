import { defineQuery } from 'groq';
import { sanityFetch } from '../../live';

export async function getStatsData() {
  const getStatsQuery =
    defineQuery(`*[_type == "stats" && isActive == true][0] {
    _id,
    _createdAt,
    id,
    title,
    description,
    stats,
    isActive
  }`);

  const result = await sanityFetch({
    query: getStatsQuery,
  });

  return result.data;
}
