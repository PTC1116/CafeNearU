import { List, ListItem, ListItemPrefix, Chip } from "@material-tailwind/react";

export default function StatusInfo() {
    return (
        <div className="border border-gray-500 h-fit rounded-md flex flex-col justify-start my-4 items-start">
            <div className="self-start m-4 mb-2 text-lg font-light border-0 border-l-4 border-l-[#D0B8A8] pl-2 text-gray-800 flex flex-col xl:flex-row gap-4 xl:items-center">
                <div>即時店況 &nbsp; </div>
                <div className="text-sm">上次更新：2023/08/13 10:41:00</div>
            </div>
            <List className="mx-2">
                {" "}
                <ListItem className="py-1.5 px-3 text-base font-normal text-blue-gray-700">
                    <ListItemPrefix>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                            />
                        </svg>
                    </ListItemPrefix>
                    <span className="bg-teal-100 text-teal-800 p-1 px-2 rounded-md">
                        今日正常營業
                    </span>
                </ListItem>
                <ListItem className="py-1.5 px-3 text-base font-normal text-blue-gray-700">
                    <ListItemPrefix>
                        <svg
                            width="64px"
                            height="64px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M17 21V16M7 21V16"
                                    stroke="#455a64"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                ></path>{" "}
                                <path
                                    d="M12 16H7.00001C6.01506 16 5.52259 16 5.22538 15.6762C4.92818 15.3523 4.9669 14.9018 5.04435 14.0008C5.10026 13.3503 5.22669 12.9125 5.51257 12.5858C6.02514 12 6.8501 12 8.50001 12H15.5C17.1499 12 17.9749 12 18.4874 12.5858C18.7733 12.9125 18.8998 13.3503 18.9557 14.0008C19.0331 14.9018 19.0718 15.3523 18.7746 15.6762C18.4774 16 17.985 16 17 16H16"
                                    stroke="#455a64"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                ></path>{" "}
                                <path
                                    d="M7 8C7 6.13077 7 5.19615 7.40192 4.5C7.66523 4.04394 8.04394 3.66523 8.5 3.40192C9.19615 3 10.1308 3 12 3C13.8692 3 14.8038 3 15.5 3.40192C15.9561 3.66523 16.3348 4.04394 16.5981 4.5C17 5.19615 17 6.13077 17 8V12H7V8Z"
                                    stroke="#455a64"
                                    stroke-width="1.5"
                                ></path>{" "}
                            </g>
                        </svg>
                    </ListItemPrefix>
                    <Chip variant="outlined" color="blue-gray" value="插座席" />
                    <span className="text-lg ">
                        &nbsp; <strong>額滿</strong> / 25
                    </span>
                </ListItem>
                <ListItem className="py-1.5 px-3 text-base font-normal text-blue-gray-700">
                    <ListItemPrefix>
                        <svg
                            width="64px"
                            height="64px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M17 21V16M7 21V16"
                                    stroke="#455a64"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                ></path>{" "}
                                <path
                                    d="M12 16H7.00001C6.01506 16 5.52259 16 5.22538 15.6762C4.92818 15.3523 4.9669 14.9018 5.04435 14.0008C5.10026 13.3503 5.22669 12.9125 5.51257 12.5858C6.02514 12 6.8501 12 8.50001 12H15.5C17.1499 12 17.9749 12 18.4874 12.5858C18.7733 12.9125 18.8998 13.3503 18.9557 14.0008C19.0331 14.9018 19.0718 15.3523 18.7746 15.6762C18.4774 16 17.985 16 17 16H16"
                                    stroke="#455a64"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                ></path>{" "}
                                <path
                                    d="M7 8C7 6.13077 7 5.19615 7.40192 4.5C7.66523 4.04394 8.04394 3.66523 8.5 3.40192C9.19615 3 10.1308 3 12 3C13.8692 3 14.8038 3 15.5 3.40192C15.9561 3.66523 16.3348 4.04394 16.5981 4.5C17 5.19615 17 6.13077 17 8V12H7V8Z"
                                    stroke="#455a64"
                                    stroke-width="1.5"
                                ></path>{" "}
                            </g>
                        </svg>
                    </ListItemPrefix>
                    <Chip variant="outlined" color="blue-gray" value="一般席" />
                    <span className="text-lg ">
                        &nbsp; <strong>8</strong> / 25
                    </span>
                </ListItem>
                <ListItem className="py-1.5 px-3 text-base font-normal text-blue-gray-700">
                    <ListItemPrefix>
                        <svg
                            width="64px"
                            height="64px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M17 21V16M7 21V16"
                                    stroke="#455a64"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                ></path>{" "}
                                <path
                                    d="M12 16H7.00001C6.01506 16 5.52259 16 5.22538 15.6762C4.92818 15.3523 4.9669 14.9018 5.04435 14.0008C5.10026 13.3503 5.22669 12.9125 5.51257 12.5858C6.02514 12 6.8501 12 8.50001 12H15.5C17.1499 12 17.9749 12 18.4874 12.5858C18.7733 12.9125 18.8998 13.3503 18.9557 14.0008C19.0331 14.9018 19.0718 15.3523 18.7746 15.6762C18.4774 16 17.985 16 17 16H16"
                                    stroke="#455a64"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                ></path>{" "}
                                <path
                                    d="M7 8C7 6.13077 7 5.19615 7.40192 4.5C7.66523 4.04394 8.04394 3.66523 8.5 3.40192C9.19615 3 10.1308 3 12 3C13.8692 3 14.8038 3 15.5 3.40192C15.9561 3.66523 16.3348 4.04394 16.5981 4.5C17 5.19615 17 6.13077 17 8V12H7V8Z"
                                    stroke="#455a64"
                                    stroke-width="1.5"
                                ></path>{" "}
                            </g>
                        </svg>
                    </ListItemPrefix>
                    <Chip
                        variant="outlined"
                        color="blue-gray"
                        value="戶外席 "
                    />
                    <span className="text-lg ">
                        &nbsp; <strong>10</strong> / 25
                    </span>
                </ListItem>
            </List>
        </div>
    );
}
