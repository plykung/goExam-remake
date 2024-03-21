export default function CreatePage() {

    return (
        <div className="p-5 bg-neutral">

            <div className="hero min-h-screen">
                <div className="hero-content flex-col text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Create new exam</h1>
                        <p className="py-6">Input information below</p>
                    </div>

                    <div>
                        <div className="card shrink-0 min-w-full md:max-w-sm  shadow-2xl bg-base-100 md:min-w-[35vw] ">
                            <form className="card-body text-start">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <select className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Select</option>
                                        <option>Math</option>
                                        <option>Science</option>
                                        <option>Medic</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Topics</span>
                                    </label>
                                    <select multiple className="select select-bordered w-full max-w-xs">
                                        <option>Hemato</option>
                                        <option>Renal</option>
                                        <option>Hormones</option>
                                    </select>
                                    <div className="label">
                                        <span className="label-text-alt">Multiple Selection is allowed<br />(Try using <kbd className="kbd">ctrl</kbd>/<kbd className="kbd">⌘</kbd> + Click)</span>
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sources</span>
                                    </label>
                                    <select multiple className="select select-bordered w-full max-w-xs">
                                        <option disabled>--- My Question Bank ---</option>
                                        <option>Bank 1 (1)</option>
                                        <option>Bank 2 (5)</option>
                                        <option disabled>--- Public Question Bank ---</option>
                                        <option>NL2023 (300) </option>
                                        <option>NL2022 (300)</option>
                                        <option>NL2021 (300)</option>
                                    </select>
                                    <div className="label">
                                        <span className="label-text-alt">Multiple Selection is allowed<br />(Try using <kbd className="kbd">ctrl</kbd>/<kbd className="kbd">⌘</kbd> + Click)</span>
                                    </div>
                                </div>


                                <div className="form-control mt-6">
                                    <button className="btn btn-accent">Generate!</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}