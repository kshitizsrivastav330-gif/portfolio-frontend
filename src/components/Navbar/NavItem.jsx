export default function NavItem({ title, id }) {
    return (
        <a
            href={`#${id}`}
            className="text-gray-300 transition hover:text-purple-400"
        >
            {title}
        </a>
    );
}