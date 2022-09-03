import ContactItem from "./ContactItem";



const Contact = (props) => {

  return (
    <div className="contact d-flex align-items-center justify-content-center w-100 flex-wrap">
      <ContactItem link="https://www.linkedin.com/in/t%C3%B9ng-b%C3%B9i-v%C4%83n-800177219/" title="LinkedIn" icon="linkedin"></ContactItem>
      <ContactItem link="https://www.facebook.com/tung.buivan.sfer.11235" title="Facebook" icon="facebook"></ContactItem>
      <ContactItem link="https://github.com/tungsfer512?tab=repositories" title="GitHub" icon="github"></ContactItem>
    </div>
  )
}

export default Contact;