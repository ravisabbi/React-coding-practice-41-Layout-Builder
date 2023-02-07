import './index.css'

import ConfigurationContex from '../../context/ConfigurationContext'

const Body = () => {
  const renderingLeftNavBar = () => (
    <div className="side-nav-bar-container">
      <h1 className="side-nav-bar-heading">Left Navbar Menu</h1>
      <div className="items-container">
        <p className="item">Item 1</p>
        <p className="item">Item 2</p>
        <p className="item">Item 3</p>
        <p className="item">Item 4</p>
      </div>
    </div>
  )

  const renderingRightNavBar = () => (
    <div className="side-nav-bar-container">
      <h1 className="side-nav-bar-heading">Right Navbar Menu</h1>
      <div className="ad-main-container">
        <div className="ad-container">
          <p>Ad 1</p>
        </div>
        <div className="ad-container">
          <p>Ad 2</p>
        </div>
      </div>
    </div>
  )

  const renderingContent = () => (
    <div className="content-container">
      <h1 className="side-nav-bar-heading">Content</h1>
      <p>
        Lorem ipsum
        IVNSDFCBVURJSGDBVJKBUDFSKFGYEWBSUDKJBVJHJCBVKHDBJRDHBVKJVRBUJRBSDJV
      </p>
    </div>
  )

  return (
    <ConfigurationContex.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="body-container">
            {showLeftNavbar && renderingLeftNavBar()}
            {showContent && renderingContent()}
            {showRightNavbar && renderingRightNavBar()}
          </div>
        )
      }}
    </ConfigurationContex.Consumer>
  )
}

export default Body
