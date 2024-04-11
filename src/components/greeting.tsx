"use client"
import { useState, useEffect } from "react";

export default function Greeting() {
    const [greeting, setGreeting] = useState("Hi.");
    const greetings = ["Hi.", "Hola.", "Bonjour.", "Namaste.", "Marhaba."];
    useEffect(() => {
        const interval = setInterval(() => {
            setGreeting(prevGreeting => {
                const currentIndex = greetings.indexOf(prevGreeting);
                const nextIndex = (currentIndex + 1) % greetings.length;
                return greetings[nextIndex];
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="">
            <h1 className=" font-mono text-4xl" >{greeting}</h1>
            <h1 className=" font-mono text-4xl" >I &apos;m</h1>
            <h1 className=" font-mono text-4xl" >Muhammed.</h1>
            <p className="font-mono mt-2">I&apos;m a computer science engineer and a fullstack developer from India.
                <br />
                I like to build things for the web.
                <br />
                Interest in design,art and code.
            </p>
        </div>
    );
}
