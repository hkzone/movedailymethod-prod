import { defineQuery } from 'groq';
import { sanityFetch } from '../../live';

export async function getTransformationGalleryData() {
  const getTransformationGalleryQuery =
    defineQuery(`*[_type == "transformationGallery" && isActive == true][0] {
    _id,
    _createdAt,
    id,
    tagline,
    title,
    subtitle,
    ctaButton,
    transformations[] {
      name,
      age,
      duration,
      weightLoss,
      weightUnit,
      testimonial,
      beforeImage,
      afterImage,
      rating
    },
    isActive
  }`);

  const result = await sanityFetch({
    query: getTransformationGalleryQuery,
  });

  return result.data;
}
