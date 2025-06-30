import React from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import { Head } from "@inertiajs/react";

const Welcome = () => {
    return (
        <div>
            <Head title="Welcome" />
            <Navbar />
            <Hero />
        </div>
    );
};

export default Welcome;
