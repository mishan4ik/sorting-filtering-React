import React from "react";
import {Component} from "react";

export default class  Sort extends Component {

    constructor(props){
        super(props);
        this.state = {

            arr:[
                {
                    name:"Rita",
                    age:22,
                    sex:"famele"
                },
                {
                    name:"Bob",
                    age:28,
                    sex:"male"
                },
                {
                    name:"Vova",
                    age:15,
                    sex:"male"
                },
                {
                    name:"Anya",
                    age:32,
                    sex:"famele"
                }
            ]

        }

        this.Sorting = this.Sorting.bind(this);
        this.Filter = this.Filter.bind(this);
    }

    Sorting = () => {

    
        
            this.state.arr.sort((a,b) => {

                if(a.name < b.name){
                    return - 1;
                }
                if(a.name > b.name) {
                    return 1;
                }
                return 0;
            })

        this.setState({arr:this.state.arr})

        }

    Filter = () => {


       const Age =  this.state.arr.filter((array) => array.age >= 22)


        this.setState({arr:Age})

    }     
           
               
        

    render(){

        return(

            <div>

                    {this.state.arr.map((people, index) => <h2 key = {index.toString()}>{people.name} {people.age} {people.sex} </h2>)}
                    <button onClick={this.Sorting}>sort</button>
                    <button onClick={this.Filter}>filter</button>

            </div>
        )

    }

}
