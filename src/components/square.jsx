import React, { Component } from 'react';

class Square extends Component {
    state = {  

    }

    styleButton = {
        backgroundColor:'#99ff99',
        width:100,
        height:100,
        margin:0,
        padding:0,
        verticalAlign:'middle',
    };
 
    styleMargin = {
        display:'inline-block',
       marginLeft:'28%',
       // padding:100
    }

    styleWhiteButton = {
        display:"inline-block",
        height: 75,
        width: 75,
        borderRadius: "50%",   
        align : "center",
        verticalAlign:'middle',
        backgroundColor:'white',
        border:0,
    }
    
    styleBlackButton = {
        display:"inline-block",
        height: 75,
        width: 75,
        borderRadius: "50%",   
        align : "center",
        verticalAlign:'middle',
        backgroundColor: 'black',
        border:0,
    }
    styleGreenButton = {
        display:"inline-block",
        height: 75,
        width: 75,
        borderRadius: "50%",   
        align : "center",
        verticalAlign:'middle',
        backgroundColor: '#99ff99',
        border:0,
    }

    render() { 
        return (
            <React.Fragment>
                {this.funcMargin()}
                <button style={this.styleButton}
                onClick={ () => this.props.handleOnClick(this.props.square.id)}>
                    <button style={this.getWhoOwns()}>

                    </button>
                </button>
                {this.newLine()}
            </React.Fragment>
          );
    }

    getWhoOwns()
    {
        let value = this.props.square.value;
        if(value === 0) return this.styleGreenButton;
        if(value === 2) return this.styleBlackButton;
        return this.styleWhiteButton
    }

    funcMargin()
    {
        let a = this.props.square.id;
        if(a%8 === 0) 
            return <div style={this.styleMargin}></div> ; 
        return <span></span>;
    }

    newLine()
    {
        let b = this.props.square.id;
        if(b%8 === 7) return <br/>
        return <span></span> 
    }
}
 
export default Square;