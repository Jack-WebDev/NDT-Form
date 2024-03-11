import { NextRequest, NextResponse } from "next/server";
import {db} from "../../models/dbConfig/connection"

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {name, email} = reqBody;
        // const {propertyID, propertyAddress, propertyName, changeRequired, changeDescriptonDetails, reasonForChange,desiredOutcome, requestorID, requestorName, requestorJobTitle,date, priority, uploads} = reqBody;
        console.log(reqBody);



        // await db('ndt_form').insert({propertyID, propertyAddress, propertyName, changeRequired, changeDescriptonDetails, reasonForChange,desiredOutcome, requestorID, requestorName, requestorJobTitle,date, priority, uploads})



        const response = NextResponse.json({
            message: "Submission successful",
            success: true,
            name: name,
            email: email
        })

        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

