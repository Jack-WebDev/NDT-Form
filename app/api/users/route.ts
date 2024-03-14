import { NextRequest, NextResponse } from "next/server";
import {db} from "../../models/dbConfig/connection"

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {propertyID, propertyAddress, propertyName, changeDescriptonDetails, reasonForChange,desiredOutcome, requestorID, requestorName, requestorJobTitle,date, priority, uploads} = reqBody;
        console.log(reqBody);

        // await db('ndt_form').insert({propertyID, propertyAddress, propertyName,changeDescriptonDetails, reasonForChange,desiredOutcome, requestorID, requestorName, requestorJobTitle,date, priority, uploads})



        const response = NextResponse.json({
            message: "Submission successful",
            success: true,
            reqBody
        })

        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

