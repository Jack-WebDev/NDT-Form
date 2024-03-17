import knex from "knex";
import { NextResponse } from "next/server";
// import { db } from "../../models/dbConfig/connection";
const knexfile = require("../../../db/knexfile")
const db = knex(knexfile.development)

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const propertyName = formData.get("propertyName")
    const propertyID = formData.get("propertyID")
    const propertyAddress = formData.get("propertyAddress")
    const requestorID = formData.get("requestorID")
    const requestorName = formData.get("requestorName")
    const requestorJobTitle = formData.get("requestorJobTitle")
    const desiredOutcome = formData.get("desiredOutcome")
    const changeDescriptonDetails = formData.get("changeDescriptionDetails")
    const date = formData.get("date")
    const priority = formData.get("priority")
    const reasonForChange = formData.get("reasonForChange")
    const uploads = formData.get("uploads")

    await db('ndt_form').insert({propertyID, propertyAddress, propertyName,changeDescriptonDetails, reasonForChange,desiredOutcome, requestorID, requestorName, requestorJobTitle,date, priority, uploads})

    
    return Response.json({propertyID, propertyAddress, propertyName,changeDescriptonDetails, reasonForChange,desiredOutcome, requestorID, requestorName, requestorJobTitle,date, priority})
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
