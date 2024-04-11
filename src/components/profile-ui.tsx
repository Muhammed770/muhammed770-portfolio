import Image from "next/image"

export default function ProfileUI() {
    return (
        <div className="w-36 ">
            <Image src="/muhammed770.jpeg" alt="Muhammed vengalath" width={200} height={200} />
            <h1>Muhammed vengalath</h1>
        </div>
    )
}