import { useEffect, useState, useRef } from 'react';
import s from './Skills.module.scss';

const SkillsBar = ({ label, percentage, isVisible }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setWidth(percentage);
    } else {
      setWidth(0);
    }
  }, [isVisible, percentage]);

  return (
    <div className={s.skillItem}>
      <div className={s.info}>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
      </div>
      <div className={s.track}>
        <div 
          className={s.bar} 
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default SkillsBar