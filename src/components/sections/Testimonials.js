import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };
  return (
    <div className="content testimonials">
      {/* title */}
      <div className="title">Testimonials</div>
      {/* content */}
      <div className="row testimonials-items">
        {/* client item */}
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="revs-carousel default-revs">
            <Swiper {...props} className="owl-carousel">
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                  The quality of Geo's work speaks for itself. He's capable of creating base systems
                  but also capable of polishing those systems up into something that truly shines and
                  gives the player the best possible experience.
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/clients/Pixelbera.png" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">Pixelbera</div>
                      <div className="company"><b>Creative Director / Co-Founder </b><br></br>BeraTone</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                  Geo's capability for independent work was consistently impressive. His strong understanding of
                  C# and Unity allowed him to produce high quality systems which we still utilize in “Fire &
                  Maneuver.” His work was always of the highest quality, reflecting his understanding and
                  application of the principles of game development.
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/clients/Griffin.png" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">Griffin Johnsen</div>
                      <div className="company"><b>CEO</b><br></br>Armchair History Interactive</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                  Geo consistently displayed an admirable level of dedication and commitment to our project... showcasing his impressive
                  technical capabilities and quick learning skills. He was a valuable member of our team, and his
                  contributions have played a pivotal role in the success of "Fire & Maneuver".
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/clients/Aaron.png" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">Aaron Legault</div>
                      <div className="company"><b>Lead Developer</b><br></br>Armchair History Interactive</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                  Geo's competence extends far beyond software design, including but not limited to game design and community management.
                  He's able to find a solution or a general technical direction for sophisticated and creative ideas.
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/person.svg" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">Anonymous</div>
                      <div className="company"><b>Freelance Client</b></div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Testimonials;
