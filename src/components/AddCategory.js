import React, { Component } from "react";
import API from "../axios/Api";
// import Header from "./Header";
import {connect} from 'react-redux'
import {addCategory} from '../publics/actions/category' 
import {Spinner, Container} from 'react-bootstrap'
import logo from '../img/defimg.svg'

export class AddCategory extends Component {
  state = {
    category: ""
  };

  handlerChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  refresh=this.componentDidMount

  handlerSubmit = async () => {
    window.event.preventDefault();
    await this.props.dispatch(addCategory(this.state))
    window.location.replace('/category');
    return this.refresh()
  };

  render() {
    return (
      this.props.categories.isLoading ? 
      <Container>
        <Spinner animation="border" style={{position:'absolute', left:'50%', top: '35%'}} />
      </Container>
      :
      <div className="container" style={{textAlign:'center'}}>
        <h2 style={{textAlign:'center', paddingLeft:'50px'}}>Add Category</h2>
        <img id="logo" src={logo} ></img>

        <br></br>
        <form onSubmit={this.handlerSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Category Name</td>
                <td>
                  <input
                    type="text"
                    name="category"
                    className="form-control"
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    type="submit"
                    value="Add"
                    // className="form-control"
                    className="btn btn-primary"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    categories: state.categories
  }
}

export default connect (mapStateToProps)(AddCategory);
