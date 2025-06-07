import { sanityFetch } from '../live';
import { defineQuery } from 'groq';

export interface CoursesSectionData {
  header: {
    tagline: string;
    title: string;
    description: string;
  };
  buttonText: string;
  buttonLink: string;
}

export async function getCoursesSection() {
  const coursesSectionQuery = defineQuery(`*[_type == "coursesSection"][0] {
    id,
    header,
    buttonText,
    buttonLink
  }`);

  const result = await sanityFetch({ query: coursesSectionQuery });

  // Default values in case no document exists yet
  const defaultData: CoursesSectionData = {
    header: {
      tagline: 'Courses',
      title: 'Courses',
      description: 'Explore our comprehensive fitness courses today!',
    },
    buttonText: 'View all',
    buttonLink: '/courses',
  };

  return result.data || defaultData;
}
