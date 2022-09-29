import React from "react"

export default function ScaleCard() {
    return (
        <div className="w-64">
            <scale-card>
                <div>
                    <img
                        src="https://www.ictfootprint.eu/sites/default/files/Telekom_Logo_2013.svg__0.png"
                        alt="placeholder"
                    />
                <div className="text-center my-2">Scale Card with Image</div>
                <div className="flex">
                    <div className="mx-auto">
                        <scale-button href="https://telekom.github.io/scale/?path=/story/scale-design-system--page&globals=locale:en;colorMode:light" target="_blank">
                            Check out<br /> Telekom Scale
                        </scale-button>
                    </div>
                </div>
                </div>
            </scale-card>
        </div>
    )
}