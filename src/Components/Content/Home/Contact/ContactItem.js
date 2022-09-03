import { Link } from "react-router-dom";

import "./ContactItem.scss";

const ContactItem = (props) => {

  return (
    <a href={props.link} target="_blank" rel="noreferrer" className="contactItem d-flex align-items-center justify-content-center m-3 rounded-circle border border-light link-light">
      <i className={`bi bi-${props.icon} text-light fs-3 p-2`} title={props.title}></i>
    </a>
  )
}

export default ContactItem;