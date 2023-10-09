"use client";
import { Card, Collapse, Button } from "@material-tailwind/react";
import { useState } from "react";

export default function Menu() {
    const [openCol, setOpenCol] = useState(false);
    const toggleOpen = () => setOpenCol((cur) => !cur);
    return (
        <>
            {" "}
            <div className="self-start m-4 mb-2 ml-0 text-xl font-light border-0 border-l-4 border-l-[#D0B8A8] pl-2 text-gray-800 flex flex-row gap-4 items-center">
                <div>最新菜單 &nbsp; </div>
            </div>
            <div className="flex flex-col ml-2">
                <div className="my-2 text-gray-800">特色甜點</div>
                <div className="grid grid-cols-12 gap-4 mr-6 ">
                    <Card className="col-span-3 py-2  rounded-md flex justify-center items-center">
                        <strong>甜點名稱&nbsp;</strong> NT$150
                    </Card>
                    <Card className="col-span-3 py-2  rounded-md flex justify-center items-center">
                        <strong>甜點名稱&nbsp;</strong> NT$150
                    </Card>
                    <Card className="col-span-3 py-2  rounded-md flex justify-center items-center">
                        <strong>甜點名稱&nbsp;</strong> NT$150
                    </Card>
                    <Card className="col-span-3 py-2  rounded-md flex justify-center items-center">
                        <strong>甜點名稱&nbsp;</strong> NT$150
                    </Card>
                </div>
                <div className="my-2 mt-4 text-gray-800">特色飲品</div>
                <div className="grid grid-cols-12 gap-4 mr-6">
                    <Card className="col-span-3 py-2  rounded-md flex justify-center items-center">
                        <strong>飲品名稱&nbsp;</strong> NT$150
                    </Card>
                    <Card className="col-span-3 py-2  rounded-md flex justify-center items-center">
                        <strong>飲品名稱&nbsp;</strong> NT$150
                    </Card>
                    <Card className="col-span-3 py-2  rounded-md flex justify-center items-center">
                        <strong>飲品名稱&nbsp;</strong> NT$150
                    </Card>
                    <Card className="col-span-3 py-2  rounded-md flex justify-center items-center">
                        <strong>飲品名稱&nbsp;</strong> NT$150
                    </Card>
                </div>
                <div className="flex flex-col justify-center items-center">
                    {" "}
                    <Collapse
                        open={openCol}
                        className={`overflow-visible ${
                            openCol
                                ? "block transition-all"
                                : "hidden h-0 transition-all"
                        }`}
                    >
                        <div
                            className={`my-2 mt-4 text-gray-800 ${
                                openCol
                                    ? "block transition-all"
                                    : "hidden h-0 transition-all"
                            }`}
                        >
                            特色飲品
                        </div>
                        <div
                            className={`grid grid-cols-12 gap-4 mr-6 ${
                                openCol
                                    ? "block transition-all"
                                    : "hidden h-0 transition-all"
                            }`}
                        >
                            <Card className="col-span-3 py-2  rounded-md flex justify-center items-center">
                                <strong>飲品名稱&nbsp;</strong> NT$150
                            </Card>
                            <Card className="col-span-3 py-2  rounded-md flex justify-center items-center">
                                <strong>飲品名稱&nbsp;</strong> NT$150
                            </Card>
                            <Card className="col-span-3 py-2  rounded-md flex justify-center items-center">
                                <strong>飲品名稱&nbsp;</strong> NT$150
                            </Card>
                            <Card className="col-span-3 py-2  rounded-md flex justify-center items-center">
                                <strong>飲品名稱&nbsp;</strong> NT$150
                            </Card>
                        </div>
                    </Collapse>
                    <Button
                        onClick={toggleOpen}
                        variant="outlined"
                        className="text-base font-normal mt-8 w-fit py-2 transition-all"
                    >
                        {openCol ? "收起" : "展開查看詳細最新菜單"}
                    </Button>
                </div>
            </div>
        </>
    );
}
