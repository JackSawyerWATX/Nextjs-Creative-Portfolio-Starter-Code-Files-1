import Image from "next/image";
import bg from "../../../../public/background/contact-background.png"
import Form from "@/components/contact/Form";

export default function Contact() {
    return (
        <>
            <Image 
                src={bg}
                alt="background-image"
                className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
            />

        <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
            <div className="flex flex-col items-center justify-center space-y-6 w-full sm:*:w-3/4">
                <h1 className="text-accent font-semibold text-center text-4xl capitalize">
                    First Contact
                </h1>
                <p className="text-center font-light text-sm xs:text-base">
                    Step into the circle of enchantment and weave your way into the fabric of the cosmos. Whether you seek to conjure collaboration, unlock mysteries, of simply share tales of adventure, your messages are treasured scrolls within this realm. Use the form below to send your missives through the ethereal network and await a whisper of magic in response.
                </p>
            </div>
            <Form />
        </article>

        </>
    );
}
