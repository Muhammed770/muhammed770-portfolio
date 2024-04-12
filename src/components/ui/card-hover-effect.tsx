"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { projectType } from "@/types/type";
import { Badge } from "@/components/ui/badge";
export const HoverEffect = ({
    items,
    className,
}: {
    items: projectType[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-50 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card >
                        <div className="w-[100%] grid justify-items-center">

                            <div className="grid w-60 h-50 items-center justify-center  rounded-lg overflow-hidden bg-gray-800  ">
                                <Image
                                    alt="Avatar"
                                    className=" aspect-auto object-cover bg-slate-900 object-center border border-gray-900 rounded-lg"
                                    height="400"
                                    // src="/muhammed770.jpeg"
                                    src={item.image}
                                    width="400"
                                />
                            </div>
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription >
                            <div>

                                {item.description.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>

                            <div className="gap-2 mt-4">

                                {item.tags.map((tag, index) => (
                                    <Badge variant={"outline"} key={index} className=" text-slate-600  dark:text-white m-1">{tag}</Badge>
                                ))}
                            </div>
                        </CardDescription>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden dark:bg-black border-slate-200 border  dark:border-white/[0.2] dark:group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("dark:text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-700 dark:text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
