import React, { useEffect, useState } from 'react';

import styles from './tooltip.module.scss';

interface IToolTipProps {
  text1: string;
  text2: string;
  id: number;
}

const Tooltip: React.FC<IToolTipProps> = ({ text1, text2, id }) => {
  const [positions, setPositions] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  useEffect(() => {
    const sizes = document.getElementById(`tooltip-${id}`)?.getBoundingClientRect();
    if (sizes) {
      setPositions({ top: sizes.height, left: sizes.width / 2 });
    }
  }, [document.body, id]);
  return (
    <div
      id={`tooltip-${id}`}
      className={styles.tooltipItem}
      style={{ top: `-${positions.top + 16}px`, left: `-${positions.left - 5}px` }}
    >
      <p dangerouslySetInnerHTML={{ __html: text1 }} />
      <p dangerouslySetInnerHTML={{ __html: text2 }} />
    </div>
  );
};

export default Tooltip;
