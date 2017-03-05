import React from 'react';
import {Link} from "react-router";
class LeftNav extends React.Component {
  render () {
    return(
      <div className="leftnav">
        <h3>我的{this.props.title}</h3>
        <Link to ="/" activeStyle={{color:"#fff",backgroundColor:"rgba(0,0,0,0.6)"}} onlyActiveOnIndex = {true}><i className="fa fa-home" aria-hidden="true"></i>home</Link>
        <Link to ="/blog" activeStyle={{color:"#fff",backgroundColor:"rgba(0,0,0,0.6)"}}><i className="fa fa-th-list" aria-hidden="true"></i>blog</Link>
        <Link to ="/work" activeStyle={{color:"#fff",backgroundColor:"rgba(0,0,0,0.6)"}}><i className="fa fa-ils" aria-hidden="true"></i>work</Link>
        <Link to ="/about" activeStyle={{color:"#fff",backgroundColor:"rgba(0,0,0,0.6)"}}><i className="fa fa-language" aria-hidden="true"></i>about</Link>

      </div>
    )
  }
}

export default LeftNav;
