import React, {Component } from 'react';
import $ from 'jquery';
import Header from './komponen/Header';
import Footer from './komponen/Footer';
import About from './komponen/About';
import Resume from './komponen/Resume';
import Portfolio from './komponen/Portofolio';
import Contact from './komponen/Contact';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'bar',resumeData:{}
        };
    }
    getResumeData() {
        $.ajax({
            url:'./resumeData.json',
            dataType:'json',
            cache:false,
            success:function(data) {
                this.setState({resumeData: data});
            }.bind(this),
            error:function(xhr,status,err){
                console.log(err);
                alert(err);
            }
        });
    }
    componentDidMount(){
        this.getResumeData();
      }
    
      render() {
        return (
          <div className="App">
            <Header data={this.state.resumeData.main}/>
            <About data={this.state.resumeData.main}/>
            <Resume data={this.state.resumeData.resume}/>
            <Portfolio data={this.state.resumeData.portfolio}/>
            <Contact data={this.state.resumeData.main}/>
            <Footer data={this.state.resumeData.main}/>
          </div>
        );
      }
}

export default App;