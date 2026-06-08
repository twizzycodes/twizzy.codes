import Divider from "@/components/Divider";

export default function Footer() {
    return (
        <>
            <footer className="max-w-4xl w-full flex flex-col mx-auto pt-4 pb-2">
                <Divider />
                <p className="text-center font-semibold text-base pt-2">
                    Twizzy.gg - Made with NextJS, TailwindCSS, and ❤ by me (lix.bear)
                </p>
                <p className="text-center font-medium brightness-75 text-base">
                    Last updated: June 8th, 2026
                </p>
            </footer>
        </>
    );
}
