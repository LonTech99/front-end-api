import React from 'react';

export class Toggle extends React.Component {
   
        constructor() {
          super();
          this.state = {
            game: []
          };
        }

          componentDidMount() {
            this.loadGame()
            };  

            async loadGame() {
                const response = await fetch(`http://145.24.222.167:8000/games`)
                const json = await response.json()
                console.log(json.items)
                this.setState({game: json.items})
            }  
            
            render() {
                let thumbs = this.state.game.map((singleGame) => {
                    return(
                        <tr key={singleGame._id}>
                            <td>{singleGame._id}</td>
        
                            <td>
                                
                            <Button color="success" size="sm" className="mr-2" 
                                onClick={this.editGame.bind(this, singleGame._id, singleGame.name,singleGame.genre,singleGame.gameconsole)}>
                                    Edit</Button>
                            <Button color="danger" size="sm" onClick={this.loadGame.bind(this, singleGame._id)}>Delete</Button>        
                            </td>
                          
                        </tr>
        
                    )
                    });
        }
      }