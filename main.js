const teamLead = document.querySelector('#team-lead');
const qaManager = document.querySelector('#qa-manager');
const week = document.querySelector('#week');

const api = 'https://team-lead-dahlia.herokuapp.com/api/v1/teams/dahlia';

fetch(api).then(response => response.json())
  .then(({data}) => {
    teamLead.textContent = data.teamLead;
    qaManager.textContent = data.qualityAssuranceManager;
    week.textContent = data.week;
  });