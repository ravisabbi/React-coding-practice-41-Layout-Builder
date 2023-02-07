import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const toggleShowContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const toggleShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const toggleShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
        console.log(event.target.checked)
      }

      return (
        <nav className="configuration-controller">
          <h1 className="layout-heading">Layout</h1>
          <ul className="layout-items-list">
            <li className="layout-item">
              <input
                id="content"
                className="checkbox"
                type="checkbox"
                checked={showContent}
                onChange={toggleShowContent}
              />
              <label htmlFor="content" className="layout-text">
                Content
              </label>
            </li>
            <li className="layout-item">
              <input
                id="rightNavbar"
                className="checkbox"
                type="checkbox"
                checked={showRightNavbar}
                onChange={toggleShowRightNavbar}
              />
              <label htmlFor="rightNavbar" className="layout-text">
                Right Navbar
              </label>
            </li>

            <li className="layout-item">
              <input
                id="leftNavbar"
                className="checkbox"
                type="checkbox"
                checked={showLeftNavbar}
                onChange={toggleShowLeftNavbar}
              />
              <label htmlFor="leftNavbar" className="layout-text">
                Left Navbar
              </label>
            </li>
          </ul>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
