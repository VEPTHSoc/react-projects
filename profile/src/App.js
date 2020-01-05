import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import Header from './components/Header';
import Books from './components/Books';
import SearchInput from './components/SearchInput';
import './App.css';

export default class App extends React.Component{
  state={
    books:[],
    text: 'Inferno'
  }

  componentWillMount(){
    this.getBooks();
  }

  getBooks(){
    axios.request({
      method: 'GET',
      url:'https://www.googleapis.com/books/v1/volumes?q='+this.state.text
    }).then((response)=>{
      this.setState({books: response.data.items},()=>{
        console.log(this.state);
      });
    }).catch(error=>{
      console.log(error);
    })
  }

  handleChange(text){
    this.setState({text: text}, this.getBooks());
  }

  render(){
    return(
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <SearchInput onChnage={this.handleChange.bind(this)} value={this.state.text} />
              <Books books={this.state.books} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}