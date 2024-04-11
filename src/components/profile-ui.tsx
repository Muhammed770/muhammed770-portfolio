import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

export default function ProfileUI() {
    return (
        <Card className="w-full max-w-lg mx-auto">
                <div className="grid justify-items-center">
                    <div className="flex items-center space-x-4">
                        <div className="grid w-16 h-16 items-center justify-center rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                            <Image
                                alt="Avatar"
                                className="aspect-square object-cover object-center rounded-full border"
                                height="64"
                                src="/placeholder.svg"
                                width="64"
                            />
                        </div>
                        <div className="space-y-1 text-center">
                            <h3 className="text-lg font-bold">Jared Palmer</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">@jaredpalmer</p>
                        </div>
                    </div>
                </div>
            <CardContent className="p-4 md:p-6">
                <div className="grid gap-1.5 my-6 text-center">
                    <Button size="sm">Message</Button>
                    <Button size="sm" variant="outline">
                        Follow
                    </Button>
                </div>
                <div className="grid gap-2 text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400">Tweets</div>
                    <div className="text-sm font-medium">1,234</div>
                </div>
            </CardContent>
        </Card>
    )
}