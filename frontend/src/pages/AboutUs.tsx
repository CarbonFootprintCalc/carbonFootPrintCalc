import React from "react";
import NavBar from "../components/NavBar";
import { useTheme } from "../context/ThemeContext";

const AboutUs: React.FC = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={isDarkMode ? "dark" : ""}>
            <div className="w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <NavBar />

                <main className="pt-20 px-4 flex flex-col items-center">
                    <div className="w-full max-w-3xl bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                        {/* page title */}
                        <h1 className="text-3xl font-extrabold mb-6 dark:text-white">
                            About Us
                        </h1>

                        {/* intro */}
                        <section className="mb-8">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                We offer one standard of service: Excellence.
                                Everyone has a story. Here is ours.
                            </p>
                        </section>  

                        {/* the beginning */} 
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-2 dark:text-gray-100">The Beginning</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                The TechR2 journey begain in 1992 when Sepp Rajaie started selling computers and servers.
                            </p>
                        </section>

                        {/* mission */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-2 dark:text-gray-100">Mission</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Since then, we have continued to demonstrate ourselves as a trusted global partner to many Fortune 50 Technology Executives.
                                Innovation and experience have fashioned us as the subject matter expert in end-of-life data and lifecycle ecosystem management. 
                                The challenges in managing data assets, passing audits, and meeting each unique industry requirement are all areas of our expertise.
                            </p>
                        </section>

                        {/* promise */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-2 dark:text-gray-100">Promise</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            With numerous ISO and NIST, we are qualified and committed to your data security management, in satisfying your regulatory demands, and 
                            achieving your unmatched industry compliance. Our international network allows us to offer best-in-class data destruction services, specialized 
                            security and compliance, global coverage, and more. 
                            <br /> <br />
                            <a href="https://techr2.com/about/#form">Schedule a Free Consultation </a>
                            </p>
                        </section>
                    </div>
                </main>
            </div>
        </div>

    )
};

export default AboutUs;
