import React from 'react';

function StudentCard({ name, lastName, age, major }) {
  return (
    <div className="student-card">
      <p>{name} {lastName}</p>
      <p>Age: {age}</p>
      <p>Major: {major}</p>
    </div>
  );
}

export default StudentCard;