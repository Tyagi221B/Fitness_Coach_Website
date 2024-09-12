import {connect} from "@/dbConfig/dbConfig";
import userInfo from "@/models/userInfo.model";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email} = reqBody
        console.log(reqBody);

        const userEmail = await userInfo.findOne({email})

        if(userEmail){
            return NextResponse.json({error: "Your email is already registered with us, Please Enter New Email"}, {status: 400})
        }
        

        const newUser = new userInfo({
            email
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({
            message: "Your Email is saved successfully",
            success: true,
            savedUser
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}