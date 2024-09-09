import { Icons } from "@/components/Icons";

interface SponsorProps {
    icon: JSX.Element;
    name: string;
}

const sponsors: SponsorProps[] = [
    {
        icon: <Icons.gamification size={34} />,
        name: "MTN-SA",
    },
    {
        icon: <Icons.people size={34} />,
        name: "JP Morgan Chase & Co.",
    },
    {
        icon: <Icons.star size={34} />,
        name: "UNICEF",
    },
    {
        icon: <Icons.fire size={34} />,
        name: "Alibaba",
    },
    {
        icon: <Icons.twitter size={34} />,
        name: "Space-X",
    },
    {
        icon: <Icons.radar size={34} />,
        name: "anonymous",
    },
];

const Sponsors = () => {
    return (
        <section id="sponsors" className="container pt-24 sm:py-32">
            <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
                PROJECT INVESTORS & SPONSORS
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                {sponsors.map(({ icon, name }: SponsorProps) => (
                    <div
                        key={name}
                        className="flex items-center gap-1 text-muted-foreground/60"
                    >
                        <span>{icon}</span>
                        <h3 className="text-xl  font-bold">{name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Sponsors;
