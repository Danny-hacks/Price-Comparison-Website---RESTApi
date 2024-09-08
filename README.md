# Price-Comparison-Website---RESTApi
## Price-Comparison-Website---Frontend - https://github.com/Danny-hacks/Price-Comparison-Website---Frontend
## Price-Comparison-Website---WebScraping - https://github.com/Danny-hacks/Price-Comparison-Website---WebScraping

## **Website Description and Overview**

Book Match is a user-friendly website that offers a wide range of reading options for readers who
value convenience and diversity. This platform allows you to easily explore a vast array of
literature from the comfort of your home. We acquire data through a systematic web scraping
method. Our web scrapers extract pricing information and additional data related to books from
various designated websites. Web scraping was streamlined to Romance books to demonstrate the comparison feature properly. 

**Landing Page:**
The landing page of the Book Match website has an attractive and user-friendly design. It
features a clean and inviting user interface serving as a welcome page to BookMatch. At the top is a sleek navigation bar showcasing the Book Match logo and a "Home" link for easy
access to the main page from any section of the site.
Below the navigation bar, the hero section immediately draws attention with a bold headline,
"Find and Compare!", encouraging users to explore the application's core functionality. This
section is complemented by descriptive text that eloquently articulates the transformative power
of books, positioning them as gateways to diverse experiences and emotions.
A prominent search form below the hero section invites users to enter book titles or keywords.
The "Search" button provides a call-to-action for initiating book searches.
The "Popular Books" section is a dynamic gateway to featured literary works. Displayed in a
grid layout, each book card includes captivating book cover images, accompanied by concise
titles and author names. This arrangement enhances visual appeal and facilitates quick access to
popular book selections, enticing users to explore further.

**Search Results Page:**
The layout of the Search Results Page begins with a navigation bar at the top, which includes the
Book Match logo and a link back to the Home page for easy navigation. Directly below the
navigation bar, the page prominently displays the title "Search Results," indicating the current
context of the page. Next to it, the "results-count" dynamically updates to show the number of
books found matching the user's search criteria, providing instant feedback to enhance usability.
A prominent search form below the "Search Results" heading allows users to enter book titles or
keywords. Clicking the "Search" button initiates the book search. Below the search bar, the
results with book information based on the user's search query are displayed. Each book entry
includes essential details such as title, author, cover image, and a "View Prices" button, which
takes the user to the compare_page when clicked.
To navigate through multiple search results, a pagination control interface is incorporated at the
bottom of the page. It includes "Previous" and "Next" buttons flanking the current page of the
search results "page 1" indicator, displaying the current page number.

**Comparison Page:**
The Comparison Page is designed to provide users with comprehensive details and options for
purchasing their chosen book. The page layout begins with a consistent navigation bar featuring
the Book Match logo and a link back to the Home page, maintaining continuity with the rest of
the site's design and navigation structure.
Once users enter the Comparison Page, they encounter a central section that dynamically
populates with essential information about the selected book, including its title, author,
publication date, and a brief description. This setup ensures that users have immediate access to
key details that inform their purchasing decisions.
Below the book details of the selected book, the page features a distinct "Buy Now" section. This
section is a standout feature of the Comparison Page, presenting users with a grid layout that lists
various online retailers offering the book for sale. Each retailer entry includes details such as the
price of the book and links directly to the retailer's product page. This setup allows users to
compare prices across different platforms effortlessly.
A "Buy Now" button is prominently displayed for each retailer listed. Clicking this button directs
users to the specific retailer's website, where they can purchase the book. This functionality
provides a seamless transition from browsing to purchasing, enhancing user convenience and
facilitating informed decision-making.

### **Technologies Used:**
The website Book Match was created using a range of technologies to guarantee effectiveness,
dependability, and a smooth user experience. The platform incorporates web scraping, testing,
database management, REST API, and frontend development using Java, multithreading,
Selenium, Spring, Hibernate, JUnit, Express.js, MySQL, HTML, CSS, and JavaScript.

**Frontend Development:** <br/>
**❖ HTML and CSS:** Establish the layout and design of the website, delivering a neat and
user-friendly interface for users to browse and compare books. <br/>
**❖ JavaScript:** Improves interaction on the website, enabling dynamic content updates and
user participation.

**Backend Development:** <br/>
**❖ REST API with Express.js:** Supported by Express.js, a Node.js framework that creates a
RESTful API, the backend communicates with the MySQL database, effectively
managing HTTP requests and responses.

**Data Acquisition:** <br/>
**❖ Java and Multithreading:** Java is utilized for data acquisition, utilizing multithreading for
simultaneous processing, ensuring efficient and parallel web scraping for rapid data
retrieval. <br/>
**❖ Selenium for Web Scraping:** This tool is used for automated web interactions, allowing
dynamic content extraction during the web scraping process, and ensuring precise and
real-time data collection from various online retailers.

**Integration and Database Management:** <br/>
**❖ Spring for Integration:** The Spring framework enables seamless integration of web
scraping processes, enhancing scalability and maintainability, and ensuring smooth
coordination between different components. <br/>
**❖ Hibernate for Database Connectivity:** Hibernate manages connectivity with the MySQL
database, simplifying data handling by mapping Java objects to database tables and
streamlining database operations. <br/>
**❖ MySQL Database:** Acts as a centralized repository for scraped data, providing a
consistent and structured source of information. The Java web scraper populates this
database, maintaining an up-to-date inventory of book information. <br/>

**Testing:** <br/>
**❖ JUnit for Testing Web Scraper:** JUnit is used for unit testing to validate the reliability and
accuracy of the Java web scraper, ensuring the stability of the codebase and the
dependability of the web scraping mechanisms. <br/>
**❖ Jest for Testing API Routes and Utilities:** Used to ensure the robustness of the Express.js
API and comprehensively test routes and utilities, enhancing the overall reliability of the
backend. <br/>

**Data Scraping** <br/>
Data for the Book Match website is scraped from: <br/>
● Dubray Books - https://www.dubraybooks.ie <br/>
● Half Price Books - https://www.hpb.com <br/>
● Owl’s Nest Books - https://owlsnestbooks.com <br/>
● Qbd Books- https://www.qbd.com.au <br/>
● Wordery - https://wordery.com <br/>
● Water Stones - https://www.waterstones.com
