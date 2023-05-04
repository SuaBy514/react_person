import React from 'react';

export function Person({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) {
  const partnerSex = sex === 'f'
    ? 'husband'
    : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      {isMarried ? (
        <p className="Person__partner">{`${partnerName} is my ${partnerSex}`}</p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  )
};