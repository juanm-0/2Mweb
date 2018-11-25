import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import NavbarResponsive from './navbar/navbar-responsive'

import 'semantic-ui-less/semantic.less'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <NavbarResponsive fixed={false} size='large' stackable fluid rightItems={rightItems}>
        </NavbarResponsive>

        {children}

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const leftItems = [
  { as: "a", content: "Home", key: "home" },
];
const rightItems = [
  { as: "a", content: "Services", key: "services" },
  { as: "a", content: "About", key: "about", href: "about" },
];

export default Layout
