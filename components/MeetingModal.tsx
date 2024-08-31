import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Loader from "./Loader";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  image?: string;
  buttonIcon?: string;
  loading?: boolean;
}
const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  image,
  buttonIcon,
  loading,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-4 py-6 text-white rounded">
        <div className="flex flex-col gap-6">
            {
                image && (
                    <div className="flex justify-center">
                        <Image 
                          src={image}
                          alt="image"
                          width={56}
                          height={56}
                        />
                    </div>
                )
            }
            <h1 className={cn('text-xl font-bold leading-[42px]', className)}>{title}</h1>
            {children}
            <Button className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl hover:bg-[#1b0030]" onClick={handleClick}>
                {buttonIcon && (
                    <Image 
                      src={buttonIcon}
                      alt="button icon"
                      width={13}
                      height={13}
                    />
                )} &nbsp;
                {
                    loading ? (
                        <Loader/>
                    ) : (
                        <p>{buttonText || 'Schedule Meeting'}</p>
                    )
                }
                
            </Button>
        </div>
      </DialogContent>
      
    </Dialog>
  );
};

export default MeetingModal;
