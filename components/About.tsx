import Statistics from "./Statistics";

const About = () => {
    return (
        <section id="about" className="container py-24 sm:py-32">
            <div className="bg-muted/50 border rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <img
                        src="./technical-support.png"
                        alt="bunny-ai_technical-support"
                        className="w-[300px] object-contain rounded-lg"
                    />
                    <div className="flex flex-col justify-between">
                        <div className="pb-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                    About{" "}
                                </span>
                                Bunny-AI
                            </h2>
                            <p className="text-xl text-muted-foreground mt-4">
                                Bunny-AI is your go-to tool for navigating
                                the world of academia. Our app leverages
                                advanced AI. Whether you are looking for
                                detailed insights, recommendations, Bunny-AI
                                is here to guide you. Trusted by thousands
                                of users, we are committed to providing you
                                with the best AI buddy you will ever need.
                            </p>
                        </div>

                        <Statistics />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
