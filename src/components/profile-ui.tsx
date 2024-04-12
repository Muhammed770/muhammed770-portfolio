import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

export default function ProfileUI() {
    return (
        <Card className="w-[100vw]  sm:w-fit  relative max-sm:mt-28 dark:bg-slate-800 ">
            <CardHeader className="pb-4 mt-12">
                <div className="flex items-center space-x-4">
                    <div className="flex-1">
                        <div className="grid justify-items-center ">
                            <div className="flex items-center space-x-4 sm:absolute ">
                                <div className="grid w-36 h-36 items-center justify-center rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 -mt-48 ">
                                    <Image
                                        alt="Avatar"
                                        className="aspect-square object-cover object-center rounded-full border"
                                        height="200"
                                        // src="/muhammed770.jpeg"
                                        src="/image.png"
                                        width="200"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid max-sm:justify-items-center">

                            <div className="mt-1 ">

                                <CardTitle>Muhammed Vengalath</CardTitle>
                                <CardDescription>@muhammed770.</CardDescription>
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm ">
                <div className="grid max-sm:justify-items-start">

                    <div className="flex items-center space-x-4">
                        <MailIcon className="w-4 h-4 flex-shrink-0" />
                        <div className="grid gap-1.5">
                            <div className="font-semibold">Email</div>
                            <div>mail.muhammed2002@gmail.com</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                        <div className="grid gap-1.5">
                            <div className="font-semibold">Phone</div>
                            <div>+91 8139043524</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <LocateIcon className="w-4 h-4 flex-shrink-0" />
                        <div className="grid gap-1.5">
                            <div className="font-semibold">Location</div>
                            <div>Kerala,IND</div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-1.5 my-6 text-center">
                    <Button size="sm">Download CV</Button>
                    <Button size="sm" variant="outline" >
                        Message
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

function LocateIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="2" x2="5" y1="12" y2="12" />
            <line x1="19" x2="22" y1="12" y2="12" />
            <line x1="12" x2="12" y1="2" y2="5" />
            <line x1="12" x2="12" y1="19" y2="22" />
            <circle cx="12" cy="12" r="7" />
        </svg>
    )
}


function MailIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}


function PhoneIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}


function UserIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
