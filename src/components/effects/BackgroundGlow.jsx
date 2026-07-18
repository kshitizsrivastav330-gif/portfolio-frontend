export default function BackgroundGlow() {
    return (
        <>
            <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-purple-700/20 blur-[140px]" />
            <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-blue-700/20 blur-[140px]" />
        </>
    );
}