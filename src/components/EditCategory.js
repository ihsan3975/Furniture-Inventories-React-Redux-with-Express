import React, { Component } from "react";
// import API from "../axios/Api";
import {connect} from 'react-redux'
import axios from "axios";
import {editCategories, getCategorytById, getProductById} from '../publics/actions/category'
import {Spinner, Container} from 'react-bootstrap'
// import {getProductById} from '../publics/'

export class EditCategory extends Component {
  state = {
    // id: "",
    category: ''
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    await this.props.dispatch(getCategorytById(id))
    this.setState({
    //   id: this.props.categories.categoryList.data.data[0].id,
      category: this.props.categories.categoryList.data.data[0].category
    })
  }

  handlerChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  refresh=this.componentDidMount

  handlerSubmit = async () => {
    const id = this.props.match.params.id;
    window.event.preventDefault();
    await this.props.dispatch(editCategories(id, this.state))
    window.location.replace('/category')
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
        <h2 style={{textAlign:'center', paddingLeft:'50px'}}>Edit Category</h2>

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
                    // defaultValue={this.state.category}
                    value={this.state.category}
                    className="form-control"
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>
              <br></br>
              <tr>
                <td></td>
                <td>
                  <input
                    type="submit"
                    value="Edit"
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

export default connect (mapStateToProps)(EditCategory);
