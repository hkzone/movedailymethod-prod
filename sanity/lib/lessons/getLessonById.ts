import { defineQuery } from 'groq';
import { sanityFetch } from '../live';

export async function getLessonById(id: string) {
  const getLessonByIdQuery =
    defineQuery(`*[_type == "lesson" && _id == $id][0] {
    ...,
    "module": module->{
      ...,
      "course": course->{...}
    },
    materials[]{ // Fetch the materials array
      _key,
      title, 
      "asset": asset->{ // Access fields from the referenced asset
        url,
        originalFilename,
        size,
        extension,
        mimeType
      }
    }
  }`);

  const result = await sanityFetch({
    query: getLessonByIdQuery,
    params: { id },
    tags: [`lesson:${id}`],
  });

  return result.data;
}
