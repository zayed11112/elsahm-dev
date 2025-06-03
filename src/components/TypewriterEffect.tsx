import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
  showCursor?: boolean;
  loop?: boolean;
  onType?: () => void;
  onDelete?: () => void;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  className = '',
  showCursor = true,
  loop = true,
  onType,
  onDelete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      if (isPaused) {
        timeout = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
        return;
      }

      if (!isDeleting) {
        // Typing phase
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
          onType?.(); // Call onType callback
          timeout = setTimeout(typeWriter, speed);
        } else {
          // Finished typing, pause before deleting
          if (loop) {
            setIsPaused(true);
            timeout = setTimeout(typeWriter, 0);
          }
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          setDisplayText(text.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
          onDelete?.(); // Call onDelete callback
          timeout = setTimeout(typeWriter, deleteSpeed);
        } else {
          // Finished deleting, start typing again
          setIsDeleting(false);
          timeout = setTimeout(typeWriter, speed);
        }
      }
    };

    timeout = setTimeout(typeWriter, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, isPaused, text, speed, deleteSpeed, pauseDuration, loop, onType, onDelete]);

  return (
    <span className={`typewriter-container ${className}`}>
      <span className="typewriter-text">
        <span className="typewriter-glow">{displayText}</span>
        {showCursor && (
          <span className="typewriter-cursor ml-1">|</span>
        )}
      </span>
    </span>
  );
};

export default TypewriterEffect;
