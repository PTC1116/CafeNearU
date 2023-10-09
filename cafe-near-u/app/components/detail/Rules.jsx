"use client";
import {
    Dialog,
    DialogBody,
    DialogHeader,
    Button,
} from "@material-tailwind/react";

import { useState } from "react";

export default function Rules({ rules }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <div className="col-span-8 flex flex-col md:flex-row justify-between gap-4 mr-6 items-start">
            <div>
                <div className="font-medium text-xl ">
                    {" "}
                    低消金額為 {`${rules[1].heading} 元`}
                </div>
                <div className="font-normal text-base my-2">
                    {rules[1].content}
                </div>
            </div>
            <div>
                <div className="font-medium text-xl ">
                    {" "}
                    {rules[0].heading ? "此為限時咖啡廳" : "此為不限時咖啡廳"}
                </div>
                <div className="font-normal text-base my-2">
                    {rules[0].content}
                </div>
            </div>

            <div>
                <div className="font-medium text-xl "> {rules[2].heading}</div>
                <div className="font-normal text-base my-2">
                    {rules[2].content}
                </div>
            </div>

            <div>
                <Button
                    onClick={handleOpen}
                    variant="outlined"
                    className="text-base font-normal"
                >
                    查看詳細店內規定
                </Button>
                <Dialog open={open} handler={handleOpen} size="md">
                    <DialogHeader className="flex flex-row justify-between">
                        <span className="mx-2 font-normal text-xl">
                            店內相關規定與注意事項
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-3 h-5 w-5 cursor-pointer"
                            onClick={handleOpen}
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </DialogHeader>
                    <DialogBody divider>
                        <div className="flex flex-col gap-4 text-gray-800 max-h-80 overflow-scroll m-4">
                            <div className="">
                                <div className="font-bold text-xl ">
                                    {" "}
                                    低消金額為 {`${rules[1].heading} 元`}
                                </div>
                                <div className="font-normal text-base my-2">
                                    {rules[1].content}
                                </div>
                            </div>
                            <div>
                                <div className="font-bold text-xl ">
                                    {" "}
                                    {rules[0].heading
                                        ? "此為限時咖啡廳"
                                        : "此為不限時咖啡廳"}
                                </div>
                                <div className="font-normal text-base my-2">
                                    {rules[0].content}
                                </div>
                            </div>
                            {rules.slice(2).map((rule) => (
                                <div>
                                    <div className="font-bold text-xl ">
                                        {" "}
                                        {rule.heading
                                            ? "此為限時咖啡廳"
                                            : "此為不限時咖啡廳"}
                                    </div>
                                    <div className="font-normal text-base my-2">
                                        {rule.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </DialogBody>
                </Dialog>
            </div>
        </div>
    );
}
