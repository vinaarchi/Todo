import React from 'react';

interface DoneListProps {
  completedCount: number; // Menghitung tugas yang selesai
}

const DoneList: React.FC<DoneListProps> = ({ completedCount }) => {
  return (
    <div>
      <h2 className="text-3xl">Done Tasks Count: {completedCount}</h2>
    </div>
  );
};

export default DoneList;