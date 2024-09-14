import { Component } from "react";
import {Link} from 'react-router-dom'
import './index.css';

class Classes extends Component {
  state = { classList: [] };

  getClasess = async (async) => {
    const response = await fetch("http://localhost:5000/classes");
    const data = await response.json();
    console.log(data);
    this.setState((prev) => ({ classList: [...prev.classList, ...data] }));
  };

  componentDidMount() {
    this.getClasess();
  }

  render() {
    const { classList } = this.state;

    return (
      <div className="classBox d-flex flex-row justify-content-start algin-items-center flex-wrap">
        {classList.map((list) => (
          <div className="card m-2" key={list.classname}>
            <div className="card-body">
              <h5 className="card-title">{list.classname}</h5>
              <p className="card-text">by {list.instructorname}</p>
              <Link className="btn btn-outline-success" to={`/Books/${list.classid}`}>            
                Let's Read              
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Classes;
