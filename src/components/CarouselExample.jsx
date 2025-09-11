import MaterialCarousel from './MaterialCarousel';

const CarouselExample = () => {
  // Example carousel items - you can customize these
  const carouselItems = [
    {
      id: 1,
      content: (
        <div className="carousel-content">
          <div className="carousel-image">
            <img 
              src="https://via.placeholder.com/800x400/00FF41/000000?text=AKPESSC+2025+Event+1" 
              alt="AKPESSC 2025 Event 1"
              className="img-fluid"
            />
          </div>
          <div className="carousel-overlay">
            <h3 className="carousel-title">Technical Workshops</h3>
            <p className="carousel-description">Hands-on sessions with industry experts</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="carousel-content">
          <div className="carousel-image">
            <img 
              src="https://via.placeholder.com/800x400/00FF88/000000?text=AKPESSC+2025+Event+2" 
              alt="AKPESSC 2025 Event 2"
              className="img-fluid"
            />
          </div>
          <div className="carousel-overlay">
            <h3 className="carousel-title">Industrial Visits</h3>
            <p className="carousel-description">Explore real-world power systems</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      content: (
        <div className="carousel-content">
          <div className="carousel-image">
            <img 
              src="https://via.placeholder.com/800x400/00FF00/000000?text=AKPESSC+2025+Event+3" 
              alt="AKPESSC 2025 Event 3"
              className="img-fluid"
            />
          </div>
          <div className="carousel-overlay">
            <h3 className="carousel-title">Networking Sessions</h3>
            <p className="carousel-description">Connect with peers and professionals</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      content: (
        <div className="carousel-content">
          <div className="carousel-image">
            <img 
              src="https://via.placeholder.com/800x400/00FFFF/000000?text=AKPESSC+2025+Event+4" 
              alt="AKPESSC 2025 Event 4"
              className="img-fluid"
            />
          </div>
          <div className="carousel-overlay">
            <h3 className="carousel-title">Cultural Events</h3>
            <p className="carousel-description">Experience Kerala's rich culture</p>
          </div>
        </div>
      )
    }
  ];

  const handleItemClick = (item, index) => {
    console.log('Carousel item clicked:', item, 'Index:', index);
    // You can add navigation logic here
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4" style={{ color: '#00FF41' }}>
            AKPESSC 2025 Events
          </h2>
          <MaterialCarousel
            items={carouselItems}
            autoPlay={true}
            interval={4000}
            showIndicators={true}
            showArrows={true}
            onItemClick={handleItemClick}
            className="mb-5"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselExample;
