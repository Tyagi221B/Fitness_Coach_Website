import {connect} from "@/dbConfig/dbConfig";
import userInfo from "@/models/userInfo.model";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email, phone} = reqBody
        console.log(reqBody);

        const userEmail = await userInfo.findOne({email})
        const userPhone = await userInfo.findOne({phone})

        if(userEmail){
            return NextResponse.json({error: "Your email is already registered with us, Please Enter New Email"}, {status: 400})
        }
        if(userPhone){
            return NextResponse.json({error: "Your Phone is already registered with us, Please give another Phone Number"}, {status: 400})
        }

        const newUser = new userInfo({
            email,
            phone
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