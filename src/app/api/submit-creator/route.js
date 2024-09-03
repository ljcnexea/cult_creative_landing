import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { createCreator } from "@/app/components/google-sheet-actions.js";

const prisma = new PrismaClient();

export const POST = async (req) => {
  const value = await req.json();

  const data = {
    createdOn: new Date(),
    name: value.name,
    pronoun: value.pronoun,
    phoneNumber: value.phoneNumber.toString(),
    email: value.email,
    nationality: value.nationality,
    location: value.location,
    dateOfBirth: new Date(value.dateOfBirth),
    languages: value.languages,
    otherlanguagesString: value.otherlanguagesString,
    interests: value.interests,
    otherinterestsString: value.otherinterestsString,
    employmentType: value.employmentType,
    otherEmploymentType: value.otherEmploymentType,
    instaUsername: value.instaUsername,
    tiktokUsername: value.tiktokUsername,
  };

  try {
    await prisma.creator.create({
      data: data,
    });

    if (process.env.NODE_ENV === "production") {
      data.languages = data.languages.toString();
      data.interests = data.interests.toString();
      await createCreator(data);
    }

    return new NextResponse(
      JSON.stringify({
        message: `Submitted. Thanks, ${value.name}!`,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error",
      }),
      {
        status: 404,
      }
    );
  }
};

export const GET = async () =>
  new NextResponse(
    JSON.stringify({
      message: "Hello",
    }),
    {
      status: 200,
    }
  );
