export default function Button({
                                   children,
                                   primary = false,
                                   onClick,
                               }) {
    return (
        <button
            onClick={onClick}
            className={
                primary
                    ? "rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-3 font-semibold text-white transition hover:scale-105"
                    : "rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            }
        >
            {children}
        </button>
    );
}