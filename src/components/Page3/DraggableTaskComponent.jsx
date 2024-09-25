import React, { useRef } from 'react';
import { Box } from '@mui/material';

export default function DraggableTaskComponent() {
  const boxRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    offset.current.x = e.clientX - boxRef.current.getBoundingClientRect().left;
    offset.current.y = e.clientY - boxRef.current.getBoundingClientRect().top;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    offset.current.x = touch.clientX - boxRef.current.getBoundingClientRect().left;
    offset.current.y = touch.clientY - boxRef.current.getBoundingClientRect().top;

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  const handleMouseMove = (e) => {
    boxRef.current.style.position = 'absolute';
    boxRef.current.style.left = `${e.clientX - offset.current.x}px`;
    boxRef.current.style.top = `${e.clientY - offset.current.y}px`;
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    boxRef.current.style.position = 'absolute';
    boxRef.current.style.left = `${touch.clientX - offset.current.x}px`;
    boxRef.current.style.top = `${touch.clientY - offset.current.y}px`;
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchEnd = () => {
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };

  return (
    <Box
      ref={boxRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      sx={{
        // width: 100,
        // height: 100,
        backgroundColor: 'primary.main',
        borderRadius: 1,
        cursor: 'grab',
        position: 'absolute',
        userSelect: 'none',
      }}
    >
        Esto es una caja
    </Box>
  );
};

