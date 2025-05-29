export default function Tooltip({text, children} : {text: string, children: React.ReactNode}) {
    return (
        <div className="relative group">
            {children}
            <div className="tooltip-box">
                {text}
                <div className="tooltip-triangle">
                </div>
            </div>
        </div>
    )
}
