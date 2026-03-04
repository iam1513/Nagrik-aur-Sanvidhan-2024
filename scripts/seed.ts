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

    await db.delete(schema.challengeOptions);
    await db.delete(schema.challenges);
    await db.delete(schema.lessons);
    await db.delete(schema.units);
    await db.delete(schema.userProgress);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.courses);

    // ---------------- COURSES ----------------
    await db.insert(schema.courses).values([
      { id: 1, title: "Preamble of India", imgSrc: "/image.png" },
      { id: 2, title: "Fundamental Rights", imgSrc: "/image.png" },
      { id: 3, title: "Directive Principles of State Policy", imgSrc: "/image.png" },
      { id: 4, title: "Fundamental Duties", imgSrc: "/image.png" },
      { id: 5, title: "Union Government", imgSrc: "/image.png" },
    ]);

    // ---------------- UNITS ----------------
    await db.insert(schema.units).values([
      { id: 1, courseId: 1, title: "Meaning of Preamble", description: "Introduction and purpose", order: 1 },
      { id: 2, courseId: 1, title: "Key Ideals", description: "Liberty, Equality, Justice", order: 2 },

      { id: 3, courseId: 2, title: "Right to Equality", description: "Articles 14–18", order: 1 },
      { id: 4, courseId: 2, title: "Right to Freedom", description: "Articles 19–22", order: 2 },

      { id: 5, courseId: 3, title: "Socialist Principles", description: "Welfare of people", order: 1 },

      { id: 6, courseId: 4, title: "Citizens' Duties", description: "Article 51A", order: 1 },
    ]);

    // ---------------- LESSONS ----------------
    await db.insert(schema.lessons).values([
      { id: 1, unitId: 1, order: 1, title: "What is the Preamble?" },
      { id: 2, unitId: 1, order: 2, title: "Objectives of the Preamble" },

      { id: 3, unitId: 2, order: 1, title: "Justice: Social, Economic, Political" },
      { id: 4, unitId: 2, order: 2, title: "Liberty and Equality" },

      { id: 5, unitId: 3, order: 1, title: "Article 14 – Equality before Law" },
      { id: 6, unitId: 3, order: 2, title: "Article 15 – Prohibition of Discrimination" },

      { id: 7, unitId: 4, order: 1, title: "Article 19 – Six Freedoms" },

      { id: 8, unitId: 6, order: 1, title: "List of Fundamental Duties" },
    ]);

    // ---------------- CHALLENGES (4–5 PER LESSON) ----------------
    await db.insert(schema.challenges).values([
      // Lesson 1
      { id: 1, lessonId: 1, type: "SELECT", order: 1, question: "The Preamble of India declares India as which type of State?" },
      { id: 2, lessonId: 1, type: "SELECT", order: 2, question: "The Preamble begins with which words?" },
      { id: 3, lessonId: 1, type: "SELECT", order: 3, question: "From where does the Constitution derive its authority?" },
      { id: 4, lessonId: 1, type: "SELECT", order: 4, question: "Is the Preamble a part of the Constitution?" },

      // Lesson 3
      { id: 5, lessonId: 3, type: "SELECT", order: 1, question: "Which types of justice are mentioned in the Preamble?" },
      { id: 6, lessonId: 3, type: "SELECT", order: 2, question: "Social justice mainly aims to reduce?" },
      { id: 7, lessonId: 3, type: "SELECT", order: 3, question: "Economic justice focuses on?" },
      { id: 8, lessonId: 3, type: "SELECT", order: 4, question: "Political justice ensures?" },

      // Lesson 5
      { id: 9, lessonId: 5, type: "SELECT", order: 1, question: "Article 14 guarantees?" },
      { id: 10, lessonId: 5, type: "SELECT", order: 2, question: "Equality before law applies to?" },
      { id: 11, lessonId: 5, type: "SELECT", order: 3, question: "Which article abolishes untouchability?" },
      { id: 12, lessonId: 5, type: "SELECT", order: 4, question: "Article 18 deals with?" },

      // Lesson 7
      { id: 13, lessonId: 7, type: "SELECT", order: 1, question: "How many freedoms are guaranteed under Article 19?" },
      { id: 14, lessonId: 7, type: "SELECT", order: 2, question: "Freedom of speech comes under?" },
      { id: 15, lessonId: 7, type: "SELECT", order: 3, question: "Which freedom allows peaceful protest?" },
      { id: 16, lessonId: 7, type: "SELECT", order: 4, question: "Article 19 freedoms are available to?" },

      // Lesson 8
      { id: 17, lessonId: 8, type: "SELECT", order: 1, question: "Fundamental Duties are mentioned in which Article?" },
      { id: 18, lessonId: 8, type: "SELECT", order: 2, question: "How many Fundamental Duties exist currently?" },
      { id: 19, lessonId: 8, type: "SELECT", order: 3, question: "Fundamental Duties were added by which amendment?" },
      { id: 20, lessonId: 8, type: "SELECT", order: 4, question: "Fundamental Duties are inspired by which country?" },
    ]);

    // ---------------- CHALLENGE OPTIONS ----------------
    await db.insert(schema.challengeOptions).values([
      { id: 1, challengeId: 1, correct: true, text: "Sovereign Socialist Secular Democratic Republic" },
      { id: 2, challengeId: 1, correct: false, text: "Federal Monarchy" },

      { id: 3, challengeId: 2, correct: true, text: "We, the people of India" },
      { id: 4, challengeId: 2, correct: false, text: "In the name of God" },

      { id: 5, challengeId: 3, correct: true, text: "The people of India" },
      { id: 6, challengeId: 3, correct: false, text: "The Parliament" },

      { id: 7, challengeId: 4, correct: true, text: "Yes" },
      { id: 8, challengeId: 4, correct: false, text: "No" },

      { id: 9, challengeId: 5, correct: true, text: "Social, Economic and Political" },
      { id: 10, challengeId: 5, correct: false, text: "Only Social" },

      { id: 11, challengeId: 6, correct: true, text: "Social inequality" },
      { id: 12, challengeId: 6, correct: false, text: "Political instability" },

      { id: 13, challengeId: 7, correct: true, text: "Fair distribution of wealth" },
      { id: 14, challengeId: 7, correct: false, text: "Military equality" },

      { id: 15, challengeId: 8, correct: true, text: "Equal political rights" },
      { id: 16, challengeId: 8, correct: false, text: "Religious freedom only" },

      { id: 17, challengeId: 9, correct: true, text: "Equality before law" },
      { id: 18, challengeId: 9, correct: false, text: "Freedom of religion" },

      { id: 19, challengeId: 10, correct: true, text: "All persons" },
      { id: 20, challengeId: 10, correct: false, text: "Only citizens" },

      { id: 21, challengeId: 11, correct: true, text: "Article 17" },
      { id: 22, challengeId: 11, correct: false, text: "Article 15" },

      { id: 23, challengeId: 12, correct: true, text: "Abolition of titles" },
      { id: 24, challengeId: 12, correct: false, text: "Right to property" },

      { id: 25, challengeId: 13, correct: true, text: "Six" },
      { id: 26, challengeId: 13, correct: false, text: "Seven" },

      { id: 27, challengeId: 14, correct: true, text: "Article 19(1)(a)" },
      { id: 28, challengeId: 14, correct: false, text: "Article 21" },

      { id: 29, challengeId: 15, correct: true, text: "Freedom of assembly" },
      { id: 30, challengeId: 15, correct: false, text: "Freedom of religion" },

      { id: 31, challengeId: 16, correct: true, text: "Citizens only" },
      { id: 32, challengeId: 16, correct: false, text: "All persons" },

      { id: 33, challengeId: 17, correct: true, text: "Article 51A" },
      { id: 34, challengeId: 17, correct: false, text: "Article 19" },

      { id: 35, challengeId: 18, correct: true, text: "11" },
      { id: 36, challengeId: 18, correct: false, text: "10" },

      { id: 37, challengeId: 19, correct: true, text: "42nd Amendment" },
      { id: 38, challengeId: 19, correct: false, text: "44th Amendment" },

      { id: 39, challengeId: 20, correct: true, text: "USSR" },
      { id: 40, challengeId: 20, correct: false, text: "USA" },
    ]);

    console.log("Seeding Finished ✅");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
