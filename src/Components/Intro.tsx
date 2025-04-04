"use client";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import Link from "next/link";

interface IntroProps {
  data?: {
    content?: React.ReactNode;
    link?: string;
    logo?: {
      url: string;
    };
  };
  customClass?: string;
}

const Intro: React.FC<IntroProps> = ({ data, customClass }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className={`intro-wrapper ${customClass}`} data-aos="fade-up" data-aos-effect="100">
      <Container>
        <Row>
          <Col xl={8} className="order-xl-1 order-2">
            <div className="intro-text">{data?.content && <div>{data.content}</div>}</div>
          </Col>
          <Col xl={1} className="order-xl-2" />
          {data?.logo && (
            <Col xl={3} className="order-xl-2 order-1">
              <div className="intro-logo-img-wrapper">
                <div className="intro-logo-img">
                  {data?.link ? (
                    <Link href={data.link} target="_blank">
                      <img src={data.logo.url} className="img-fluid" />
                    </Link>
                  ) : (
                    <img src={data.logo.url} className="img-fluid" />
                  )}
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Intro;