import { courseType } from './courseType';
import { moduleType } from './moduleType';
import { lessonType } from './lessonType';
import { instructorType } from './instructorType';
import { blockContent } from './blockContent';
import { studentType } from './studentType';
import { enrollmentType } from './enrollmentType';
import { categoryType } from './categoryType';
import { lessonCompletionType } from './lessonCompletionType';
import { heroType } from './heroType';
import { featuresType } from './featuresType';
import { benefitsType } from './benefitsType';
import { statsType } from './statsType';
import { testimonialsType } from './testimonialsType';
import { ctaType } from './ctaType';
import { transformationGalleryType } from './transformationGalleryType';
import { faqType } from './faqType';
import { footerType } from './footerType';
import { headerType } from './headerType';
import { coursesSectionType } from './coursesSectionType';
export const schema = {
    types: [
        courseType,
        moduleType,
        lessonType,
        instructorType,
        blockContent,
        studentType,
        enrollmentType,
        categoryType,
        lessonCompletionType,
        heroType,
        featuresType,
        benefitsType,
        statsType,
        testimonialsType,
        ctaType,
        transformationGalleryType,
        faqType,
        footerType,
        headerType,
        coursesSectionType,
    ],
};
export * from './courseType';
export * from './moduleType';
export * from './lessonType';
export * from './instructorType';
export * from './studentType';
export * from './enrollmentType';
export * from './categoryType';
export * from './lessonCompletionType';
export * from './heroType';
export * from './featuresType';
export * from './benefitsType';
export * from './statsType';
export * from './testimonialsType';
export * from './ctaType';
export * from './transformationGalleryType';
export * from './faqType';
export * from './footerType';
export * from './headerType';
export * from './coursesSectionType';
