import React, { Component } from 'react'
import Home_Cover from './Home_Cover.jpg'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="Home_Cover.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
