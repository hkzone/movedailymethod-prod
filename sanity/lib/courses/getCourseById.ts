import { sanityFetch } from '../live';
import { defineQuery } from 'groq';

async function getCourseById(id: string) {
  const getCourseByIdQuery =
    defineQuery(`*[_type == "course" && _id == $id][0] {
      ...,  // Spread all course fields
      "category": category->{...},  // Expand the category reference, including all its fields
      "instructor": instructor->{...},  // Expand the instructor reference, including all its fields
      "modules": modules[]-> {  // Expand the array of module references
        ...,  // Include all module fields
        "lessons": lessons[]-> {
          ...,
          materials[]{ // Also fetch lesson materials if needed for course overview in dashboard
            _key,
            title,
            "asset": asset->{url, originalFilename, size, extension, mimeType}
          }
        }
      },
      courseMaterials[]{ // Fetch course-level materials
        _key,
        title,
        "asset": asset->{url, originalFilename, size, extension, mimeType}
      }
    }`);

  const course = await sanityFetch({
    query: getCourseByIdQuery,
    params: { id },
    tags: [`course:${id}`],
  });

  // Return just the data portion of the response
  return course.data;
}

export default getCourseById;
