import React from 'react';
import CandidatePage from '../components/CandidatePage';
import { candidates } from '../data/candidates';

export default function ClaytonPage() {
  return <CandidatePage candidate={candidates.clayton} />;
}
