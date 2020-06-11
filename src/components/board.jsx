import React, { Component } from 'react';
import Square from './square'

class Board extends Component {
    state = { 
        imageUrl : 'jai_Ganesh_Deva.jpeg',
        turn : 1,
        squares : [],
        playerWhiteScore : 0,
        playerBlackScore : 0,
    }

    styleScreen = {
        backgroundColor:'yellow'
    }
    
    styleImg1 = {
        display : 'inline-block',
        float:'left',
        margin:5,
        width:300,
        height:200,
    };

    styleImg2 = {
        display : 'inline-block',
        float:'right',
        margin:5,
        width:300,
        height:200,
    };

    styleHeadingText = {
        textAlign:'center',
        height:75,
        padding: 75,
        margin:'auto',
        width : '50%',
    }

    checkUp(squareID , zz){
        let squares = this.state.squares;
        let change = [];
        let y = 0;
            
        squareID-=8;
        while(squareID>=0)
        {
            if(squares[squareID].value === zz)
            {
                change.push(squareID);
            }
            else
            {
                if(squares[squareID].value !== 0)
                {
                    y=1;
                }
                break;
            }
            squareID-=8;
        }
        if(y === 1)
        {        
            return change;   
        }
        else return [];   
    }
    checkDown(squareID , zz){
        let squares = this.state.squares;
        let change = [];
        let y = 0;
            
        squareID+=8;
        while(squareID<64)
        {
            if(squares[squareID].value === zz)
            {
                change.push(squareID);
            }
            else
            {
                if(squares[squareID].value !== 0)
                {
                    y=1;
                }
                break;
            }
            squareID+=8;
        }
        if(y === 1)
        {        
            return change;   
        }
        else return [];
    }

    checkRight(squareID , zz){
        let squares = this.state.squares;
        let change = [];
        let y = 0;
            
        squareID+=1;
        while(squareID%8 !== 0)
        {
            if(squares[squareID].value === zz)
            {
                change.push(squareID);
            }
            else
            {
                if(squares[squareID].value !== 0)
                {
                    y=1;
                }
                break;
            }
            squareID+=1;
        }
        if(y === 1)
        {        
            return change;   
        }
        else return [];
    }

    checkLeft(squareID , zz){
        let squares = this.state.squares;
        let change = [];
        let y = 0;
            
        squareID-=1;
        while(squareID%8 !== 7)
        {
            if(squares[squareID].value === zz)
            {
                change.push(squareID);
            }
            else
            {
                if(squares[squareID].value !== 0)
                {
                    y=1;
                }
                break;
            }
            squareID-=1;
        }
        if(y === 1)
        {        
            return change;   
        }
        else return [];
    }
    

    handleOnClick  = (squareID) => {
        let z=0;
        let playerWhiteScore = this.state.playerWhiteScore;
        let playerBlackScore = this.state.playerBlackScore;
        
        const squares = this.state.squares.map(sq=>{
            if(sq.id === squareID)
            {
                if(sq.value === 0)
                {
                    if(this.state.turn%2 === 1)
                        sq.value = 1 ;
                    else sq.value = 2 ;
                    z=1;            
                }
            }
            return sq;
        })
        if(z === 1)
        {
            if(this.state.turn%2 === 1) playerWhiteScore+=1;
            else playerBlackScore+=1; 
        }
        if(z === 1)
        {
            let upChanges = this.checkUp(squareID,(squares[squareID].value === 1)?2:1);
            for(let i=0;i<upChanges.length;i++)
            {
                squares[upChanges[i]].value = (squares[upChanges[i]].value === 1)?2:1;
            }
            let downChanges = this.checkDown(squareID,(squares[squareID].value === 1)?2:1);
            for(let i=0;i<downChanges.length;i++)
            {
                squares[downChanges[i]].value = (squares[downChanges[i]].value === 1)?2:1;
            }
            let rightChanges = this.checkRight(squareID,(squares[squareID].value === 1)?2:1);
            for(let i=0;i<rightChanges.length;i++)
            {
                squares[rightChanges[i]].value = (squares[rightChanges[i]].value === 1)?2:1;
            }
            let leftChanges = this.checkLeft(squareID,(squares[squareID].value === 1)?2:1);
            for(let i=0;i<leftChanges.length;i++)
            {
                squares[leftChanges[i]].value = (squares[leftChanges[i]].value === 1)?2:1;
            }
            
            
            if(this.state.turn%2 === 1)
            {
                 playerWhiteScore+=upChanges.length;
                 playerBlackScore-=upChanges.length;
                 playerWhiteScore+=downChanges.length;
                 playerBlackScore-=downChanges.length;
                 playerWhiteScore+=rightChanges.length;
                 playerBlackScore-=rightChanges.length;
                 playerWhiteScore+=leftChanges.length;
                 playerBlackScore-=leftChanges.length;
                
            }
            else 
            {
                playerWhiteScore-=upChanges.length;
                playerBlackScore+=upChanges.length;
                playerWhiteScore-=downChanges.length;
                playerBlackScore+=downChanges.length;
                playerWhiteScore-=rightChanges.length;
                playerBlackScore+=rightChanges.length;
                playerWhiteScore-=leftChanges.length;
                playerBlackScore+=leftChanges.length;
                
            }

        }
        
        this.setState({squares , turn:this.state.turn+z , playerBlackScore,playerWhiteScore});
    }

    render() { 
        return (
            <div style={this.styleScreen}>
                <img src={this.state.imageUrl} style={this.styleImg1}/>
                <img src={this.state.imageUrl} style={this.styleImg2}/>
                <h1 style = {this.styleHeadingText} > Jai Ganesh Deva</h1>
                {this.putID()}
                <div style={this.styleCentre}>White : {this.state.playerWhiteScore} </div>
                <div style={this.styleCentre}>Black : {this.state.playerBlackScore} </div>
                
                {this.state.squares.map(square =>
                    <Square   
                        key={square.id}
                        square={square}
                        handleOnClick = {this.handleOnClick}
                    > 
                    </Square>  
                )}
                <br/><br/><br/><br/><br/><br/>


            </div>
          );
    }
    putID()
    {
        let squares = this.state.squares; 
        if( squares.length === 0)
        {
            for(let i=0;i<64;i++)
            {
                squares.push({id:i,value:0});
            }
            this.setState({squares });
        }
    }
}
 
export default Board;