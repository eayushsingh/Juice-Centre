"use client"
import BranchesPreview from "@/components/sections/BranchesPreview"

const metadata = {
    title: 'Our Branches | Nice Juice Centre',
    description: 'Visit Nice Juice Centre at our 3 locations across Hyderabad — MG Road, Tolichowki, and Salarjung Colony.',
}

export default function BranchesPage() {
    return (
        <main className="pt-20">
            <BranchesPreview />
        </main>
    )
}
