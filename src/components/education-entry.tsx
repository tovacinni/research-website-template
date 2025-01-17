import { Education } from "@/data/education";
import Image from "next/image"; // Import the Image component from Next.js

export function EducationEntry({ education }: { education: Education }) {
    return (
        <div className="flex items-start mb-2">
            {" "}
            {/* Use flexbox for layout */}
            {education.imageUrl && (
                <div className="mr-2">
                    {" "}
                    {/* Wrap the Image in a div for spacing */}
                    <Image
                        src={education.imageUrl}
                        alt={education.institution}
                        width={85} // Set the width for the image
                        height={85} // Set the height for the image
                        className="object-cover" // Maintain aspect ratio
                    />
                </div>
            )}
            <div className="flex flex-col">
                {" "}
                {/* Column layout for year and institution */}
                <h3 className="text-base mb-1 font-serif">
                    {education.institution}
                </h3>
                <p className="text-sm text-zinc-600">{education.degree}</p>
                <span className="text-xs text-zinc-500 mt-1">
                    {education.year}
                </span>
            </div>
        </div>
    );
}
