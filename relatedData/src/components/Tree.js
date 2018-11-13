import axios from 'axios';
import React, { Component } from 'react';
import Filter from './Filter';
import TreeNode from '../components/TreeNode';

export default class Tree extends Component {

  state = {
    nodes: [],
    select: '',
    inputValue: '',
   };

   filterArr =(event)=> {
    event.preventDefault();
       this.setState({
       nodes: this.state.nodes.filter(el => el[this.state.select] === this.state.inputValue)
       })
       
   }


   selectChange = (event)=> {
    let select = event.target.value;
    this.setState({
        select: select,
      }) 
};

   inputChange = (event) => {
    let inputText = event.target.value;
    this.setState({
      inputValue: inputText,
    })
  };
  
  addChildRoot = (event)=> {
    let id = event.currentTarget.dataset.child;
    // console.log(id);
    axios.get(`http://localhost:3001/nodes/${id}`)
    // .then(res => console.log(res));
    .then(data => {
       return this.state.nodes.map(el => data.data.id === el.id ? {...el, nodes: data.data.nodes, show: !el.show } : {...el, nodes: el.nodes})})
    .then(data => {
        this.setState({
           nodes: data,
    }, function (){
        console.log(this.state);
    })
    });
  }
  

componentDidMount(){

axios.get('http://localhost:3001/nodes')
// .then(r => console.log(r))
.then(data => {
return data.data.map(el => ({...el, nodes: [], show: false})
)})
.then(data =>
    this.setState({
        nodes: data,
}), function (){
    console.log(this.state);   
}    );
}


  render() {
   
    return (
        
      this.state.nodes.length === 0 ? <span>Loading</span> : <div>
        <Filter filterArr={this.filterArr} nodes={this.state.nodes} selectChange={this.selectChange} inputChange={this.inputChange} select={this.state.select} inputValue={this.state.inputValue}/>
        
        { this.state.nodes.map((node) => (
        <TreeNode
        childNodes={this.state.childNodes}
         key={node.id} 
         node={node}  
         id={node.id}
         addChildRoot={this.addChildRoot} 
         showFolderHendler={this.showFolderHendler}/>
        ))}
                  
      </div>
    )
  }
}
