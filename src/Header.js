import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

    
    render(){

        return(
            <div>
                <div className ="header-wrapper">
                    <h1>MOVIE FINDER</h1>
                </div>

                <section className ="search-section">
                  <Link to = "/search" >
                  <button className ="searchIcons">Search Movie</button>
                  </Link> 
                </section>

                <section>
                {this.props.finished.length !== 0  &&
                    <div >
                        <h2 style ={{color:"#015761"}}>Watched movies list:</h2>
                        {this.props.finished.map((elem ,index)=>
                        <li key={index} className = "search-list">
                            <img  className = "poster-image"src={elem.Poster}
                            onError={(e)=>{e.target.onerror = null;
                            e.target.src="https://unfvideo.files.wordpress.com/2018/09/nia.jpg"}}
                            alt = {elem.Poster}/>
                            <p>{elem.Title}</p>
                        </li>
                    )}
                    </div>
                }
                {this.props.want.length !== 0  &&
                    <div >
                        <h2 style ={{color:"#990000"}} >Want to watch list:</h2>
                        {this.props.want.map((elem ,index)=>
                        <li key={index} className = "search-list">
                            <img  className = "poster-image"src={elem.Poster}
                            onError={(e)=>{e.target.onerror = null;
                            e.target.src="https://unfvideo.files.wordpress.com/2018/09/nia.jpg"}}
                            alt = {elem.Poster}/>
                            <p>{elem.Title}</p>
                        </li>
                    )}
                    </div>
                }
                </section>
            </div>
        )
    }


}
export default Header;