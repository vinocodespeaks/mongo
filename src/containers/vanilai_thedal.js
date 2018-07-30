import React, { Component } from "react";
import { connect } from "react-redux";
import  fetchWeather  from "../actions/index";

class SearchBox extends Component{
  constructor(props){
    super(props)
    this.state={
      search:''
    }
  }

  onInputChange(event){
    this.setState({
      search:event.target.value
    })
    //console.log(this.state)
  }
  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.search)
this.setState({search:""})
  }
  render(){
    return (

        <div className="form-inline">
        <form  onSubmit={this.onFormSubmit.bind(this)} className=" input-group-lg">
        <input
          placeholder="search here"
          className="form-control"
          value={this.state.search}
          onChange={this.onInputChange.bind(this)}
        />
      <span className="input-group-btn btn-lg btn-center  ">
          <button type="submit" className="btn btn-success">search</button>
        </span>
      </form>
    </div>


    )
  }
}


export default connect(null,{fetchWeather})(SearchBox);
