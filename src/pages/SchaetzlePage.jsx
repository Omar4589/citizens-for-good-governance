import React from 'react';
import CandidatePage from '../components/CandidatePage';
import { candidates } from '../data/candidates';

export default function SchaetzlePage() {
  return <CandidatePage candidate={candidates.schaetzle} />;
}
