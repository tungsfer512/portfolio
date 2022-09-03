// import MyBreadcrumb from "../Breadcrumb/MyBreadcrumb";
import Contact from "./Contact/Contact";
import "./Home.scss"

const Home = (props) => {
  return (
    <div className="home bg-black bg-opacity-75">
      {/* <MyBreadcrumb></MyBreadcrumb> */}
      <div className="home-content h-100 d-flex justify-content-center align-items-center flex-column">
        <i className="home-content-heading text-light text-uppercase fs-1 fw-bolder mb-4 text-center">welcome to my portfolio</i>
        <h1 className="home-content-name text-uppercase border-bottom border-light border-2 text-light p-1 m-1 text-center">
          i'm bui van tung
        </h1>
        <h3 className="home-content-position text-uppercase border-top border-light border-2 text-light p-2 pt-3 mb-3 text-center">a full-stack developer</h3>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default Home;