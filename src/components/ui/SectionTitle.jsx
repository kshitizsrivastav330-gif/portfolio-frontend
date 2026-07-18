export default function SectionTitle({ subtitle, title }) {
    return (
        <div className="mb-16 text-center">
            <p className="uppercase tracking-[6px] text-purple-400">
                {subtitle}
            </p>

            <h2 className="mt-4 text-5xl font-black text-white">
                {title}
            </h2>
        </div>
    );
}