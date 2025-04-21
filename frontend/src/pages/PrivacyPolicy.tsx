import React from 'react';
import NavBar from '../components/NavBar';
import { useTheme } from '../context/ThemeContext'

const PrivacyPolicyPage: React.FC = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <NavBar />

                <main className="max-w-3xl mx-auto p-20 p-6 space-y-8">
                    {/* title */}

                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100"> 
                    Privacy Policy
                    </h1>
                    <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                        For TechR2
                        <br />
                        This Privacy Statement is effective as of 01 January 2021
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    At TechR2 we recognize the importance of protecting your personal information and are committed to processing
                     it responsibly and in compliance with applicable data protection laws in all countries in which TechR2 operates. 
                     <br /> <br />
                    This Privacy Statement describes TechR2’s general privacy practices that apply to personal information we collect, 
                    use and share about our clients, business partners, supplier and other organizations with which TechR2 has or contemplates
                     a business relationship as well as the individuals working for them. This Privacy Notice does not apply to the extent TechR2
                      processes personal information on behalf of clients for their benefit and under their control (as a “processor”), such as Cloud
                       Services or applications (“apps”). It may apply to collection of information related to authorized users of such services to the extent
                        TechR2 processes this information for its own interests (as “controller”). 
                    </p>
                    <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                    Why and how we collect and use your personal information                
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    We may collect your personal information as an individual for various purposes, such as the following: 
                    <br /> <br />
                    Access and use of websites or other online service (including “apps”) 
                    When entering one of our websites, or using an online service (where references to online services include
                     desktop or mobile applications or “apps”), we will record information necessary to provide you with access,
                      for the operation of the website and for us to comply with security and legal requirements in relation to operating our site,
                       such as passwords, IP address and browser settings. We also collect information about your activities during your visit in order
                        to personalize your website experience, such as recording your preferences and settings, and to collect statistics to help us improve
                         and further develop our websites, products and services. 
                    </p>
                    <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                    Responding to your request for information, order, or support                
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    When you contact us (online or offline) in connection with a request for information, to order a product or service, to provide you
                     with support, or to participate in a forum or other social computing tool, we collect information necessary to fulfill your request, to grant
                      you access to the product or service, to provide you with support and to be able to contact you. For instance, we collect your name and contact
                       information, details about your request and your agreement with us and the fulfillment, delivery and invoicing of your order and we may include
                        client satisfaction survey information. We retain such information for administrative purposes, defending our rights, and in connection with our
                         relationship with you.                     
                         <br /> <br />
                         When you provide your name and contact information to register in connection with such a request, the registration may serve to identify you when
                          you visit our websites. For ordering of most services and products we require you to have registered an TechR2id. Registration may also allow you to
                           customize and control your privacy settings. 
                    </p>
                    <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                    Your use of TechR2 Cloud services                 
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    We collect information about your use of TechR2 Cloud services to enable product features to operate, improve your user experience, tailor our interactions
                     with you, inform our clients on the overall use of the services, provide support and improve and develop our products and services. For details regarding the
                      technologies we employ, the personal information we collect, as well as how to control or block tracking or to delete cookies, please refer to the TechR2 Online Privacy Statement. 
                    Contacting employees of our clients, prospects, partners and suppliers 
                    In our relationship with clients or prospects, partners and suppliers, they also provide us with business contact information (such as name, business contact details, position or title
                     of their employees, contractors, advisors and authorized users) for purposes such as contract management, fulfillment, delivery of products and services, provision of support, invoicing
                      and management of the services or the relationship.                
                         <br /> <br />
                         We collect information about your use of TechR2 Cloud services to enable product features to operate, improve your user experience, tailor our interactions with you, inform our clients
                          on the overall use of the services, provide support and improve and develop our products and services. For details regarding the technologies we employ, the personal information we collect, 
                          as well as how to control or block tracking or to delete cookies, please refer to the TechR2 Online Privacy Statement. 
                        Contacting employees of our clients, prospects, partners and suppliers 
                        In our relationship with clients or prospects, partners and suppliers, they also provide us with business contact information (such as name, business contact details, position or title of their 
                        employees, contractors, advisors and authorized users) for purposes such as contract management, fulfillment, delivery of products and services, provision of support, invoicing and management of 
                        the services or the relationship. 
                    </p>
                    <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                    Visitor Information             
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    We register individuals visiting our sites and locations (name, identification and business contact information) and use camera supervision for reasons of security and safety of persons and belongings, as well as for regulatory purposes. 
                    </p>
                    <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                    Marketing
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Most information we collect about you comes from our direct interactions with you. When you register for an event or meeting we may collect information (online or offline) in relation to the event organization,
                     and during an event, such as participation in sessions and survey results. We combine the personal information we collect to develop aggregate analysis and business intelligence for conducting our business and for marketing purposes. You
                      can choose to receive information by email, telephone or postal mail about our products and services. When visiting our websites or using our services we may provide you with personalized information. You can always opt out from receiving personalized communication
                       from TechR2 by setting your marketing communication preferences here. For subscriptions, please follow the unsubscribe instructions provided at the bottom of each email. More information can be found in the TechR2 Online Privacy Statement. 
                    Where we reference that we use your personal information in connection with a request, order, transaction or agreement (or preparing for the same), or to provide you with services that you requested (such as a website), we do this because it is necessary for the performance of
                     an agreement with you. 
                     <br /><br />
                     Where we reference that we use your personal information in relation to marketing, improvement or development of our products or services, for reasons of safety and security, or regulatory requirements other than in connection with your agreement or request, we do this on the basis
                      of our or a third party’s legitimate interests, or with your consent. When we collect and use your personal information subject to the EU Privacy Legislation this may have consequences for your rights. 
                    </p>
                    <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                    Sharing of Personal Information
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    As a global organization offering a wide range of products and services, with business processes, management structures and technical systems that cross borders, TechR2 has implemented global policies, along with standards and procedures, for consistent protection of personal information.
                     As a global company, we may share information about you with our subsidiaries world-wide and transfer it to countries in the world where we do business in accordance with this Privacy Statement. 
                    <br /><br />
                    Between TechR2 controlled subsidiaries we only grant access to personal information on a need-to-know basis, necessary for the purposes for which such access is granted. In some cases, TechR2 uses suppliers located in various countries to collect, use, analyze and otherwise process personal information on its behalf. 
                    <br /><br />
                    Where appropriate, TechR2 may also share your personal information with selected partners to help us provide you, or the company you work for, products or services, or to fulfill your requests, or with your consent. When selecting our suppliers and partners, we take into account their data handling processes. 
                    <br /><br />
                    Please be aware that in certain circumstances, personal information may be subject to disclosure to government agencies pursuant to judicial proceeding, court order, or legal process. We may also share your personal information to protect the rights or property of TechR2, our business partners, suppliers or clients, and others when we have reasonable grounds to believe that such rights or property have been or could be affected. 
                    </p>
                    <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                    Information Security and Accuracy
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    We intend to protect your personal information and to maintain its accuracy. TechR2 implements reasonable physical, administrative and technical safeguards to help us protect your personal information from unauthorized access, use and disclosure. For example, we encrypt certain sensitive personal information such as PII information when we transmit such information over the Internet. We also require that our suppliers protect such
                    information from unauthorized access, use and disclosure. 
                    </p>
                    <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                    Retention Period
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    We will not retain personal information longer than necessary to fulfill the purposes for which it is processed, including the security of our processing complying with legal and regulatory obligations (e.g. audit, accounting and statutory retention terms), handling disputes, and for the establishment, exercise or defense of legal claims in the countries where we do business. 
                    <br /><br />
                    Because the circumstances may vary depending on the context and the services, the information provided in Online Privacy Statement or provided in a specific notice may provide more detailed information on applicable retention terms. 
                    </p>
                    <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                    How to contact us
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    If you have a question related to this Privacy Statement, please contact at support@techr2.com. Your message will be forwarded to the appropriate member of TechR2’s Data Privacy Team, such as Data Protection Officers or members of their teams. 
                    <br /><br />
                    Where this is relevant, the controller of your personal information is TechR2, 12477 Broad St. SW, Pataskala, OH 43062, United States, unless indicated otherwise. 
                    </p>
                    <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                    Right to Lodge a Complaint
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    In the event you consider our processing of your personal information not to be compliant with the applicable data protection laws, you can lodge a complaint: 
                    <br /><br />
                    Directly with TechR2 by using support@techr2.com 
                    </p>
                    <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                    Changes to our Privacy Statements
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    We may update this Privacy Statement from time to time to reflect changes to our data governance practices. The revised Privacy Statement will be posted here with an updated revision date. We encourage you to check back periodically for any changes
                     or updates. If we make a material change to our Privacy Statement, we will post a notice at the top of this page for 30 days. By continuing to use our websites after such revision takes effect we consider that you have read and understand the changes.  
                    </p>


                </main>
                
            </div>
        </div>
  
    )
};

export default PrivacyPolicyPage;