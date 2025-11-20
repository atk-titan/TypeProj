import { getParagraph } from "@/lib/dbService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const paragraph = await getParagraph();

    console.log("get request data:"+ paragraph);

    return NextResponse.json({
        paragraph
    },{
        status:200
    })
}