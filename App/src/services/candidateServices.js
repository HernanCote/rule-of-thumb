import http from './httpServices';

export function getCandidates() {
  return http.get('/candidates/');
}

export function thumbsUpVote(candidateId, userId) {
  const body = { userId };
  return http.post(`/candidates/${candidateId}/thumbs-up`, body);
}

export function thumbsDownVote(candidateId, userId) {
  const body = { userId };
  return http.post(`/candidates/${candidateId}/thumbs-down`, body);
}
