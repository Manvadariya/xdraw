import React, { useRef, useEffect, useState } from 'react';
import rough from 'roughjs/bin/rough';
import { io } from 'socket.io-client';

const Canvas = ({ style }) => {
  const canvasRef = useRef(null);
  const [elements, setElements] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const roughCanvas = rough.canvas(canvas);

    const drawElement = (element) => {
      if (element.type === 'rectangle') {
        roughCanvas.rectangle(element.x, element.y, element.width, element.height, { roughness: style === 'hand-drawn' ? 1 : 0 });
      }
      // Add more element types as needed
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      elements.forEach((element) => drawElement(element));
    };

    draw();
  }, [elements, style]);

  useEffect(() => {
    socketRef.current = io('http://localhost:4000');
    socketRef.current.on('elements', (newElements) => {
      setElements(newElements);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const handleMouseDown = (event) => {
    setIsDrawing(true);
    const { clientX, clientY } = event;
    const newElement = { type: 'rectangle', x: clientX, y: clientY, width: 0, height: 0 };
    setElements((prevElements) => [...prevElements, newElement]);
  };

  const handleMouseMove = (event) => {
    if (!isDrawing) return;
    const { clientX, clientY } = event;
    const index = elements.length - 1;
    const { x, y } = elements[index];
    const width = clientX - x;
    const height = clientY - y;
    const updatedElement = { ...elements[index], width, height };
    const updatedElements = [...elements];
    updatedElements[index] = updatedElement;
    setElements(updatedElements);
    socketRef.current.emit('elements', updatedElements);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
};

export default Canvas;
