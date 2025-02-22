import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div data-testid="notFoundBody" className="not-found-body">
      <div data-testid="notFoundContainer" className="not-found-container">
        <img
          data-testid="notFoundImage"
          className="not-found-image"
          src="https://res.cloudinary.com/dprsnmrbp/image/upload/v1709676545/Group_7504_qt2g1a.jpg"
          alt="not found"
        />
        <h1 className="not-found-heading" data-testid="notFoundHeading">
          Paage Not Found.
        </h1>
        <p data-testid="notFoundPara" className="not-found-para">
          We are sorry, the page you requested could not be found.
        </p>
      </div>
    </div>
  </>
)

export default NotFound
