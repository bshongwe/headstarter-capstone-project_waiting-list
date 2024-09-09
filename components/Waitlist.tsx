"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
    toast.success("Xclusive Bunny-AI waitlist request sent!", {
        position: "top-center",
        autoClose: 3000, // The notification will close after 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
    // Additional logic for form submission (e.g., API call) can go here
    console.log("Xclusive Bunny-AI request successful!");
};

    return (
        <section id="newsletter">
            <hr className="w-11/12 mx-auto" />

            <div className="container py-24 sm:py-32">
                <h3 className="text-center text-4xl md:text-5xl font-bold">
                    Join Our Xclusive{" "}
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                        Bunny-AI Club
                    </span>
                </h3>
                <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
                    Be part of the elite Bunny-AI elite club users that receives
                    exclusive Bunny-AI content, features, updates and invites to
                    exclusive Bunny-AI events.
                </p>

                <form
                    className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
                    onSubmit={handleSubmit}
                >
                    <Input
                        placeholder="example@email.com"
                        className="bg-muted/50 dark:bg-muted/80 "
                        aria-label="email"
                        id="email"
                        autoComplete="off"
                    />
                    <Button>Join Waitlist</Button>
                </form>
            </div>

            <ToastContainer /> {/* This is where the toasts will appear */}

            <hr className="w-11/12 mx-auto" />
        </section>
    );
};

export default Waitlist;