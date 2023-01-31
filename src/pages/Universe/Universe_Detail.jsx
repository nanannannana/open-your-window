import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UniverseHM from '../../components/universe/UniverseHM';

export default function Universe_Detail() {
  const gameID = useParams();
  console.log(gameID);
  return (
    <>
      <Link to={`${gameID}`}>
        <UniverseHM />
      </Link>
    </>
  );
}
