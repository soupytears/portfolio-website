import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { githubIcon, githubHoverIcon } from '../assets/sns_icons/index.js'
import '../styles/ProjectCard.css';

export default function ProjectCard({ title, description, projectLink }) {
  const [isHovered, setIsHovered] = useState(false);
  const defaultImg = githubIcon;
  const hoverImg = githubHoverIcon;

  return (
    <Card className='rounded-card shadow-sm'>
      <Card.Body className='d-flex flex-column align-items-start'>
        <div className='card-title'>
          <Card.Title className='fw-bold'>{title}</Card.Title>
          <a
            href={projectLink}
            target='_blank'
            rel='noopener noreferrer'
            className='github-icon-link mt-2'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered ? hoverImg : defaultImg}
              alt='github link'
              className='github-icon-img'
            />
          </a>
        </div>
        <Card.Text className='text-muted flex-grow-1'>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
