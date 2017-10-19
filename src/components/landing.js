import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
  isImportant(importance) {
    if(importance) {
      return 'High';
    } else {
      return 'Low';
    }
  }
  
  renderList() {
    return this.props.emails.map((email) => {
      return (
        <tr key={email.email}>
          <td>{email.email}</td>
          <td>{this.isImportant(email.importance)}</td>
          <td>{email.subject}</td>
          <td>{email.content}</td>
        </tr>
      );
    });
  }
  
  render() {
    return (
      <div>
        <h1>Dojo Mail</h1>
        <table className="table">
          <thead>
            <tr>
              <td>Email</td>
              <td>Importance</td>
              <td>Subject</td>
              <td>Content</td>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.emails);
  return { emails: state.emails};
}

export default connect(mapStateToProps)(Landing);