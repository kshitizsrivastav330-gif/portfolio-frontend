import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function ScrollDown() {
    return (
        <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
                duration: 2,
                repeat: Infinity,
            }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
            <p className="text-gray-400 text-sm text-center mb-2">
                Scroll Down
            </p>

            <FiChevronDown className="mx-auto text-3xl text-purple-500" />
        </motion.div>
    );
}