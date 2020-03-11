import React from 'react';
import { Card } from './Card';
import { Modal } from 'reactstrap'
import { ModalHeader } from 'reactstrap'
import { ModalBody } from 'reactstrap'
import { ModalFooter } from 'reactstrap'
import { Table } from 'reactstrap'
import { Button } from 'reactstrap'
import { Input } from 'reactstrap'
import { FormGroup } from 'reactstrap'
import { Label } from 'reactstrap'
import  axios  from 'axios'

export class GameDex extends React.Component {

    constructor() {
        super()
        this.state = { 
            game: []
        ,
        editGameData: {
            _id: '',
            name: '',
            genre: '',
            gameconsole: ''
        },
        editGameModal: false
    }

    }

    componentDidMount() {
        this.loadGame()
        }

    toggleEditGameModal() {
        this.setState({
            editGameModal: ! this.state.editGameModal
        });
    }

        async loadGame() {
            const response = await fetch(`http://145.24.222.167:8000/games`)
            const json = await response.json()
            console.log(json.items)
            this.setState({game: json.items})
        }    

    
            updateGame(){
                const {name, genre, gameconsole} = this.state.editGameData;
                 axios.put('http://145.24.222.167:8000/games/' + this.state.editGameData._id, {
                     name, genre, gameconsole}).then((response) => {
                         this.loadGame();
                     });
                 }

                 editGame(_id, name, genre, gameconsole) {
                    this.setState({
                        editGameData: { _id, name, genre, gameconsole}, editGameModal: ! this.state.editGameModal
                    });
                }

                deleteGame(_id) {
                    axios.delete('http://145.24.222.167:8000/games/' + _id).then((response)=>{
                        this.loadGame();
                    });
                }
                


        

    render() {

        let thumbs = this.state.game.map((singleGame) => {
            return(
                <tr key={singleGame._id}>
                    <td>{singleGame._id}</td>
                    <td>{singleGame.name}</td>
                    <td>{singleGame.genre}</td>
                    <td>{singleGame.gameconsole}</td>
                    <td>
                        
                    <Button color="success" size="sm" className="mr-2" 
                        onClick={this.editGame.bind(this, singleGame._id, singleGame.name,singleGame.genre,singleGame.gameconsole)}>
                            Edit</Button>
                    <Button color="danger" size="sm" onClick={this.deleteGame.bind(this, singleGame._id)}>Delete</Button> 
                    <Button color="success" size="sm" className="mr-2" 
                        onClick={this.editGame.bind(this, singleGame._id, singleGame.name,singleGame.genre,singleGame.gameconsole)}>
                            Show</Button>       
                    </td>
                  
                </tr>

            )
            });
            
        return (
            <div>
            <Modal isOpen={this.state.editGameModal} toggle={this.toggleEditGameModal.bind(this)}>
            <ModalHeader toggle={this.toggleEditGameModal.bind(this)}>Edit game</ModalHeader>
            <ModalBody>
                <FormGroup>
              <Label for="name">Name</Label>
              <Input id="name" value={this.state.editGameData.name} onChange={(e) => {
                  let { editGameData} = this.state;
    
                  editGameData.name=e.target.value;
                  this.setState({editGameData});
              }} />
              </FormGroup>
              <FormGroup>
              <Label for="genre">Genre</Label>
              <Input id="genre" value={this.state.editGameData.genre} onChange={(e) => {
                  let { editGameData} = this.state;
    
                  editGameData.genre=e.target.value;
                  this.setState({editGameData});
              }} />
    
                </FormGroup>
                <FormGroup>
              <Label for="gameconsole">Genre</Label>
              <Input id="gameconsole" value={this.state.editGameData.gameconsole} onChange={(e) => {
                  let { editGameData} = this.state;
    
                  editGameData.gameconsole=e.target.value;
                  this.setState({editGameData});
              }} />
    </FormGroup>
    </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.updateGame.bind(this)}>Update game </Button>
              <Button color="secondary" onClick={this.toggleEditGameModal.bind(this)}>Cancel</Button>
            </ModalFooter>
          </Modal>
           
                <Table>
                    <thead>
                        <tr>
                            {thumbs}

                        </tr>
                    </thead>
                </Table>
            </div>
        )   
    }
}