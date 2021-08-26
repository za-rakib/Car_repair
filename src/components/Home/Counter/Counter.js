import React from "react";
import { useSpring, animated } from "react-spring";
import "./Counter.css";
import VisibilitySensor from "react-visibility-sensor";
const Counter = () => {
  let years = useSpring({
    number: 45,
    from: { number: 0 },
    config: { duration: 5000, mass: 10, tension: 10, friction: 277 },
  });
  let project = useSpring({
    number: 8500,
    from: { number: 0 },
    config: { duration: 5000, mass: 10, tension: 10, friction: 277 },
  });
  let happy = useSpring({
    number: 2345,
    from: { number: 0 },
    config: { duration: 5000, mass: 10, tension: 10, friction: 277 },
  });
  let award = useSpring({
    number: 50,
    from: { number: 0 },
    config: { duration: 5000, mass: 10, tension: 10, friction: 277 },
  });
  return (
    <section className="section-counter" id="section-counter">
      <div className="container">
        <div className="row counter">
          <div className="col-md-6 col-lg-3 col align-self-center ">
            <div className="text-center">
              <div className="display-6 text-number">
                {/* <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <div style={{ height: 50 }}>
                      {isVisible ? (
                        <animated.span>
                          {years.number.interpolate((val) => Math.floor(val))}
                        </animated.span>
                      ) : null}
                    </div>
                  )}
                </VisibilitySensor> */}
                <animated.span>
                  {years.number.interpolate((val) => Math.floor(val))}
                </animated.span>
              </div>
              <div className="text">
                <span>Years of Experienced</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col align-self-center">
            <div className="text-center">
              <div className="display-6 text-number">
                <animated.span>
                  {project.number.interpolate((val) => Math.floor(val))}
                </animated.span>
              </div>
              <div className="text">
                <span>Project completed</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col align-self-center">
            <div className="text-center">
              <div className="display-6 text-number">
                <animated.span>
                  {happy.number.interpolate((val) => Math.floor(val))}
                </animated.span>
              </div>
              <div className="text">
                <span>Happy Customers</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col align-self-center">
            <div className="text-center">
              <div className="display-6 text-number">
                <animated.span>
                  {award.number.interpolate((val) => Math.floor(val))}
                </animated.span>
              </div>
              <div className="text">
                <span>Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
