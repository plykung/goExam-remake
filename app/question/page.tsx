"use client"

import { ArchiveBoxIcon, DocumentTextIcon, GlobeAltIcon, LinkIcon, LockClosedIcon, PlusIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { useCallback, useRef, useState } from "react";
// import NewBankModal from "../components/question/NewBankModal";
import { Button, Modal } from "react-daisyui";

export default function QuestionBankPage() {

    // new modal
    const ref = useRef<HTMLDialogElement>(null);
    const handleShow = useCallback(() => {
        ref.current?.showModal();
    }, [ref]);

    return (
        <div className="px-5 bg-neutral">
            <div className="flex flex-row">
                <div className="basis-1/3  bg-slate-300">

                    <div className="flex flex-col w-full border-opacity-50">

                        <div className="grid card card-compact bg-base-300 rounded-box place-items-center">
                            <div className="card w-96 bg-base-300 shadow-xl">
                                {/* <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                                <div className="card-body ">

                                    <div className="stats stats-vertical shadow">

                                        <div className="stat">
                                            <div className="stat-figure text-secondary inline-block">
                                                <ArchiveBoxIcon className="w-8 h-8 stroke-current" />
                                            </div>
                                            <div className="stat-title">Question Bank</div>
                                            <div className="stat-value">3</div>
                                            <div className="stat-desc"></div>
                                        </div>

                                        <div className="stat">
                                            <div className="stat-figure text-secondary inline-block">
                                                <QuestionMarkCircleIcon className="w-8 h-8 stroke-current" />
                                            </div>
                                            <div className="stat-title">Question</div>
                                            <div className="stat-value">219</div>
                                            <div className="stat-desc"></div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="grid card bg-base-300 rounded-box p-5 mt-3">
                            <div className="flex flex-row justify-between">
                                <h2 className="underline">Your Question Bank</h2>
                                <button className="btn btn-outline btn-neutral btn-sm" onClick={handleShow}>
                                    <PlusIcon className="w-4 h-4 stroke-current" />
                                    New Bank
                                </button>

                                <Modal ref={ref}>
                                    <Modal.Header className="font-bold">Hello!</Modal.Header>
                                    <Modal.Body>
                                        Press ESC key or click the button below to close
                                    </Modal.Body>
                                    <Modal.Actions>
                                        <form method="dialog">
                                            <Button>Close</Button>
                                        </form>
                                    </Modal.Actions>
                                </Modal>

                                {/* <NewBankModal visible={showBankModal} /> */}

                            </div>

                            <ul className="menu rounded-box join">

                                <li className="card card-compact">
                                    <a className="flex">
                                        <div className="card-body">
                                            <h2 className="card-title">1. QBank1</h2>


                                            <div className="card-actions flex flex-row justify-between items-center">
                                                <p className=" text-neutral-500">#: 30</p>

                                                <p className=" text-neutral-500">13 Jan 2023</p>

                                                <div className="">
                                                    <div className="badge badge-success badge-outline"> <GlobeAltIcon className="w-4 h-4 stroke-current me-1" />Public</div>
                                                </div>

                                                {/* <div className="justify-end">
                                                    <div className="mx-0.5 badge badge-outline">Medical</div>
                                                    <div className="mx-0.5 badge badge-outline">Hormones</div>
                                                </div> */}

                                            </div>

                                        </div>
                                    </a>
                                </li>

                                <li className="card card-compact">
                                    <a className="flex">
                                        <div className="card-body">
                                            <h2 className="card-title">2. QBank2</h2>


                                            <div className="card-actions flex flex-row justify-between items-center">
                                                <p className=" text-neutral-500">#: 13</p>

                                                <p className=" text-neutral-500">13 Jan 2023</p>

                                                <div >
                                                    <div className="badge badge-warning badge-outline">
                                                        <LinkIcon className="w-4 h-4 stroke-current me-1" />Unlisted
                                                    </div>
                                                </div>

                                                {/* <div className="justify-end">
                                                    <div className="mx-0.5 badge badge-outline">Medical</div>
                                                    <div className="mx-0.5 badge badge-outline">Hormones</div>
                                                </div> */}

                                            </div>

                                        </div>
                                    </a>
                                </li>

                                <li className="card card-compact">
                                    <a className="flex">
                                        <div className="card-body">
                                            <h2 className="card-title">3. QBank3</h2>


                                            <div className="card-actions flex flex-row justify-between items-center">
                                                <p className=" text-neutral-500">#: 54</p>

                                                <p className=" text-neutral-500">13 Jan 2023</p>

                                                <div className="">
                                                    <div className="badge badge-secondary badge-outline">
                                                        <LockClosedIcon className="w-4 h-4 stroke-current me-1" />Private
                                                    </div>
                                                </div>

                                                {/* <div className="justify-end">
                                                    <div className="mx-0.5 badge badge-outline">Medical</div>
                                                    <div className="mx-0.5 badge badge-outline">Hormones</div>
                                                </div> */}

                                            </div>

                                        </div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>


                </div>
                <div className="basis-2/3 bg-slate-700">
                    col2
                </div>
            </div>

        </div>

    )
}