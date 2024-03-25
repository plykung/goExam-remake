import { DocumentTextIcon, ExclamationTriangleIcon, GlobeAltIcon, LinkIcon, LockClosedIcon, PrinterIcon, ShareIcon } from "@heroicons/react/24/outline";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ExercisePage() {

    const Q3md = `Woman 30 years old presents with fatique for 3 months.PE: mark pale conjunctiva, no icteric sclera, liver and spleen not palpable. Laboratory examination (CBC) was shown in the table. Which one is the most likely cause of this anemia?
    

| Tests | Results |
| :-----: | :------- |
| WBC   | 8800 |
||(Neu 50%, Lym 40%, Eo 1%, Baso 1%, Mac 8%)   |
| Hb    | 8       |
| Placelet | 500000 |
| MCV   | 70      |
| RDW   | 22%     |

* * This question was rendered by [\`markdown-react\`](https://github.com/remarkjs/react-markdown)*
    `

    return (
        <div className="px-5 bg-neutral flex flex-row">
            <div className="basis-1/3 px-3 py-5 artboard bg-slate-100">

                <div className="flex flex-col w-full border-opacity-50">

                    <div className="grid card bg-base-300 rounded-box place-items-center">
                        <div className="card w-96 bg-base-300 shadow-xl">
                            {/* <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                            <div className="card-body">

                                <div className="stats shadow">

                                    <div className="stat bg-base-300">
                                        <div className="stat-figure text-secondary inline-block">
                                            <DocumentTextIcon className="w-8 h-8 stroke-current" />
                                        </div>
                                        <div className="stat-title">Your Exams</div>
                                        <div className="stat-value">3</div>
                                        <div className="stat-desc"></div>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="grid card bg-base-300 rounded-box p-5 mt-3">
                        <h2 className="underline">Generated Papers</h2>
                        <ul className="menu rounded-box join">

                            <li className="card card-compact w-[100%]">
                                <a>
                                    <div className="card-body ">
                                        <h2 className="card-title">1. Exam1</h2>
                                        <div className="card-actions">
                                            <div className="justify-start">
                                                <div className="badge badge-success badge-outline"> <GlobeAltIcon className="w-4 h-4 stroke-current me-1" />Public</div>
                                            </div>

                                            <div className="justify-end">
                                                <div className="mx-0.5 badge badge-outline">Medical</div>
                                                <div className="mx-0.5 badge badge-outline">Hormones</div>
                                            </div>

                                        </div>

                                    </div>
                                </a>
                            </li>


                            <li className="card card-compact w-[100%]">
                                <a>
                                    <div className="card-body ">
                                        <h2 className="card-title">2. Exam2</h2>
                                        <div className="card-actions">
                                            <div className="justify-start">
                                                <div className="badge badge-warning badge-outline"> <LinkIcon className="w-4 h-4 stroke-current me-1" />Unlisted</div>
                                            </div>

                                            <div className="justify-end">
                                                <div className="mx-0.5 badge badge-outline">Medical</div>
                                                <div className="mx-0.5 badge badge-outline">Renal</div>
                                            </div>

                                        </div>

                                    </div>
                                </a>
                            </li>

                            <li className="card card-compact w-[100%]">
                                <a>
                                    <div className="card-body ">
                                        <h2 className="card-title">3. Exam3</h2>
                                        <div className="card-actions">
                                            <div className="justify-start">
                                                <div className="badge badge-secondary badge-outline"> <LockClosedIcon className="w-4 h-4 stroke-current me-1" />Private</div>
                                            </div>

                                            <div className="justify-end">
                                                <div className="mx-0.5 badge badge-outline">Medical</div>
                                                <div className="mx-0.5 badge badge-outline">Family</div>
                                            </div>

                                        </div>

                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* <div className="basis-2/3 px-3 bg-slate-300 flex justify-center items-center text-neutral">
                Please Select the Exam list on the left
            </div> */}

            <div className="basis-2/3 px-3 py-5 bg-slate-300 ">

                <div className="card bg-base-100 w-[100%] rounded-b-none">
                    <div className="card-body p-3">
                        <div className="flex flex-row justify-between items-center">

                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text pe-3">Show Answer & Details?</span>
                                    <input type="checkbox" className="toggle" />
                                </label>
                            </div>


                            <div className="justify-end join">
                                <div className="tooltip" data-tip="Share">
                                    <button className="btn btn-sm btn-outline btn-accent join-item"><ShareIcon className="w-4 h-4 stroke-current" /></button>
                                </div>
                                <div className="tooltip" data-tip="Print">
                                    <button className="btn btn-sm btn-outline join-item"><PrinterIcon className="w-4 h-4 stroke-current" /></button>

                                </div>
                                <div className="tooltip" data-tip="Report">
                                    <button className="btn btn-sm btn-outline btn-error join-item"><ExclamationTriangleIcon className="w-4 h-4 stroke-current" /></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-[100%] mb-3 rounded-t-none">
                    <div className="card-body pt-3">

                        <h2 className="card-title">
                            <p>Exam 1</p>
                            <div className="card-actions">
                                <div className="badge badge-success badge-outline"> <GlobeAltIcon className="w-4 h-4 stroke-current me-1" />Public</div>
                            </div>
                        </h2>

                        <div className="card-actions">
                            <div className="justify-end">
                                <div className="mx-0.5 badge badge-outline">Medical</div>
                                <div className="mx-0.5 badge badge-accent badge-outline">Hormones</div>
                            </div>
                        </div>

                        <p>This is a dscriptition that generator of this exams created.</p>



                        <div className="divider divider-neutral m-0"></div>

                        <div className="flex flex-row text-neutral-content/40">
                            <p>#: 30</p>
                            <p>By ABCDEF</p>
                            <p>Created: 22 Mar 2023 13:50</p>
                        </div>

                    </div>
                </div>

                <div className="divider divider-neutral"></div>

                <div className="card bg-base-100 shadow-xl w-[100%] mb-3">
                    <div className="card-body">

                        <h2 className="card-title">
                            <p>Q1</p>
                            {/* <div className="card-actions">
                                <div className="badge badge-success badge-outline"> <GlobeAltIcon className="w-4 h-4 stroke-current me-1" />Public</div>
                            </div> */}
                        </h2>

                        {/* <div className="card-actions">
                            <div className="justify-end">
                                <div className="mx-0.5 badge badge-outline">Medical</div>
                                <div className="mx-0.5 badge badge-outline">Hormones</div>
                            </div>

                        </div> */}


                        <p>ยา ibuprofen มีกลไกการออกฤทธิ์โดยยับยั้งเอนไซม์ใด</p>

                        <div>
                            <table className="table">
                                {/* head */}
                                {/* <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead> */}
                                <tbody>

                                    <tr>
                                        <th>A</th>
                                        <td>Cyclooxygenase</td>
                                    </tr>

                                    <tr>
                                        <th>B</th>
                                        <td>Lipoxygenase</td>
                                    </tr>

                                    <tr>
                                        <th>C</th>
                                        <td>Phospholipase A2</td>
                                    </tr>

                                    <tr>
                                        <th>D</th>
                                        <td>NADPH oxidase</td>
                                    </tr>

                                    <tr>
                                        <th>E</th>
                                        <td>Phospholipase A2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>



                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl w-[100%] mb-3">
                    <div className="card-body">

                        <h2 className="card-title">
                            <p>Q2</p>
                            {/* <div className="card-actions">
                                <div className="badge badge-success badge-outline"> <GlobeAltIcon className="w-4 h-4 stroke-current me-1" />Public</div>
                            </div> */}
                        </h2>

                        {/* <div className="card-actions">
                            <div className="justify-end">
                                <div className="mx-0.5 badge badge-outline">Medical</div>
                                <div className="mx-0.5 badge badge-outline">Hormones</div>
                            </div>

                        </div> */}


                        <p>2 years old boy presented with fever and oral ulcer for 2 weeks. PE: erythematous papules at palm and soles. Which complications is the most likely to happen in this patient?</p>

                        <div>
                            <table className="table">
                                {/* head */}
                                {/* <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead> */}
                                <tbody>

                                    <tr>
                                        <th>A</th>
                                        <td>Hearing Loss</td>
                                    </tr>

                                    <tr>
                                        <th>B</th>
                                        <td>Optic Neuritis</td>
                                    </tr>

                                    <tr className="bg-success text-white">
                                        <th>C</th>
                                        <td>Aseptic Meningitis</td>
                                    </tr>

                                    <tr>
                                        <th>D</th>
                                        <td>Hepatosplenomegaly</td>
                                    </tr>

                                    <tr>
                                        <th>E</th>
                                        <td>Gullian Barre Syndrome</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <div className="collapse bg-base-200 collapse-arrow">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">
                                    Answer and Explanation
                                </div>
                                <div className="collapse-content">
                                    <p>This is the appearance of Hand Foot Mouth Disease. One of the complication includes aseptic meningitis. </p>
                                </div>
                            </div>
                        </div>

                        <div className="divider divider-neutral m-0"></div>

                        <div className="card-actions">
                            <div className="justify-end">
                                <div className="mx-0.5 badge badge-outline">Medical</div>
                                <div className="mx-0.5 badge badge-accent badge-outline">Skin</div>
                                <div className="mx-0.5 badge badge-secondary badge-outline">Skin:Pathology</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl w-[100%] mb-3">
                    <div className="card-body">

                        <h2 className="card-title">
                            <p>Q3</p>
                            {/* <div className="card-actions">
                                <div className="badge badge-success badge-outline"> <GlobeAltIcon className="w-4 h-4 stroke-current me-1" />Public</div>
                            </div> */}
                        </h2>

                        {/* <div className="card-actions">
                            <div className="justify-end">
                                <div className="mx-0.5 badge badge-outline">Medical</div>
                                <div className="mx-0.5 badge badge-outline">Hormones</div>
                            </div>

                        </div> */}

                        <Markdown remarkPlugins={[remarkGfm]}>
                            {Q3md}
                        </Markdown>

                        <div>
                            <table className="table">
                                {/* head */}
                                {/* <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead> */}
                                <tbody>

                                    <tr>
                                        <th>A</th>
                                        <td>Viral infection</td>
                                    </tr>

                                    <tr className="bg-success text-white">
                                        <th>B</th>
                                        <td>Hypermennorrhea</td>
                                    </tr>

                                    <tr>
                                        <th>C</th>
                                        <td>Autoimmune disease</td>
                                    </tr>

                                    <tr>
                                        <th>D</th>
                                        <td>Pure red cell anemia</td>
                                    </tr>

                                    <tr>
                                        <th>E</th>
                                        <td>Benzene intoxication</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <div className="collapse bg-base-200 collapse-arrow">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">
                                    Answer and Explanation
                                </div>
                                <div className="collapse-content">
                                    <p>From the Laboratory results, this is microcytic anemia with thrombocytosis, which usually caused by iron deficiency anemia from chronic blood loss.</p>
                                </div>
                            </div>
                        </div>

                        <div className="divider divider-neutral m-0"></div>

                        <div className="card-actions">
                            <div className="justify-end">
                                <div className="mx-0.5 badge badge-outline">Medical</div>
                                <div className="mx-0.5 badge badge-accent badge-outline">Hemato</div>
                                <div className="mx-0.5 badge badge-secondary badge-outline">Hemato:Pathology</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}