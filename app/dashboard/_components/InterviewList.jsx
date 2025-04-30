"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';

function InterviewList() {

    const { user } = useUser();
    const [interviewList, setInterviewList] = useState([]);

    useEffect(() => {
        if (user) GetInterviewList();
    }, [user]);

    const GetInterviewList = async () => {
        const result = await db.select()
            .from(MockInterview)
            .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress))
            .orderBy(desc(MockInterview.id));

        console.log(result);
        setInterviewList(result);
    }

    return (
        <div>
            <h2 className="font-semibold text-2xl text-blue-700 mb-6">Previous Mock Interviews</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
                {interviewList?.length > 0 ? interviewList.map((interview, index) => (
                    <InterviewItemCard
                        interview={interview}
                        key={index}
                    />
                )) :
                    [1, 2, 3, 4].map((item, index) => (
                        <div key={index} className="h-[160px] w-full bg-gradient-to-br from-gray-100 to-blue-50 animate-pulse rounded-lg shadow-sm">
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default InterviewList;
