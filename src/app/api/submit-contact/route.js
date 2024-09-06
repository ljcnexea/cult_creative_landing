import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req) => {
  const { name, email, subject, message } = await req.json();

  const data = {
    createdOn: new Date(),
    name,
    email,
    subject,
    message,
  };

  console.log("Data to be saved:", data);

  try {
 
    const savedContact = await prisma.contact.create({
      data,
    });

    console.log("Saved Contact:", savedContact);

    return new NextResponse(
      JSON.stringify({
        message: `Message received. Thank you, ${name}!`,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {

    console.error("Error saving message:", error);

    return new NextResponse(
      JSON.stringify({
        error: "Failed to submit message. Please try again later.",
      }),
      {
        status: 500,
      }
    );
  }
};
