"use client"

import { DocumentTextIcon, ExclamationTriangleIcon, GlobeAltIcon, LinkIcon, LockClosedIcon, PencilIcon, PlusIcon, PrinterIcon, ShareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Avatar, Badge, Button, Card, Collapse, Divider, Form, Join, Menu, Stats, Table, Toggle, Tooltip } from "react-daisyui";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ExercisePage() {

    const Q2md = `Woman 30 years old presents with fatique for 3 months.PE: mark pale conjunctiva, no icteric sclera, liver and spleen not palpable. Laboratory examination (CBC) was shown in the table. Which one is the most likely cause of this anemia?
    

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
        <div className="p-5 bg-neutral flex flex-col md:flex-row gap-3">

            {/* left panel */}
            <div className="basis-1/2 md:basis-1/3 lg:basis-1/4">

                <div className="flex flex-col w-full">

                    <Stats className="shadow p-3 mb-3 bg-base-300">
                        <Stats.Stat>
                            <Stats.Stat.Item variant="figure">
                                <DocumentTextIcon className="w-8 h-8 stroke-secondary" />
                            </Stats.Stat.Item>
                            <Stats.Stat.Item variant="title">
                                Your Exams
                            </Stats.Stat.Item>
                            <Stats.Stat.Item variant="value">
                                3
                            </Stats.Stat.Item>
                        </Stats.Stat>
                    </Stats>

                    <Card className="shadow p-3 mb-3 bg-base-300" compact>
                        <Card.Body>
                            <Card.Title className="flex flex-row justify-between" >
                                <h2>Exam List</h2>
                                <Link href="/generate">
                                    <Button size="sm" startIcon={<PlusIcon className="h-4 w-4" />}>New</Button>
                                </Link>
                            </Card.Title>

                            <Menu>

                                <Menu.Item >
                                    <Card compact={true} bordered={false} className="px-0 flex">
                                        <Card.Body className="w-[100%]">
                                            <Card.Title className="flex flex-row justify-between">
                                                <h4>1. Exam No 1 </h4>
                                                <Badge outline color="success"> <GlobeAltIcon className="w-4 h-4 stroke-current me-1" />Public</Badge>
                                            </Card.Title>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <Card.Actions className="pt-2">
                                                <p className=" opacity-40">#: 30</p>

                                                <div>
                                                    <Badge color="neutral" className="m-0.5">Medical</Badge>
                                                    <Badge color="accent" className="m-0.5">Hormones</Badge>
                                                </div>

                                            </Card.Actions>
                                        </Card.Body>
                                    </Card>
                                </Menu.Item>

                                <Menu.Item>
                                    <Card compact={true} bordered={false} className="px-0 flex">
                                        <Card.Body className="w-[100%]">
                                            <Card.Title className="flex flex-row justify-between">
                                                <h4>2. Exam No 2 </h4>
                                                <Badge outline color="warning"><LinkIcon className="w-4 h-4 stroke-current me-1" />Unlisted</Badge>
                                            </Card.Title>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <Card.Actions className="pt-2">
                                                <p className=" opacity-40">#: 45</p>

                                                <div>
                                                    <Badge color="neutral" className="m-0.5">Medical</Badge>
                                                    <Badge color="accent" className="m-0.5">Hormones</Badge>
                                                </div>
                                            </Card.Actions>
                                        </Card.Body>
                                    </Card>
                                </Menu.Item>

                                <Menu.Item>
                                    <Card compact={true} bordered={false} className="px-0 flex">
                                        <Card.Body className="w-[100%]">
                                            <Card.Title className="flex flex-row justify-between">
                                                <h4>3. Exam No 3 </h4>
                                                <Badge outline color="secondary"> <LockClosedIcon className="w-4 h-4 stroke-current me-1" />Private</Badge>
                                            </Card.Title>
                                            <p>The brown fox jumped over the lazy dog</p>
                                            <Card.Actions className="pt-2">
                                                <p className=" opacity-40">#: 30</p>

                                                <div>
                                                    <Badge color="neutral" className="m-0.5">Medical</Badge>
                                                    <Badge color="accent" className="m-0.5">Hormones</Badge>
                                                </div>
                                            </Card.Actions>
                                        </Card.Body>
                                    </Card>
                                </Menu.Item>

                            </Menu>

                        </Card.Body>
                    </Card>

                </div>

            </div>

            {/* right panel */}

            {/* <div className="basis-1/2 md:basis-2/3 lg:basis-3/4 rounded-lg bg-slate-300 flex justify-center items-center text-neutral">
                Please Select the Exam from the tab on the left
            </div> */}

            <div className="basis-1/2 md:basis-2/3 lg:basis-3/4">

                {/* exam control */}
                <Card className="bg-base-100 rounded-b-none border-b-0">
                    <Card.Body className="py-3">
                        <div className="flex flex-row justify-between items-center">

                            <Form>
                                <Form.Label title="Show Answer & Details?">
                                    <Toggle className="ms-3" />
                                </Form.Label>
                            </Form>

                            <Join>
                                <Tooltip message="Edit">
                                    <Button color="warning" variant="outline" size="sm" className="join-item"><PencilIcon className="w-4 h-4 stroke-current" /></Button>
                                </Tooltip>

                                <Tooltip message="Share">
                                    <Button color="accent" variant="outline" size="sm" className="join-item"><ShareIcon className="w-4 h-4 stroke-current" /></Button>
                                </Tooltip>

                                <Tooltip message="Print">
                                    <Button variant="outline" size="sm" className="join-item"><PrinterIcon className="w-4 h-4 stroke-current" /></Button>
                                </Tooltip>

                                <Tooltip message="Delete">
                                    <Button color="primary" variant="outline" size="sm" className="join-item"><TrashIcon className="w-4 h-4 stroke-current" /></Button>
                                </Tooltip>

                                <Tooltip message="Report">
                                    <Button color="error" variant="outline" size="sm" className="join-item"><ExclamationTriangleIcon className="w-4 h-4 stroke-current" /></Button>
                                </Tooltip>
                            </Join>

                        </div>
                    </Card.Body>
                </Card>

                {/* exam description */}
                <Card className="bg-base-300 rounded-t-none border-t-0">
                    <Card.Body className="pt-5 pb-5">
                        <Card.Title className="flex flex-row justify-between">
                            <p className="text-2xl">Exam No 1</p>
                            <Badge outline color="success"> <GlobeAltIcon className="w-4 h-4 stroke-current me-1" />Public</Badge>
                        </Card.Title>

                        <div>
                            <Badge color="neutral" className="m-0.5">Medical</Badge>
                            <Badge color="accent" className="m-0.5">Hormones</Badge>
                        </div>

                        <p className="mt-2">This is a description that generator of this exams created.</p>

                        <div className="divider divider-neutral m-0"></div>

                        <div className="flex flex-row text-neutral-content/40">
                            <p>#: 30</p>
                            <p>By ABCDEF</p>
                            <p>Created: 22 Mar 2023 13:50</p>
                        </div>
                    </Card.Body>
                </Card>

                <Divider />

                <Card className="bg-base-100 mb-3">
                    <Card.Body >
                        <Card.Title>
                            Q1
                        </Card.Title>
                        <p>
                            ยา ibuprofen มีกลไกการออกฤทธิ์โดยยับยั้งเอนไซม์ใด
                        </p>

                        <div>
                            <Table>
                                <Table.Body>
                                    <Table.Row >
                                        <span>A</span>
                                        <span>Cyclooxygenase</span>
                                    </Table.Row>

                                    <Table.Row>
                                        <span>B</span>
                                        <span>Lipoxygenase</span>
                                    </Table.Row>

                                    <Table.Row>
                                        <span>C</span>
                                        <span>Phospholipase A2</span>
                                    </Table.Row>

                                    <Table.Row>
                                        <span>D</span>
                                        <span>NADPH oxidase</span>
                                    </Table.Row>

                                    <Table.Row>
                                        <span>E</span>
                                        <span>Phospholipase A2</span>
                                    </Table.Row>

                                </Table.Body>
                            </Table>

                        </div>
                    </Card.Body>
                </Card>


                <Card className="bg-base-100 mb-3">
                    <Card.Body >
                        <Card.Title>
                            Q2
                        </Card.Title>

                        <Markdown remarkPlugins={[remarkGfm]}>
                            {Q2md}
                        </Markdown>

                        <div>
                            <Table>
                                <Table.Body>
                                    <Table.Row>
                                        <span>A</span>
                                        <span>Viral infection</span>
                                    </Table.Row>

                                    <Table.Row className="bg-success text-white">
                                        <span>B</span>
                                        <span>Hypermennorrhea</span>
                                    </Table.Row>

                                    <Table.Row>
                                        <span>C</span>
                                        <span>Autoimmune disease</span>
                                    </Table.Row>

                                    <Table.Row>
                                        <span>D</span>
                                        <span>Pure red cell anemia</span>
                                    </Table.Row>

                                    <Table.Row>
                                        <span>E</span>
                                        <span>Benzene intoxication</span>
                                    </Table.Row>

                                </Table.Body>
                            </Table>
                        </div>

                        <Collapse icon="arrow" className="bg-neutral my-3">
                            <Collapse.Title className="text-xl font-medium">
                                Answer and Explanation
                            </Collapse.Title>
                            <Collapse.Content>
                                <p>From the Laboratory results, this is microcytic anemia with thrombocytosis, which usually caused by iron deficiency anemia from chronic blood loss.</p>
                            </Collapse.Content>
                        </Collapse>


                        <Divider className="m-0" />

                        <div>
                            <Badge color="neutral" className="m-0.5">Medical</Badge>
                            <Badge color="accent" className="m-0.5">Hemato</Badge>
                            <Badge color="secondary" className="m-0.5">Hemato:Pathology</Badge>
                        </div>

                    </Card.Body>
                </Card>

            </div>


        </div >

    )
}