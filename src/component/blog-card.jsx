import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import S1 from '../assets/img/main/10.jpg';
import S2 from '../assets/img/main/12.jpg';
import S3 from '../assets/img/main/9.jpg';
import S4 from '../assets/img/main/7.jpg';
import '../assets/style/blog-card.css'


function BlogCard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      imageUrl: S1,
      name: 'Muhammed Nihad',
      date: 'Oct.14,2021',
      description: 'JDT Islam College of Nursing qualified for the finals of the Kerala University of Health Science Intercollegiate Football Championship. The semifinals were held at KMCT Medical College from December 31 to January 3.JDT Islam College of Nursing came second in the tournament, beating Dr. Moopens Medical College, the former champions. There were 56 teams in total and JDT Islam College of Nursing qualified for the finals after winning 6 matches. The Interzone Competitions will be held at Calicut Medical College from January 15 to 17.',
    },
    {
      imageUrl: S2,
      name: 'shanavas ',
      date: 'Oct.14,2021',
      description: "JDT Islam College of Nursing continued their streak of excellence by dominating the Annual Sports Meet held at the university grounds. The college secured the Overall Championship after winning multiple events in track and field. The team's dedication and rigorous training were evident as they topped the medal tally, bringing home numerous gold, silver, and bronze medals.",
    },
    {
      imageUrl: S3,
      name: 'Muhammed Jihad',
      date: 'Oct.14,2021',
      description: "Demonstrating excellence beyond the sports arena, JDT Islam College of Nursing also excelled in academics by winning the State-Level Debate Competition. Held at Kerala University, the competition featured 20 colleges from across the state. JDT Islam's debate team impressed the judges with their compelling arguments and eloquence, securing the first prize.",
    },
    {
      imageUrl: S4,
      name: 'Riyas ',
      date: 'Oct.14,2021',
      description: "Adding to their list of accomplishments, JDT Islam College of Nursing claimed the Overall Championship at the Intercollegiate Cultural Fest. Hosted by Malabar Medical College, the fest featured various cultural and artistic events. JDT Islam students showcased their talents in dance, music, drama, and fine arts, leading to their well-deserved victory.",
    },
  ];

  const handleShowModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='course-details'>
      <section>
        <div className='container'>
          {courses.map((course, index) => (
            <div key={index} className={`row border-bottom align-items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} onClick={() => handleShowModal(course)}>
              <div className={`col-md-12 col-lg-6 col-12 py-3 mb-3`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-offset="10">
                <div className="post-img">
                  <img
                    className='blog-img'
                    src={course.imageUrl}
                    alt={course.name}
                  />
                </div>
              </div>
              <div className={`col-md-12 col-lg-6 py-3`} data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} data-aos-offset="10">
                <div className="post-details">
                  <h5 className='text-uppercase'>{course.name}</h5>
                  <h6 className='text-l-green truncate'>{course.date}</h6>
                  <p className='truncate-6 text-justify'>{course.description}</p>
                  <button className='btn btn-more'>Read more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {selectedCourse && (
        <Modal className='blog-modal' show={showModal} onHide={handleCloseModal} size='lg' centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="text-center">
                <img className='blog-img' src={selectedCourse.imageUrl} alt={selectedCourse.name} />
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className='text-bold'>{selectedCourse.name}</h4>
            <span className='text-l-green '>{selectedCourse.date}</span>
            <p className='mt-3'>{selectedCourse.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default BlogCard;
