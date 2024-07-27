import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Problem from "./pages/Problem";
import Analysis from "./pages/Analysis";
import Mechanics from "./pages/Mechanics";

const App: FC = () => {
    return (
        <>
            <div className="flex h-screen w-full items-center justify-center">
                <div className="h-full w-full sm:w-[30rem]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/problem" element={<Problem />} />
                        <Route path="/analysis" element={<Analysis />} />
                        <Route
                            path="/mechanics"
                            element={<Mechanics />}
                        ></Route>
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default App;
