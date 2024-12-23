import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/stick-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
} from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./unit";
import { Sidebar } from "@/components/sidebar";

export default async function LearnPage() {
  const userProgressData = getUserProgress();
  const unitsData = getUnits();
  const courseProgressData = getCourseProgress();
  const lessonPercentageData = getLessonPercentage();

  const [userProgess, units, courseProgress, lessonPercentage] =
    await Promise.all([
      userProgressData,
      unitsData,
      courseProgressData,
      lessonPercentageData,
    ]);

  if (!userProgess || !userProgess.activeCourse || !courseProgress) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6 ">
      <Sidebar className="hidden lg:flex pt-20 mt-2" />
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgess.activeCourse}
          hearts={userProgess.hearts}
          points={userProgess.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgess.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id} className="lg:w-[500px] mb-10 lg:ml-60">
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={courseProgress?.activeLesson}
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
}
