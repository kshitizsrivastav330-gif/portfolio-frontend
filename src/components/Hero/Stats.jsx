import "./Hero.css";
import { motion } from "framer-motion";

const stats = [
    {
        number: "120+",
        label: "Problems Solved",
    },
    {
        number: "2+",
        label: "Projects",
    },
    {
        number: "7.6",
        label: "CGPA",
    },
    {
        number: "2025",
        label: "Graduate",
    },
];

export default function Stats() {
    return (
        <motion.div
            className="stats"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            {stats.map((item) => (
                <div
                    key={item.label}
                    className="stat-card"
                >
                    <h2>{item.number}</h2>

                    <span>{item.label}</span>
                </div>
            ))}
        </motion.div>
    );
}