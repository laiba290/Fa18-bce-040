import React, { useState } from "react";
import './package.css';
import img1 from '../../image/Naran.jpg'
import img2 from '../../image/kashmir.jpg'
import img3 from '../../image/sialkot.jpg'
import img4 from '../../image/skardu.jpg'
import img5 from '../../image/Kumrat-Valley.jpg'
import img6 from '../../image/swaat.jpg'
export default function Package() {
  const [pakages, setPackages] = useState([
    {
      title: "Naran Valley",
      description: "5 Days, 4 Nights Start From 18000PKR",
      buttontitle: "Book Now",
      image: img1,
    },
    {
      title: "Kashmir",
      description: "8 Days, 7 Nights Start From 30,000PKR",
      buttontitle: "Book Now",
      image: img2,
    },
    {
      title: "Turkey",
      description: "7 Days, 6 Nights Start From 109500PKR",
      buttontitle: "Book Now",
      image: img3,
    },
    {
      title: "Skardu",
      description: "8 Days, 6 Nights Start From 60000PKR",
      buttontitle: "Book Now",
      image: img4,
    },
    {
      title: "kumrat",
      description: "7 Days, 6 Nights Start From 300000PKR",
      buttontitle: "Book Now",
      image: img5,
    },{
      title: "Swaat kalaam",
      description: "4 Days, 5 Nights Start From 50000PKR",
      buttontitle: "Book Now",
      image: img6,
    },
  ]);

  return (
    <div className="body2">
        <h1>Tour Packages</h1>
      <div className="container">
        <div className="row">
          {pakages.map((item) => {
            return (
              <div className="col-4">
                <div class="card">
                  <img src={item.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">
                      {item.description}
                    </p>
                    <a href="#" class="btn btn-success">
                     {item.buttontitle}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
