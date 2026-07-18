import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function MenuButton({ open, toggle }) {
    return (
        <button className="menu-btn" onClick={toggle}>
            {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
    );
}