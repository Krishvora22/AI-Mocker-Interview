import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { motion } from 'framer-motion'

function InterviewItemCard({ interview }) {
    const router = useRouter();

    const onStart = () => {
        router.push('/dashboard/interview/' + interview?.mockId)
    }

    const onFeedbackPress = () => {
        router.push('/dashboard/interview/' + interview.mockId + "/feedback")
    }

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="border bg-gradient-to-br from-blue-50 to-white shadow-md rounded-lg p-4"
        >
            <h2 className="font-semibold text-lg text-blue-700">{interview?.jobPosition}</h2>
            <p className="text-sm text-gray-600 mt-1">{interview?.jobExperience} Years Experience</p>
            <p className="text-xs text-gray-400 mt-1">Created At: {interview.createdAt}</p>

            <div className="flex justify-between mt-4 gap-3">
                <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-blue-400 text-blue-600 hover:bg-blue-50"
                    onClick={onFeedbackPress}
                >
                    Feedback
                </Button>
                <Button
                    size="sm"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    onClick={onStart}
                >
                    Start
                </Button>
            </div>
        </motion.div>
    )
}

export default InterviewItemCard
