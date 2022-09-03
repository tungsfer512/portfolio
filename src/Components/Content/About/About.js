

import { Col, Container, Row, Image } from "react-bootstrap";
// import MyBreadcrumb from "../Breadcrumb/MyBreadcrumb";
import avatar from "../../../Assets/Images/avatar.jpg";

const About = (props) => {

  return (
    <div className="about bg-secondary bg-opacity-10">
      {/* <MyBreadcrumb></MyBreadcrumb> */}
      <Container>
        <Row className="flex-column flex-lg-row py-5">
          <Col sm lg={3} className="avatar px-3">
            <div className="p-4 p-lg-2 bg-white">
              <Image src={avatar} thumbnail className="border-5 border-white rounded-2"></Image>
            </div>
          </Col>
          <Col sm lg={6} className="summary px-3">
            <div className="p-4 bg-white">
              <div className="text-uppercase mb-3 fs-5">Summary</div>
              <p>
                I'm Bui Van Tung, a full stack developer with<strong> 1 years of experience in Spring Boot technologies</strong> and <strong>1 year of experience in MERN stack</strong>, with good knowledge of <i>Database Design, Design Pattern, Object-Oriented Analysis and Design</i>.
              </p>
              <p>
                Learning new languages and technologies is what I am passionate about (I self-taught Django with 3 weeks). I am considered a team-player because I like to help other and tend to work well within groups. I can also do some mentoring tasks and do code reviewing for other team members.
              </p>
              <p>
                I like helping other and work well with group. I can also do some mentoring tasks and code reviewing for other members (I also held a presentation about IoC and DI for my team).
              </p>
              <p>
                I am also the owner of an IT blog called: toidicodedao.com. My stackoverflow profile is among the top 11% with more than 3k reps. My favorite books are: Clean Code, Head First Design Pattern, C# in Depth, Working with Legacy Code.
              </p>
              <a href="./Assets/Building+a+REST+API+with+Spring.pdf" target="_blank" className="btn btn-success">
                <i className="bi bi-download me-3"></i>
                My CV
                </a>
            </div>
          </Col>
          <Col sm lg={3} className="contact px-3">
            <div className="p-4 p-lg-3 bg-white">
              <div className="text-uppercase mb-3 fs-5">contact</div>
              <div className="contact-item d-flex">
                <i className="bi bi-geo-alt-fill pe-3"></i>
                <p>Dan Phuong, Ha Noi, VN</p>
              </div>
              <div className="contact-item d-flex">
                <i className="bi bi-telephone-fill pe-3"></i>
                <p>+84 986420512</p>
              </div>
              <div className="contact-item d-flex">
                <i className="bi bi-envelope-fill pe-3"></i>
                <p className="text-truncate">tungbv5122001@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;