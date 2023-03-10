import Image from "next/image";
import heroImage from "../images/hero.png";
import { Container, Row, Col } from "reactstrap";
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                Tierra Productividad <br />
                <span className="text-primary font-weight-medium">
                  Sustentable
                </span>
              </h1>
              <p className="text-muted mb-4 pb-2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
              <a href="#" className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <Image
                src={heroImage}
                alt="Tierra Productividad Sustentable imagen de inicio"
                className="img-fluid mx-auto d-block"
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
