import SectionHeader from "../../components/SectionHeader";
import "../../styles/feedback.css";
import photo1 from "../../assets/images/profile1.jpeg";
import photo2 from "../../assets/images/profile2.jpeg";
import photo3 from "../../assets/images/profile3.png";
import photo4 from "../../assets/images/profile5.png";
import photo5 from "../../assets/images/profile4.png";

function FeedbacksSection() {
  return (
    <div className=" flex justify-center">
      <div className="max-w-screen-xl w-full p-4 flex flex-col justify-center items-center">
        <SectionHeader>Feedbacks</SectionHeader>
        <div className="feedback-body">
          <main className="testimonial-grid">
            <article className="testimonial grid-col-span-2 flow quote text-neutral-100 bg-first-accent">
              <div className="flex">
                <div>
                  <img src={photo1} alt="Khaleed Opeloyeru" />
                </div>
                <div>
                  <h2 className="name">Khaleed Opeloyeru</h2>
                  <p className="position">Verified Client</p>
                </div>
              </div>
              <p>
                " Thanks to Nimor, my web portfolio is now sleek, professional,
                and gets me noticed. They nailed the design and made it easy for
                potential clients to see my work. Highly recommend their
                services! "
              </p>
            </article>
            <article className="testimonial flow bg-secondary-400 text-neutral-100">
              <div className="flex">
                <div>
                  <img src={photo2} alt="Jonathan Walters" />
                </div>
                <div>
                  <h2 className="name">Jonathan Walters</h2>
                  <p className="position">Verified Client</p>
                </div>
              </div>
              <p>
                " I was impressed by the level of expertise Nimor brought to the
                table. They guided me through the entire process, offered
                valuable insights, and delivered a website that perfectly
                captures the essence of my brand. Highly recommended! "
              </p>
            </article>
            <article className="testimonial flow bg-neutral-100 text-secondary-400">
              <div className="flex">
                <div>
                  <img src={photo3} alt="₦airaupdatesng" />
                </div>
                <div>
                  <h2 className="name">₦airaupdatesng</h2>
                  <p className="position">Verified Client</p>
                </div>
              </div>
              <p>
                “ Nimor's attention to detail and commitment to excellence set
                them apart from other agencies. They were patient,
                communicative, and went above and beyond to ensure my
                satisfaction. I'm thrilled with my new website and grateful for
                their hard work. "
              </p>
            </article>
            <article className="testimonial grid-col-span-2 flow bg-secondary-500 text-neutral-100">
              <div className="flex">
                <div>
                  <img
                    className="border-primary-400"
                    src={photo4}
                    alt="Patrick Abrams"
                  />
                </div>
                <div>
                  <h2 className="name">Rentease</h2>
                  <p className="position">Verified Client</p>
                </div>
              </div>
              <p>
                “ Nimor exceeded my expectations in every way. They took the
                time to understand my vision and brought it to life with a
                stunning website design. I'm thrilled with the results and would
                definitely work with them again. "
              </p>
            </article>
            <article className="testimonial flow bg-neutral-100 text-secondary-400">
              <div className="flex">
                <div>
                  <img src={photo5} alt="Kira Whittle" />
                </div>
                <div>
                  <h2 className="name">Bundleup</h2>
                  <p className="position">Verified Client</p>
                </div>
              </div>
              <p>
                " I am incredibly impressed with Nimor's professionalism and
                dedication to their craft. They took the time to understand my
                business goals and delivered a website that not only looks great
                but also drives results. Working with Nimor was a seamless
                experience, and I would highly recommend them to anyone looking
                for top-notch web design services. "
              </p>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}

export default FeedbacksSection;
