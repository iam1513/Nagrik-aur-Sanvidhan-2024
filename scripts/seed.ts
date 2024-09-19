import "dotenv/config";

import * as schema from "../db/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding Database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Preamble",
        imgSrc: "/image.png",
      },
      {
        id: 2,
        title: "Fundamental",
        imgSrc: "/image.png",
      },
      {
        id: 3,
        title: "Cat 3",
        imgSrc: "/image.png",
      },
      {
        id: 4,
        title: "Cat 4",
        imgSrc: "/image.png",
      },
      {
        id: 5,
        title: "Cat 5",
        imgSrc: "/image.png",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the Preamble",
        order: 1,
      },
      {
        id: 2,
        courseId: 1,
        title: "Unit 2",
        description: "Learn the Preamble",
        order: 2,
      },
      {
        id: 3,
        courseId: 1,
        title: "Unit 3",
        description: "Learn the Preamble",
        order: 3,
      },
      {
        id: 4,
        courseId: 1,
        title: "Unit 4",
        description: "Learn the Preamble",
        order: 4,
      },
      {
        id: 5,
        courseId: 1,
        title: "Unit 5",
        description: "Learn the Preamble",
        order: 5,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Article 1",
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "Article 2",
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: "Article 3",
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: "Article 4",
      },
      {
        id: 5,
        unitId: 1,
        order: 5,
        title: "Article 5",
      },
      {
        id: 6,
        unitId: 1,
        order: 6,
        title: "Article 6",
      },

      {
        id: 7,
        unitId: 1,
        order: 7,
        title: "Article 7",
      },
      {
        id: 8,
        unitId: 1,
        order: 8,
        title: "Article 8",
      },
      {
        id: 9,
        unitId: 1,
        order: 9,
        title: "Article 9",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: "Which one of this is correct?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/image.svg",
        correct: false,
        text: "ckjeabrs",
        audioSrc: "/es_man.mp3",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/image.svg",
        correct: false,
        text: "jsabsikdf",
        audioSrc: "/es_woman.mp3",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "/image.svg",
        correct: false,
        text: "aerbfvu",
        audioSrc: "/es_robot.mp3",
      },
      {
        id: 4,
        challengeId: 1,
        imageSrc: "/image.svg",
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
    ]);

    console.log("Seeding Finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
