import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
  <Page
    title="About Us"
    description="Explore the world of technology with DevScribe - Your go-to source for practical and understandable articles on new technologies, web development, coding, DSA, software, Next.js, React.js, and more."
>
    <Prose>
        <p>
            Welcome to DevScribe, your gateway to the latest in technology, web development, coding, and more. At DevScribe, we are committed to providing you with practical and easily understandable articles and blogs, making complex concepts accessible to everyone.
        </p>
        <p>
            Our passion lies in delivering valuable insights on new technologies, helping you stay ahead in the fast-paced world of tech. Whether you're a seasoned developer or just starting, DevScribe is your trusted companion on the journey of learning and growth.
        </p>
        <p>
            Why choose DevScribe?
            <ul>
              <li>In-depth articles on web development, coding, DSA, and the latest software.</li>
              <li>Practical guides that simplify complex concepts.</li>
              <li>Expert insights on Next.js, React.js, and emerging technologies.</li>
              <li>Regular updates to keep you informed about the ever-evolving tech landscape.</li>
            </ul>
        </p>
        <p>
            Join our community and dive into a world where learning meets practical application. Our content is crafted to not only enhance your knowledge but also boost your website's SEO ranking. DevScribe is more than just a platform; it's a hub for tech enthusiasts seeking valuable content and growth opportunities.
        </p>
        <p>
            Ready to explore the future of technology? Browse our articles, engage with our community, and elevate your understanding of the digital realm. DevScribe - where knowledge meets innovation.
        </p>
    </Prose>
</Page>


    </>
  );
};

export default About;
