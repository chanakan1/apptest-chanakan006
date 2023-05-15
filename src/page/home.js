import React from 'react'

export default function Home() {
    return (
        <div>
            <div>
                <h2>Welcome to Dog !</h2>
            </div>

            <div className="container mt-12">
                <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/55.jpg" class="d-block w-100" alt="width=1000" height="600" />
          </div>
          <div class="carousel-item">
            <img src="./images/11.jpg" class="d-block w-100" alt="width=1000" height="600" />
          </div>
          <div class="carousel-item">
            <img src="./images/12.jpg" class="d-block w-100" alt="width=1000" height="600" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="row">
                    <div class="  bg-primary text-white  p-3"><h1>about me</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p></div>
                </div>
                </div>
            </div>
    )


}