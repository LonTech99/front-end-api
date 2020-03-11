import React from 'react';

export class Create extends React.Component {
   
        constructor() {
          super();
          this.state = {
            
          };

          this.handleChange = this.handleChange.bind(this);
          this.postData = this.postData.bind(this);
        }

        handleChange(e) {
          this.setState({ [e.target.name]: e.target.value });
        }

        async postData() {
          const response = await fetch(`http://145.24.222.167:8000/games`, {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(this.state)
          });

          let myresult = await response.json();
          console.log(myresult)
        }


        
        render() {

          return (
            <form>
                <div className="row">
                    <div className="col">
                        <h1>Add a game</h1>
                        <p> Name:
                            <input onChange={this.handleChange} name="name" type="text" id="name" 
                                value={this.state.name ? this.state.name : " "}>
                            </input>
                        </p>

                        <p> Genre:
                            <input onChange={this.handleChange} name="genre" type="text" id="genre"
                                value={this.state.genre ? this.state.genre : " "}>
                            </input>
                        </p>

                        <p> gameconsole:
                            <input onChange={this.handleChange} name="gameconsole" type="text" id="gameconsole"
                                value={this.state.gameconsole ? this.state.gameconsole : " "}>
                            </input>
                        </p>  

                        <p>
                            <input onClick={this.postData} className="btn btn-primary" value="Create Game" ></input>
                        </p>
                    </div>
                </div>
                </form>
          );
        }
      }