export default function Tooltip({text, children} : {text: string, children: React.ReactNode}) {
    return (
        <div className="relative group">
            {children}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max bg-red-400/80 text-red-100 text-xs rounded px-2 py-1">
                {text}
                <div className="absolute left-1/2 -translate-x-1/2 top-full h-0 w-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-red-400">
                </div>
            </div>
        </div>
    )
}
