"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { usePracticeModal } from "@/store/use-practice-modal";
export const PracticeModal = () => {

    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = usePracticeModal();

    useEffect(() => setIsClient(true), [])
    if (!isClient) {
        return null
    }
    return (
        <Dialog
            open={isOpen} onOpenChange={close}
        >
            <DialogContent className="max-w-md bg-white">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image src="/image.png" alt="Mascot" height={100} width={100} />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Practice Lesson
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        You are in a Practice Lesson.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-4 w-full">
                        <Button variant="dangerOutline" className="w-full" size="lg" onClick={close}>I understand</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    );
}