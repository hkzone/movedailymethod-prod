import { client } from '../adminClient';

interface CreateEnrollmentParams {
  studentId: string;
  courseId: string;
  paymentId: string;
  amount: number;
  paymentProvider: string;
}

export async function createEnrollment({
  studentId,
  courseId,
  paymentId,
  amount,
  paymentProvider,
}: CreateEnrollmentParams) {
  return client.create({
    _type: 'enrollment',
    student: {
      _type: 'reference',
      _ref: studentId,
    },
    course: {
      _type: 'reference',
      _ref: courseId,
    },
    paymentId,
    paymentProvider,
    amount,
    enrolledAt: new Date().toISOString(),
  });
}
