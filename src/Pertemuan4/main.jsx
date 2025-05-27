import { createRoot } from "react-dom/client";
import FrameworkList from "./FrameworkList";
import SearchFilter from "./SearchFilter";
import Responsif from "./ResponsiveGridDesign";
import './tailwind.css';
import Latihan from "./Latihan";

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList /> */}
            {/* <SearchFilter /> */}
            {/* <Responsif /> */}
            <Latihan />
        </div>
    )