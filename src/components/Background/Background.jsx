export default function Background() {
    return (
        <>
            <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-purple-700/20 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />

            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        </>
    );
}