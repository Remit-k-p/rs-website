import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/WorkshopsDetail.css';

const workshops = [
  {
    id: 1,
    title: 'Robotics Bootcamp',
    date: '17 March 2025',
    description: 'Hands-on Bootcamp on different domains of Robotics for the purpose of Induction.',
    image: '/eventimages/boot1.jpg',
    content: 'A comprehensive bootcamp covering various aspects of robotics including mechanical design, electronics, and programming. Participants learned about different types of robots, their applications, and got hands-on experience with building basic robots.',
    gallery: [
      '/eventimages/bootcover.jpg',
      '/eventimages/boot2.jpg',
      '/eventimages/boot3.jpg',
      '/eventimages/boot4.jpg',
      '/eventimages/boot8.jpg',
      '/eventimages/boot5.jpg',
      '/eventimages/boot6.jpg',
      '/eventimages/boot7.jpg',

    ]
  },
  {
    id: 2,
    title: 'RoboXplore',
    date: '8 April 2025',
    description: 'Making of Line follower bot and sharing knowledge on Arduino',
    image: '/eventimages/xplore1.jpg',
    content: 'An intensive workshop focused on line follower robots and Arduino programming. Participants built their own line follower robots and learned about sensor integration, motor control, and basic programming concepts.',
    gallery: [
      '/eventimages/xplore2.jpg',
      '/eventimages/xplore3.jpg',
      '/eventimages/xplore5.jpg',
      '/eventimages/xplore6.jpg',
      '/eventimages/xplore7.jpg',
      '/eventimages/xplore8.jpg',
      '/eventimages/xplore4.jpg',
      '/eventimages/xplore9.jpg',
      '/eventimages/xplore10.jpg',
      '/eventimages/xplore11.jpg'
    ]
  },
  {
    id: 3,
    title: 'Robo Sumo',
    date: '20 & 21 Feb 2025',
    description: 'Introduction to Robot Operating System and its applications',
    image: '/eventimages/sumo1.jpg',
    content: 'A specialized workshop introducing participants to ROS (Robot Operating System). Covered topics included ROS architecture, nodes, topics, services, and practical implementation of basic robotics applications.',
    gallery: [
      '/eventimages/sumo1.jpg',
      '/eventimages/sumo2.jpg',
      '/eventimages/sumo3.jpg',
      '/eventimages/sumo4.jpg',
      '/eventimages/sumo5.png'

    ]
  },
  {
    id: 4,
    title: 'Death Race',
    date: '22 June 2025',
    description: 'Learn about drone assembly, programming, and flight control',
    image: '/eventimages/race1.jpg',
    content: 'Comprehensive workshop on drone technology covering assembly, programming, and flight control systems. Participants learned about drone components, flight dynamics, and basic programming for autonomous flight.',
    gallery: [
      '/eventimages/race2.jpg',
      '/eventimages/race3.jpg',
      '/eventimages/race4.png',
      '/eventimages/race5.png'
    ]
  },
  {
    id: 5,
    title: 'Drone Dynamics',
    date: '7 October 2023',
    description: 'Introduction to computer vision and image processing for robotics',
    image: '/eventimages/Drone1.png',
    content: 'Workshop focused on computer vision applications in robotics. Topics included image processing, object detection, and integration with robotic systems using OpenCV and Python.',
    gallery: [
      '/eventimages/Drone2.jpg',
      '/eventimages/Drone3.jpg',
      '/eventimages/Drone4.jpg'
    ]
  },
  {
    id: 6,
    title: 'Robotic Arm Workshop',
    date: '5 August 2025',
    description: 'Design and control of robotic arms for industrial applications',
    image: '/images/w3.jpg',
    content: 'Advanced workshop on robotic arm design and control. Participants learned about kinematics, inverse kinematics, and programming robotic arms for various industrial applications.',
    gallery: [
      '/images/w3.jpg',
      '/images/w1.jpg',
      '/images/w2.jpg'
    ]
  }
];

const WorkshopsDetail = () => {
  const { id } = useParams();
  const workshop = workshops.find(w => w.id === parseInt(id));

  if (!workshop) {
    return (
      <>
        <Navbar />
        <div className="container"><h2>Workshop Not Found</h2></div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="workshop-detail">
        <div className="container">
          <h1>{workshop.title}</h1>
          <span className="date">{workshop.date}</span>
          <p className="description">{workshop.description}</p>
          
          <div className="main-image-container">
            <img 
              src={workshop.image} 
              alt={workshop.title} 
              className="main-image"
            />
          </div>
          
          <div className="content">
            {workshop.content}
          </div>

          {workshop.gallery && workshop.gallery.length > 0 && (
            <>
              <h2 className="section-header">Gallery</h2>
              <div className="image-gallery">
                {workshop.gallery.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${workshop.title} - Image ${index + 1}`}
                    className="gallery-image"
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkshopsDetail; 