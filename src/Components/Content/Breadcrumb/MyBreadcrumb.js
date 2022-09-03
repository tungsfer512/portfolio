import { useEffect } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

const MyBreadcrumb = (props) => {

  let location = useLocation();

  console.log(location)
  let pathName = ['home', ...location.pathname.slice(1).split('/')];
  pathName = pathName.filter((path) => path !== '');
  console.log(pathName)
  let page = pathName?.pop();
  console.log(page);
  useEffect(() => {

  }, []);

  return (
    <Breadcrumb style={{
      height: 200,
    }} className="d-flex align-items-center justify-content-center bg-success bg-opacity-50">
      {
        pathName.length !== 0
        &&
        pathName.map((alter) => {
          return (
            <Breadcrumb.Item linkAs="span" key={alter} className="fs-4">
              <Link to={("/" + alter) === "/home" ? "/" : ("/" + alter)}
                className="link-secondary text-decoration-none fs-4"
              >
                {alter[0]?.toUpperCase() + alter?.substring(1)}
              </Link>
            </Breadcrumb.Item>
          )
        })
      }
      <Breadcrumb.Item active className="text-black fs-4">{page[0].toUpperCase() + page.substring(1)}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default MyBreadcrumb;