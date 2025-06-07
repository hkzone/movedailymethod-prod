import { defineQuery } from 'groq';
import { sanityFetch } from '../../live';

export async function getHeroData() {
  const getHeroQuery = defineQuery(`*[_type == "hero" && isActive == true][0] {
  id,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  image,
  contentAlignment
}`);

  const result = await sanityFetch({
    query: getHeroQuery,
  });

  return result.data;
}
