"use client"

import { ArchiveBoxIcon, DocumentDuplicateIcon, DocumentTextIcon, ExclamationTriangleIcon, GlobeAltIcon, HashtagIcon, LinkIcon, ListBulletIcon, LockClosedIcon, PencilIcon, PlusIcon, PrinterIcon, QuestionMarkCircleIcon, ShareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useCallback, useRef } from "react";
import { Badge, Button, Card, Collapse, Divider, Form, Join, Menu, Modal, Stats, Table, Toggle, Tooltip } from "react-daisyui";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function QuestionBankPage() {

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

    // new modal
    const ref = useRef<HTMLDialogElement>(null);
    const handleShow = useCallback(() => {
        ref.current?.showModal();
    }, [ref]);

    return (
        <div className="p-5 bg-neutral flex flex-col md:flex-row gap-3">

            {/* left panel */}
            <div className="basis-1/2 md:basis-1/3 lg:basis-1/4">

                <div className="flex flex-col w-full">

                    <Stats vertical className="shadow p-3 mb-3 bg-base-300">
                        <Stats.Stat>
                            <Stats.Stat.Item variant="figure">
                                <ArchiveBoxIcon className="w-8 h-8 stroke-current" />
                            </Stats.Stat.Item>
                            <Stats.Stat.Item variant="title">
                                Question Bank
                            </Stats.Stat.Item>
                            <Stats.Stat.Item variant="value">
                                3
                            </Stats.Stat.Item>
                        </Stats.Stat>

                        <Stats.Stat>
                            <Stats.Stat.Item variant="figure">
                                <QuestionMarkCircleIcon className="w-8 h-8 stroke-current" />
                            </Stats.Stat.Item>
                            <Stats.Stat.Item variant="title">
                                Question
                            </Stats.Stat.Item>
                            <Stats.Stat.Item variant="value">
                                219
                            </Stats.Stat.Item>
                        </Stats.Stat>
                    </Stats>

                    <Card className="shadow p-3 mb-3 bg-base-300" compact>
                        <Card.Body>
                            <Card.Title className="flex flex-row justify-between" >
                                <h2>Question Bank</h2>
                                <Button variant="outline" size="sm" startIcon={<PlusIcon className="w-4 h-4 stroke-current" />} onClick={handleShow}>New</Button>
                            </Card.Title>

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

                            <Menu>
                                <Menu.Item>
                                    <Card compact={true} bordered={false} className="px-0 flex">
                                        <Card.Body className="w-[100%]">
                                            <Card.Title className="flex flex-row justify-between">
                                                <h4>1. Bank No 1 </h4>
                                                <Badge outline color="success"> <GlobeAltIcon className="w-4 h-4 stroke-current me-1" />Public</Badge>
                                            </Card.Title>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <Card.Actions className="pt-2">
                                                <p className=" opacity-40">#: 30</p>

                                                {/* <div>
                                                    <Badge color="neutral" className="m-0.5">Medical</Badge>
                                                    <Badge color="accent" className="m-0.5">Hormones</Badge>
                                                </div> */}

                                            </Card.Actions>
                                        </Card.Body>
                                    </Card>
                                </Menu.Item>


                                <Menu.Item>
                                    <Card compact={true} bordered={false} className="px-0 flex">
                                        <Card.Body className="w-[100%]">
                                            <Card.Title className="flex flex-row justify-between">
                                                <h4>2. Second Bank </h4>
                                                <Badge outline color="secondary"> <LockClosedIcon className="w-4 h-4 stroke-current me-1" />Private</Badge>
                                            </Card.Title>
                                            <p>The brown fox jumped over the lazy dog</p>
                                            <Card.Actions className="pt-2">
                                                <p className=" opacity-40">#: 30</p>

                                                {/* <div>
                                                    <Badge color="neutral" className="m-0.5">Medical</Badge>
                                                    <Badge color="accent" className="m-0.5">Hormones</Badge>
                                                </div> */}

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
                Please Select the Question Bank from the tab on the left
            </div> */}

            <div className="basis-1/2 md:basis-2/3 lg:basis-3/4">

                {/* exam info */}
                <div>
                    {/* exam control */}
                    <Card className="bg-base-200 rounded-b-none border-b-0">
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

                                    <Tooltip message="Duplicate">
                                        <Button color="info" variant="outline" size="sm" className="join-item"><DocumentDuplicateIcon className="w-4 h-4 stroke-current" /></Button>
                                    </Tooltip>

                                    <Tooltip message="Print">
                                        <Button variant="outline" size="sm" className="join-item"><PrinterIcon className="w-4 h-4 stroke-current" /></Button>
                                    </Tooltip>

                                    <Tooltip message="Delete">
                                        <Button color="error" variant="outline" size="sm" className="join-item"><TrashIcon className="w-4 h-4 stroke-current" /></Button>
                                    </Tooltip>

                                </Join>

                            </div>
                        </Card.Body>
                    </Card>

                    {/* exam description */}
                    <Card className="bg-base-300 rounded-t-none border-t-0">
                        <Card.Body className="pt-5 pb-5">
                            <Card.Title className="flex flex-row justify-between">
                                <p className="text-2xl">Bank No 1</p>
                                <Badge outline color="success"> <GlobeAltIcon className="w-4 h-4 stroke-current me-1" />Public</Badge>
                            </Card.Title>

                            {/* <div>
                            <Badge color="neutral" className="m-0.5">Medical</Badge>
                            <Badge color="accent" className="m-0.5">Hormones</Badge>
                        </div> */}

                            <p className="mt-2">This is a description that generator of this question bank created.</p>

                            <div className="divider divider-neutral m-0"></div>

                            <div className="flex flex-row text-neutral-content/40">
                                <p>#: 30</p>
                                <p>By ABCDEF</p>
                                <p>Created: 22 Mar 2023 13:50</p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <Divider />

                <div className="flex flex-col lg:flex-row justify-evenly pb-5 gap-3">
                    <Button color="primary" startIcon={<PlusIcon className="w-4 h-4 stroke-current" />}>
                        New Question
                    </Button>
                    <Button color="accent" startIcon={<ListBulletIcon className="w-4 h-4 stroke-current" />}>
                        Manage Question
                    </Button>
                    <Button color="info" startIcon={<HashtagIcon className="w-4 h-4 stroke-current" />}>
                        Others...
                    </Button>
                </div>

                {/* compact card */}
                <Card compact className="bg-base-200 mb-3">
                    <Card.Body className="flex flex-row items-center justify-between ">
                        <div className="flex flex-row">
                            <p className="font-bold me-3">Q1</p>
                            <p className="truncate max-w-sm">{Q2md}</p>
                        </div>


                        <Join>
                            <Tooltip message="Edit">
                                <Button color="warning" variant="outline" size="sm" className="join-item"><PencilIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Duplicate">
                                <Button color="info" variant="outline" size="sm" className="join-item"><DocumentDuplicateIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Print">
                                <Button variant="outline" size="sm" className="join-item"><PrinterIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Delete">
                                <Button color="error" variant="outline" size="sm" className="join-item"><TrashIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>
                        </Join>

                    </Card.Body>
                </Card>
                <Card compact className="bg-base-200 mb-3">
                    <Card.Body className="flex flex-row items-center justify-between ">
                        <div className="flex flex-row">
                            <p className="font-bold me-3">Q1</p>
                            <p className="truncate max-w-sm">{Q2md}</p>
                        </div>


                        <Join>
                            <Tooltip message="Edit">
                                <Button color="warning" variant="outline" size="sm" className="join-item"><PencilIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Duplicate">
                                <Button color="info" variant="outline" size="sm" className="join-item"><DocumentDuplicateIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Print">
                                <Button variant="outline" size="sm" className="join-item"><PrinterIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Delete">
                                <Button color="error" variant="outline" size="sm" className="join-item"><TrashIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>
                        </Join>

                    </Card.Body>
                </Card>
                <Card compact className="bg-base-200 mb-3">
                    <Card.Body className="flex flex-row items-center justify-between ">
                        <div className="flex flex-row">
                            <p className="font-bold me-3">Q1</p>
                            <p className="truncate max-w-sm">{Q2md}</p>
                        </div>


                        <Join>
                            <Tooltip message="Edit">
                                <Button color="warning" variant="outline" size="sm" className="join-item"><PencilIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Duplicate">
                                <Button color="info" variant="outline" size="sm" className="join-item"><DocumentDuplicateIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Print">
                                <Button variant="outline" size="sm" className="join-item"><PrinterIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Delete">
                                <Button color="error" variant="outline" size="sm" className="join-item"><TrashIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>
                        </Join>

                    </Card.Body>
                </Card>
                <Card compact className="bg-base-200 mb-3">
                    <Card.Body className="flex flex-row items-center justify-between ">
                        <div className="flex flex-row">
                            <p className="font-bold me-3">Q1</p>
                            <p className="truncate max-w-sm">{Q2md}</p>
                        </div>


                        <Join>
                            <Tooltip message="Edit">
                                <Button color="warning" variant="outline" size="sm" className="join-item"><PencilIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Duplicate">
                                <Button color="info" variant="outline" size="sm" className="join-item"><DocumentDuplicateIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Print">
                                <Button variant="outline" size="sm" className="join-item"><PrinterIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Delete">
                                <Button color="error" variant="outline" size="sm" className="join-item"><TrashIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>
                        </Join>

                    </Card.Body>
                </Card>
                <Card compact className="bg-base-200 mb-3">
                    <Card.Body className="flex flex-row items-center justify-between ">
                        <div className="flex flex-row">
                            <p className="font-bold me-3">Q1</p>
                            <p className="truncate max-w-sm">{Q2md}</p>
                        </div>


                        <Join>
                            <Tooltip message="Edit">
                                <Button color="warning" variant="outline" size="sm" className="join-item"><PencilIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Duplicate">
                                <Button color="info" variant="outline" size="sm" className="join-item"><DocumentDuplicateIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Print">
                                <Button variant="outline" size="sm" className="join-item"><PrinterIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>

                            <Tooltip message="Delete">
                                <Button color="error" variant="outline" size="sm" className="join-item"><TrashIcon className="w-4 h-4 stroke-current" /></Button>
                            </Tooltip>
                        </Join>

                    </Card.Body>
                </Card>

                {/* each question */}
                <div>
                    {/* question control */}
                    <Card className="bg-base-100 rounded-b-none border-b-0">
                        <Card.Body className="py-3">
                            <div className="flex flex-row justify-end items-center">

                                <Join>
                                    <Tooltip message="Edit">
                                        <Button color="warning" variant="outline" size="sm" className="join-item"><PencilIcon className="w-4 h-4 stroke-current" /></Button>
                                    </Tooltip>

                                    <Tooltip message="Duplicate">
                                        <Button color="info" variant="outline" size="sm" className="join-item"><DocumentDuplicateIcon className="w-4 h-4 stroke-current" /></Button>
                                    </Tooltip>

                                    <Tooltip message="Print">
                                        <Button variant="outline" size="sm" className="join-item"><PrinterIcon className="w-4 h-4 stroke-current" /></Button>
                                    </Tooltip>

                                    <Tooltip message="Delete">
                                        <Button color="error" variant="outline" size="sm" className="join-item"><TrashIcon className="w-4 h-4 stroke-current" /></Button>
                                    </Tooltip>
                                </Join>

                            </div>
                        </Card.Body>
                    </Card>

                    {/* question Details */}
                    <Card className="bg-base-200 rounded-t-none border-t-0 mb-3">
                        <Card.Body className="pt-5">
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


            </div>


        </div >

    )
}