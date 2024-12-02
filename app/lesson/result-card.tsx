import { cn } from "@/data/lib/utils"
import Image from "next/image"

type Props = {
    value: number
    variant: "points" | "hearts"
}

export const ResultCard = ({ value, variant }: Props) => {
    const imgSrc = variant === 'hearts' ? "/image.png" : "/image.png"

    return (
        <div className={cn(
            "rounded-2xl border w-full",
            variant === "points" && "bg-orange-500 border-orange-400",
            variant === "hearts" && "bg-rose-500 border-rose-400"

        )}>
            <div className={cn(
                "p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
                variant === "points" && "bg-orange-500",
                variant === "hearts" && "bg-rose-500"
            )}>
                {variant === "hearts" ? "Hearts Left" : "Total XP"}
            </div>
            <div className=
                {cn("rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lg",
                    variant === "points" && "text-orange-500",
                    variant === "hearts" && "text-rose-500"
                )}>
                <Image
                    alt="Icon"
                    src={imgSrc}
                    height={30}
                    width={30}
                    className="mr-1.5"
                />
                {value}</div>
        </div>
    )
}