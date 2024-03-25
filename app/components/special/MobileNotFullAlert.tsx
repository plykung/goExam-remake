"use client"

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Alert } from "react-daisyui";

export default function MobileNotFullAlert() {
    return (
        <Alert status="info" icon={<ExclamationTriangleIcon className="stroke-current shrink-0 w-6 h-6" />}>
            <span>GoExam are not fully supported on mobile yet. Functionalities may be limited.</span>
        </Alert>
    )
}