import React from "react"
import { Link } from "react-router"
import { Provider } from 'react-redux';
import { prefixLink } from "gatsby-helpers"
import Helmet from "react-helmet"
import { apiMiddleware } from 'redux-api-middleware';
import { config } from "config"
import { rhythm } from "../utils/typography"

import { createStore, applyMiddleware, compose } from 'redux';

const reducer = state => state;

const initialState = {
    foo: 1,
    bar: 2,
    baz: 3
};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(apiMiddleware),
    (window.devToolsExtension)
        ? window.devToolsExtension({
            name: 'Fabric',
            instanceId: 'Fabric'
        })
        : self => self
  )
);

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },
  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <div
          style={{
            background: `rebeccapurple`,
            marginBottom: rhythm(1),
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to={prefixLink("/")}
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Gatsby
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0,
          }}
        >
          <Provider store={store}>
            {this.props.children}
          </Provider>
        </div>
      </div>
    )
  },
})
