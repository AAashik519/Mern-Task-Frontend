'use client'

import { X } from 'lucide-react'
import Link from 'next/link'

import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog' // This will now work after installing the dialog component

export function NavPopup({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-[900px] bg-black text-white border-black p-16 rounded-[50px]">
      <div className="mx-auto w-full max-w-[1200px] px-6 rounded-[50px]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl text-white">Navigation</DialogTitle>
          {/* <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white/70"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button> */}
        </DialogHeader>
        <nav className="mt-8 flex flex-col gap-6">
          <Link
            href="/case-studies"
            className="group flex items-center text-3xl font-medium"
          >
            <span>Case Studies</span>
            <span className="ml-4 rounded-full bg-white/10 px-3 py-1 text-sm">
              13
            </span>
          </Link>
          <Link href="/agency" className="text-3xl font-medium">
            Our Agency
          </Link>
          <Link href="/contact" className="text-3xl font-medium">
            Contact Us
          </Link>
          <Link href="/news" className="text-3xl font-medium">
            News
          </Link>
        </nav>
        <div className="mt-auto pt-12 flex items-center justify-between">
          <div>
            <p className="mb-4 text-sm text-white/70">Follow us</p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-white"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-white"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-white"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-white"
              >
                Awwwards
              </Link>
            </div>
          </div>
          <Button className="mt-8 w-[200px] px-8 py-7 text-xl rounded-full bg-[#6366F1] text-white hover:bg-[#6366F1]/90">
            Get in touch
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
  
  )
}

