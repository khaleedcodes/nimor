import SectionHeader from "../../components/SectionHeader";
import "../../styles/feedback.css";
import photo1 from "../../assets/images/image-daniel.jpg";
import photo2 from "../../assets/images/image-jeanette.jpg";
import photo3 from "../../assets/images/image-jonathan.jpg";
import photo4 from "../../assets/images/image-kira.jpg";
import photo5 from "../../assets/images/image-patrick.jpg";

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
                  <img src={photo1} alt="daniel clifford" />
                </div>
                <div>
                  <h2 className="name">Daniel Clifford</h2>
                  <p className="position">Verified Graduate</p>
                </div>
              </div>
              <p>
                "I couldn't be happier with the website Nimor created for my
                business. From the initial consultation to the final launch,
                they were professional, creative, and focused on meeting my
                needs. Thank you for a job well done!"
              </p>
            </article>
            <article className="testimonial flow bg-secondary-400 text-neutral-100">
              <div className="flex">
                <div>
                  <img src={photo2} alt="Jonathan Walters" />
                </div>
                <div>
                  <h2 className="name">Jonathan Walters</h2>
                  <p className="position">Verified Graduate</p>
                </div>
              </div>
              <p>
                "I was impressed by the level of expertise Nimor brought to the
                table. They guided me through the entire process, offered
                valuable insights, and delivered a website that perfectly
                captures the essence of my brand. Highly recommended!"
              </p>
            </article>
            <article className="testimonial flow bg-neutral-100 text-secondary-400">
              <div className="flex">
                <div>
                  <img src={photo3} alt="Jeanette Harmon" />
                </div>
                <div>
                  <h2 className="name">Jeanette Harmon</h2>
                  <p className="position">Verified Graduate</p>
                </div>
              </div>
              <p>
                “Nimor's attention to detail and commitment to excellence set
                them apart from other agencies. They were patient,
                communicative, and went above and beyond to ensure my
                satisfaction. I'm thrilled with my new website and grateful for
                their hard work."
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
                  <h2 className="name">Patrick Abrams</h2>
                  <p className="position">Verified Graduate</p>
                </div>
              </div>
              <p>
                “Nimor exceeded my expectations in every way. They took the time
                to understand my vision and brought it to life with a stunning
                website design. I'm thrilled with the results and would
                definitely work with them again."
              </p>
            </article>
            <article className="testimonial flow bg-neutral-100 text-secondary-400">
              <div className="flex">
                <div>
                  <img src={photo5} alt="Kira Whittle" />
                </div>
                <div>
                  <h2 className="name">Kira Whittle</h2>
                  <p className="position">Verified Graduate</p>
                </div>
              </div>
              <p>
                "I am incredibly impressed with Nimor's professionalism and
                dedication to their craft. They took the time to understand my
                business goals and delivered a website that not only looks great
                but also drives results. Working with Nimor was a seamless
                experience, and I would highly recommend them to anyone looking
                for top-notch web design services."
              </p>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}

export default FeedbacksSection;
