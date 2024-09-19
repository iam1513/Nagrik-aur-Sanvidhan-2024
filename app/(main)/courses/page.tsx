import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";

const CoursePage = async () => {
  const courses = await getCourses();
  const userProgess = await getUserProgress();

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Courses Page</h1>
      <List courses={courses} activeCourseId={userProgess?.activeCourseId} />
    </div>
  );
};

export default CoursePage;
