import React from 'react';

class Categories extends React.Component {
  render() {
    const { name, path } = this.props.cat
    return (
      <div>
        <a href={path}>{name}</a>
      </div>
    )
  }
}

export default Categories;
