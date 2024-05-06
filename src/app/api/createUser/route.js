import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  const value = await req.json();

  try {
    await prisma.creator.create({
      data: {
        name: value.name,
        pronoun: value.pronoun,
        phoneNumber: value.phoneNumber.toString(),
        email: value.email,
        nationality: value.nationality,
        location: value.location,
        birthDate: new Date(value.birthDate),
        instaUsername: value.instaUsername,
        tiktokUsername: value.tiktokUsername,
        languages: value.languages,
        otherlanguagesString: value.otherlanguagesString,
        interests: value.interests,
        otherinterestsString: value.otherinterestsString,
        employmentType: value.employmentType,
        otherEmploymentType: value.otherEmploymentType,
      },
    });

    return new NextResponse(
      JSON.stringify({
        message: `Submitted. Thanks, ${value.name}!`,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: "Error" }), {
      status: 404,
    });
  }
}

export async function GET() {
  return new NextResponse(
    JSON.stringify({
      message: "Hello",
    }),
    {
      status: 200,
    }
  );
}
