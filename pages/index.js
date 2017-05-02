import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

class Index extends React.Component {

  render() {
    return (
      <div>
        <h1>
          Hi people
        </h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <button onClick={this.props.doAThing}>Hi</button>
        <Link to={prefixLink('/page-2/')}>Go to page 2</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => state;
const actions = {
  doAThing: () => { type: 'DO_A_THING '}
}

export default connect(mapStateToProps, actions)(Index);
