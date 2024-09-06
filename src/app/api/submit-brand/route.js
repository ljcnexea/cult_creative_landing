import { PrismaClient } from "@prisma/client";
import { createBrand } from "@/app/components/google-sheet-actions.js";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req) => {
  const value = await req.json();

  const data = {
    createdOn: new Date(),
    name: value.name,
    email: value.email,
    phoneNumber: value.phoneNumber.toString(),
    companyName: value.companyName,
    companySize: value.companySize,
    industry: value.industry,
    otherIndustry: value.otherIndustry,
    monthlyInfluencerBudget: value.monthlyInfluencerBudget,
  };

  try {
    await prisma.brand.create({
      data: data,
    });

    if (process.env.NODE_ENV === "production") {
      await createBrand(data);
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
    console.log(error);
    return new NextResponse(
      JSON.stringify({
        error: "Form failed to submit. Please contact our admin.",
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
