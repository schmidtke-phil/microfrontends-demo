import React from "react"

// imports of MicroFrontends => ts-ignore because there are no types for the import, otherwise create intrinsic elements

// @ts-ignore
import Counter from "counter/Counter"
// @ts-ignore
import ScaleCard from "card/ScaleCard"

export default function Showcase() {
    return (
        <div>
            <div className="flex justify-between mx-8 mt-4">
            <div className="w-48">
                <h2 className="text-center">
                MF-React-1
                </h2>
                <Counter />
            </div>
            <div>
                <ScaleCard />
            </div>
            </div>
        </div>
    )
}