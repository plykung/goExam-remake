"use client"

import Link from "next/link"
import { Button, Card, Form, Hero, Kbd, Select } from "react-daisyui"

export default function CreatePage() {

    return (
        <div className="p-5 bg-neutral">

            <Hero>
                <Hero.Content className="flex-col">

                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Generate new Exam</h1>
                        <p className="py-6">
                            Select information below
                        </p>
                    </div>

                    <Card className="flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <Card.Body>

                            <Form>
                                <Form.Label title="Subject" />
                                <Select>
                                    <Select.Option value="Medicine">Medicine</Select.Option>
                                    <Select.Option value="Math">Math</Select.Option>
                                    <Select.Option value="Science">Science</Select.Option>
                                    <Select.Option value="English">English</Select.Option>
                                    <Select.Option value="Thai">Thai</Select.Option>
                                    <Select.Option value="Social Science">Social Science</Select.Option>
                                </Select>
                            </Form>

                            <Form>
                                <Form.Label title="Topics" />
                                <Select multiple>
                                    <Select.Option value="Hemato">Hemato</Select.Option>
                                    <Select.Option value="Renal">Renal</Select.Option>
                                    <Select.Option value="Hormones">Hormones</Select.Option>
                                    <Select.Option value="FamilyMed">FamilyMed</Select.Option>
                                    <Select.Option value="CommunityMed">CommunityMed</Select.Option>
                                    <Select.Option value="Neuro">Neuro</Select.Option>
                                    <Select.Option value="Special Senses">Special Senses</Select.Option>
                                    <Select.Option value="Gastrointestinal">Gastrointestinal</Select.Option>
                                    <Select.Option value="Respi">Respi</Select.Option>
                                    <Select.Option value="ReproductiveSys">ReproductiveSys</Select.Option>
                                </Select>
                                <div className="label">
                                    <span className="label-text-alt">
                                        Multiple Selection is allowed <br />
                                        (Try using <Kbd>ctrl</Kbd>/<Kbd>⌘</Kbd> + Click)</span>
                                </div>
                            </Form>

                            <Form>
                                <Form.Label title="Question Source" />
                                <Select multiple>
                                    <Select.Option disabled >--- My Question Bank ---</Select.Option>
                                    <Select.Option value="Bank 1">Bank 1 (1)</Select.Option>
                                    <Select.Option value="Bank 2">Bank 2 (5)</Select.Option>
                                    <Select.Option disabled>--- Public Question Bank ---</Select.Option>
                                    <Select.Option value="NL2023">NL2023 (300)</Select.Option>
                                    <Select.Option value="NL2022">NL2022 (300)</Select.Option>
                                    <Select.Option value="NL2021">NL2021 (300)</Select.Option>
                                </Select>
                                <div className="label">
                                    <span className="label-text-alt">
                                        Multiple Selection is allowed <br />
                                        (Try using <Kbd>ctrl</Kbd>/<Kbd>⌘</Kbd> + Click)</span>
                                </div>
                            </Form>
                            <Form className="mt-6">
                                <Link href="/exam">
                                    <Button color="accent" className="w-[100%]">Generate!</Button>
                                </Link>
                            </Form>

                        </Card.Body>
                    </Card>
                </Hero.Content>
            </Hero>

        </div>

    )
}