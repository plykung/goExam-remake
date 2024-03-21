import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function MobileNotFullAlert() {
    return (<>
        <div role="alert" className="alert alert-info">
            <div>
                <ExclamationTriangleIcon className="stroke-current shrink-0 w-6 h-6" />
            </div>

            <span>GoExam are not fully supported on mobile yet. Functionalities may be limited.</span>

        </div>
    </>)
}