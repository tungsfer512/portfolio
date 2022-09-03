import { Col } from "react-bootstrap";

const ProjectItem = (props) => {
  return (
    <Col xs={12} lg={6} className="p-3">
      <div className="bg-white p-4 d-block text-decoration-none text-black rounded-3">
        <div className="text-uppercase mb-3 fs-5 fw-bold">{props.title}</div>
        <div className="">
          <div className="mb-2 text-muted text-decoration-none fs-6 d-flex">
            <span className="d-none d-sm-inline-block">Link Github:</span>
            <a href={props.github} className="ms-3 fs-6 text-decoration-none text-primary text-truncate d-inline-block" target="_blank" rel="noreferrer" >{props.github}</a>
          </div>
          <div className="mb-2 text-muted text-decoration-none fs-6 d-flex">
            <span className="d-none d-sm-inline-block">Link Demo:</span>
            <a href={props.demo} className="ms-3 fs-6 text-decoration-none text-primary text-truncate d-inline-block" target="_blank" rel="noreferrer" >{props.demo}</a>
          </div>
          <div className="">
            <div className="text-uppercase mb-3 fs-6">Summary</div>
            <div className=" mb-2 fs-6 fw-bold">Project Description</div>
            <p>
              {props.description}
            </p>
            <div className=" mb-2 fs-6 fw-bold">
              Team size:
              <span className="fw-normal ms-3">{props.teamSize}</span>
              </div>
            <div className=" mb-2 fs-6 fw-bold">Responsibilities</div>
            <p>
              {props.responsibilities}
            </p>
            <div className=" mb-2 fs-6 fw-bold">Accomplishments</div>
            <p>
              {props.accomplishments}
            </p>
            <div className=" mb-2 fs-6 fw-bold">Technologies</div>
            <p>
              {props.technologies}
            </p>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ProjectItem;