// Typed.js rotating role line
if (window.Typed) {
  new Typed('.typing-text', {
    strings: [
      'abstractive summarization',
      'contrastive learning (BRIO)',
      'computer vision',
      'OSINT & threat analysis'
    ],
    typeSpeed: 45,
    backSpeed: 25,
    backDelay: 1200,
    loop: true
  });
}

// Render skills from data/skills.json
fetch('data/skills.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;
    grid.innerHTML = data.groups.map(group => `
      <div class="skill-group">
        <h3>${group.label}</h3>
        <ul>${group.items.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
    `).join('');
  })
  .catch(err => console.error('Could not load skills.json', err));

// Render projects from data/projects.json
fetch('data/projects.json')
  .then(res => res.json())
  .then(projects => {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = projects.map(p => `
      <div class="project-card">
        <div class="tag">${p.tag}</div>
        <h3>${p.name}</h3>
        <div class="period">${p.period}</div>
        <p class="desc">${p.desc}</p>
        ${p.metrics && p.metrics.length ? `
          <div class="metric-row">
            ${p.metrics.map(m => `<span class="metric">${m.label} <b>${m.value}</b></span>`).join('')}
          </div>` : ''}
        <div class="stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
        <div class="links">
          ${p.links.view ? `<a href="${p.links.view}" target="_blank" rel="noopener"><i class="fas fa-eye"></i> View</a>` : ''}
          ${p.links.code ? `<a href="${p.links.code}" target="_blank" rel="noopener"><i class="fas fa-code"></i> Code</a>` : ''}
        </div>
      </div>
    `).join('');
  })
  .catch(err => console.error('Could not load projects.json', err));
