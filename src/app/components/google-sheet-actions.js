"use server";

import { google } from "googleapis";

const spreadsheetId = "14Nod3ZiuWESbmDUXFEv7E5z5l-OZadhOI3dZhxl6Tn4";

const getService = async () => {
  // const auth = await google.auth.getClient({
  //   projectId: process.env.GOOGLE_PROJECT_ID,
  //   credentials: {
  //     type: "service_account",
  //     project_id: process.env.GOOGLE_PROJECT_ID,
  //     private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  //     private_key: process.env.GOOGLE_PRIVATE_KEY,
  //     client_email: process.env.GOOGLE_CLIENT_EMAIL,
  //     client_id: process.env.GOOGLE_CLIENT_ID,
  //     auth_uri: "https://accounts.google.com/o/oauth2/auth",
  //     token_uri: "https://oauth2.googleapis.com/token",
  //     auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  //     client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
  //   },
  //   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  // });
  const auth = new google.auth.GoogleAuth({
    credentials: {
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
};

export const createBrand = async (values) => {
  const service = await getService();
  try {
    await service.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      valueInputOption: "RAW",
      range: "Brands!A2",
      requestBody: {
        values: [[...Object.values(values)]],
      },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createCreator = async (values) => {
  const service = await getService();
  try {
    await service.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      valueInputOption: "RAW",
      range: "Creators!A2",
      requestBody: {
        values: [[...Object.values(values)]],
      },
    });
    console.log(values);
  } catch (error) {
    console.log(error);
    return error;
  }
};
