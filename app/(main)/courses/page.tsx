import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";

const CoursePage = async () => {
  const courses = await getCourses();
  const userProgess = await getUserProgress();

  return (
    <div className="h-full max-w-[912px] px-4 mx-auto">

      {/* PAGE HEADING */}
      <div className="mt-10 mb-8">
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
          Courses
        </h1>

        <p className="text-sm text-gray-400 max-w-xl leading-relaxed">
          Learn the Constitution of India through structured courses,
          progressive lessons, and practical understanding.
        </p>
      </div>

      {/* SECTION LABEL */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-300 tracking-wide">
          Available Courses
        </h2>

        {userProgess?.activeCourseId && (
          <span className="text-xs text-amber-400 font-medium">
            Active course highlighted
          </span>
        )}
      </div>

      {/* LIST (NO BACKGROUND ADDED) */}
      <div className="space-y-2">
        <List
          courses={courses}
          activeCourseId={userProgess?.activeCourseId}
        />
      </div>
    </div>
  );
};

export default CoursePage;
