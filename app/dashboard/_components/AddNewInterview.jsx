"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModal'
import { LoaderCircle } from 'lucide-react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

function AddNewInterview() {
    const [openDailog, setOpenDailog] = useState(false)
    const [jobPosition, setJobPosition] = useState()
    const [jobDesc, setJobDesc] = useState()
    const [jobExperience, setJobExperience] = useState()
    const [loading, setLoading] = useState(false)
    const [jsonResponse, setJsonResponse] = useState([])
    const router = useRouter()
    const { user } = useUser()

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const InputPrompt = `Job position: ${jobPosition}, Job Description: ${jobDesc}, Years of Experience: ${jobExperience}. Based on this, generate ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview questions and answers in JSON format.`

        try {
            const result = await chatSession.sendMessage(InputPrompt)
            const MockJsonResp = (result.response.text()).replace('```json', '').replace('```', '')
            setJsonResponse(MockJsonResp)

            const resp = await db.insert(MockInterview).values({
                mockId: uuidv4(),
                jsonMockResp: MockJsonResp,
                jobPosition,
                jobDesc,
                jobExperience,
                createdBy: user?.primaryEmailAddress?.emailAddress,
                createdAt: moment().format('DD-MM-yyyy')
            }).returning({ mockId: MockInterview.mockId })

            if (resp?.length) {
                setOpenDailog(false)
                router.push(`/dashboard/interview/${resp[0]?.mockId}`)
            }
        } catch (err) {
            console.error("Error:", err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-10 bg-gradient-to-br from-blue-50 via-blue-100 to-white border border-dashed border-blue-300 rounded-lg cursor-pointer hover:shadow-lg transition-all text-center"
                onClick={() => setOpenDailog(true)}
            >
                <h2 className="text-lg font-semibold text-blue-700">+ Add New Interview</h2>
            </motion.div>

            <Dialog open={openDailog}>
                <DialogContent className="max-w-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-xl shadow-lg">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-blue-700 font-bold">
                            Start a Mock Interview
                        </DialogTitle>
                        <DialogDescription className="text-sm text-gray-600 mb-4">
                            Provide your job details to generate realistic AI interview questions.
                        </DialogDescription>

                        <form onSubmit={onSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-700 font-medium mb-1">
                                    Job Role/Position
                                </label>
                                <Input
                                    placeholder="e.g. Frontend Developer"
                                    required
                                    onChange={(e) => setJobPosition(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 font-medium mb-1">
                                    Job Description / Tech Stack
                                </label>
                                <Textarea
                                    placeholder="e.g. React, TypeScript, REST APIs, etc."
                                    required
                                    onChange={(e) => setJobDesc(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 font-medium mb-1">
                                    Years of Experience
                                </label>
                                <Input
                                    type="number"
                                    placeholder="e.g. 2"
                                    max="100"
                                    required
                                    onChange={(e) => setJobExperience(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-4">
                                <Button variant="ghost" type="button" onClick={() => setOpenDailog(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <LoaderCircle className="animate-spin mr-2 h-5 w-5" />
                                            Generating...
                                        </>
                                    ) : (
                                        "Start Interview"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview;
