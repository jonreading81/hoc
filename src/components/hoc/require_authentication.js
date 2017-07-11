import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {

    static contextTypes = {
      router: React.PropTypes.object
    }

    authenticate(props) {
      if(!props.authenticated) {
          this.context.router.push('/');
      }
    }

    componentWillMount() {
      this.authenticate(this.props);
    }

    componentWillUpdate(nextProps) {
      this.authenticate(nextProps);
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps({authenticated}) {
    return {authenticated}
  }
  return connect(mapStateToProps)(Authentication);
}
