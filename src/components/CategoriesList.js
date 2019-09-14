import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux'
import CardProduct from "./CardProduct";
import "../img/style.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import {Spinner, Container, Table} from 'react-bootstrap'
import {getCategories, deleteCategories} from '../publics/actions/category'

export class CategoriesList extends Component {
  state = {
    categories: []
  };

  componentDidMount = async () => {
    await this.props.dispatch(getCategories())
        this.setState({
          categories: this.props.categories.categoryList.data.data
        })
  };

  // refresh=this.componentDidMount

  handleDelete = (e, id) => {
    e.preventDefault()
    confirmAlert({
      title: 'Confirm Delete',
      message: 'Are you sure?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.dispatch(deleteCategories(id))
        .then(()=> {
          window.location.replace('/category')
          // return refresh()
        })
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    })
  }

  render() {
    const renderData=this.state.categories.map(category => {
      return (
        <tr key={category.id}>
          <td style={{verticalAlign:'middle'}}>{category.id}</td>
          <td style={{verticalAlign:'middle'}}>{category.category}</td>
          <td>
            <div className="row" style={{ margin: 3, float:'right' }}>
              <Link to={"/editcategory/" + category.id} style={{ margin: 2 }}>
                <input type="submit" value="Edit" className="btn btn-primary" />
              </Link>
              <Link onClick={(e) => this.handleDelete(e, category.id)} style={{ margin: 2 }}>
                <input type="submit" value="Delete" className="btn btn-danger" />
              </Link>
        </div>
          </td>
        </tr>
      );
    });

    return (
      this.props.categories.isLoading ? 
      <Container>
        <Spinner animation="border" style={{position:'absolute', left:'50%', top: '35%'}} />
      </Container>
      :
      <div className="container" style={{maxWidth:'650px'}}>
        <h1 style={{marginTop: '65px'}}>Table Category</h1>
        <Link to={"/addcategory/"} style={{ float:'right' , marginBottom:'21px'}}>
          <input type="submit" value="Add Category" className="btn btn-info"/>
        </Link>
        <Table responsive>
          <thead style={{textAlign: 'center'}}>
            <tr>
              <th>ID Category</th>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{textAlign: 'center'}}>
            {renderData}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    categories: state.categories
  }
}
export default connect(mapStateToProps)(CategoriesList);
