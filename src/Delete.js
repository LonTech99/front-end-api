import React from 'react';

export class Delete extends React.Component {

    constructor() {
        super();
        this.state = {
            id:null,
            name:null,
            genre:null,
            gameconsole:null
        }
        this.delete = this.delete.bind(this);
    }

    async loadResults(){
        const response = await fetch(`http://145.24.222.167:8000/games`)
            const json = await response.json()
            this.setState(json)
    }

    componentDidMount () {
        this.loadResults();
    }

    async delete() {
        await fetch(`http://145.24.222.167:8000/games`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        }
    )
    this.setState({deleted: true});
}

render() {


    return (
        
        <div className="row">
        <div className="col">
          <div className="btn-group">
            <button className="btn btn-success" onClick={this.delete}>
              Delete
            </button>
                     </div>
        </div>
      </div>
    )

}}