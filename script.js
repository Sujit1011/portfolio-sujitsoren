const skills=[
  {name:'Power Apps (Canvas)',img:'powerapps.png',icon:'bi-grid-3x3-gap-fill',level:'Advanced',pct:90,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'Power Automate',img:'powerautomate.png',icon:'bi-lightning-fill',level:'Advanced',pct:88,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'Power Fx',img:'powerfx.png',icon:'bi-code-slash',level:'Advanced',pct:85,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'Dataverse',img:'dataverse.png',icon:'bi-database-fill',level:'Advanced',pct:86,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'SharePoint Online',img:'sharepoint.png',icon:'bi-layers-fill',level:'Advanced',pct:87,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'AI Builder',img:'aibuilder.png',icon:'bi-robot',level:'Proficient',pct:72,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'Copilot',img:'copilot.png',icon:'bi-stars',level:'Proficient',pct:70,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'SQL',img:'sql.png',icon:'bi-table',level:'Proficient',pct:73,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'REST APIs',img:'restapi.png',icon:'bi-plug-fill',level:'Proficient',pct:74,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'HTML',img:'html.png',icon:'bi-filetype-html',level:'Proficient',pct:78,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'CSS',img:'css.png',icon:'bi-filetype-css',level:'Proficient',pct:78,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'Bootstrap',img:'bootstrap.png',icon:'bi-filetype-html',level:'Proficient',pct:78,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'Git',img:'git.png',icon:'bi-git',level:'Proficient',pct:75,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'GitHub',img:'github.png',icon:'bi-github',level:'Proficient',pct:75,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'Microsoft Office Suite',img:'microsoft365.png',icon:'bi-arrow-repeat',level:'Proficient',pct:70,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'Figma',img:'figma.png',icon:'bi-vector-pen',level:'Proficient',pct:68,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'VS Code',img:'vscode.png',icon:'bi-terminal-fill',level:'Advanced',pct:82,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'},
  {name:'GitHub Copilot / AI',img:'githubcopilot.png',icon:'bi-cpu-fill',level:'Proficient',pct:72,accent:'#00c2e0',bg:'rgba(0,194,224,.15)'}
];

const projects=[
  {bg:'linear-gradient(135deg,#1a0a2a,#0a1a2a)',accent:'#742774',
   title:'Portfolio Website',
   desc:'Designed and developed a responsive personal portfolio website to showcase projects, technical skills, professional experience, and achievements. Built a modern web interface with clean UI.',
   chips:['HTML','CSS','Bootstrap','GitHub'],link:'https://github.com/abc123'},
  {bg:'linear-gradient(135deg,#0a1a2a,#0a2a1a)',accent:'#00c2e0',
   title:'Resume Finder',
   desc:'Power Apps Canvas application to shortlist resumes based on job descriptions using AI Builder and prompt engineering — automating resume analysis and enhancing relevance-based candidate matching.',
   chips:['Power Apps','Power Automate','SharePoint','AI Builder','Prompt Engineering'],link:'#'}
];

const timeline=[
  {period:'Sep 2022 — Present',role:'Associate — Senior Power Platform Developer',company:'Cognizant Technology Solutions',
   bullets:[
     'Developed and deployed business applications using Power Apps, Power Automate, Dataverse, and SharePoint Online, automating business processes and improving operational efficiency.',
     'Designed end-to-end Power Platform solutions including requirements gathering, development, testing, deployment, and post-production support.',
     'Built large-scale Canvas Apps with 300+ controls and 40 screens featuring multi-tab navigation, repeating sections, conditional logic, dynamic field visibility, and offline capabilities.',
     'Implemented complex Sequential and Parallel approval workflows with advanced patterns: All Must Approve, state machines, reminder flows, and long-running custom approvals.',
     'Successfully migrated and remediated Nintex workflows to Microsoft Power Platform, modernising legacy solutions and ensuring seamless business continuity.',
     'Configured and customised SharePoint Online sites, lists, libraries, content types, and permissions for collaboration and document management.',
     'Designed and maintained Power BI dashboards enabling stakeholders to track key metrics and make data-driven decisions.',
     'Resolved document locking issues via custom locking mechanisms and robust error-handling frameworks.',
   ]},
  {period:'Aug 2022 — Sep 2022',role:'Software Development Intern',company:'Silver Oak Health',
   bullets:[
     'Developed and maintained web application features using Laravel, Bootstrap, and MySQL.',
     'Converted Figma designs into responsive, user-friendly interfaces with consistent UI/UX experiences.',
     'Collaborated using GitHub for version control and assisted in implementing CI/CD pipelines.',
   ]},
  {period:'May 2021 — Jul 2021',role:'Web Development Intern',company:'Webifly Solutions',
   bullets:[
     'Developed responsive web application features using HTML, CSS, Bootstrap, PHP, and MySQL.',
     'Designed and integrated UI components with server-side functionalities including database management.',
     'Collaborated with a startup team to deliver scalable web solutions within defined timelines.',
   ]},
];

const education=[
  {icon:'bi-mortarboard-fill',degree:'Bachelor of Technology — Computer Science Engineering',school:'PDPM IIITDM Jabalpur',year:'2018 – 2022'},
  {icon:'bi-book-fill',degree:'Higher Secondary (XII)',school:'Boon School, Kakinada',year:'2016 – 2018'},
  {icon:'bi-book-half',degree:'Secondary (X)',school:'Goethals Memorial School, Kurseong',year:'2014 – 2016'},
];

// Render Skills
const cg=document.getElementById('connectorGrid');
skills.forEach((s,i)=>{
  const c=document.createElement('div');
  c.className='connector-card reveal';
  c.style.setProperty('--c-accent',s.accent);
  c.style.setProperty('--c-bg',s.bg);
  c.style.transitionDelay=`${i*.05}s`;
  // load local image from assets/img/, fall back to bootstrap icon
  const iconDiv=document.createElement('div');
  iconDiv.className='connector-icon';
  if(s.img){
    const img=document.createElement('img');
    img.className='skill-logo';
    img.src=`assets/img/${s.img}`;
    img.alt=`${s.name} logo`;
    img.onerror=()=>{
      img.style.display='none';
      const icon=document.createElement('i');
      icon.className=`bi ${s.icon}`;
      iconDiv.appendChild(icon);
    };
    iconDiv.appendChild(img);
  }else{
    const icon=document.createElement('i');
    icon.className=`bi ${s.icon}`;
    iconDiv.appendChild(icon);
  }
  c.appendChild(iconDiv);
  const nameDiv=document.createElement('div');
  nameDiv.className='connector-name';
  nameDiv.textContent=s.name;
  c.appendChild(nameDiv);
  const levelDiv=document.createElement('div');
  levelDiv.className='connector-level';
  levelDiv.textContent=s.level;
  //c.appendChild(levelDiv);
  const barDiv=document.createElement('div');
  barDiv.className='skill-bar';
  const fillDiv=document.createElement('div');
  fillDiv.className='skill-bar-fill';
  fillDiv.setAttribute('data-pct',s.pct);
  fillDiv.style.background=s.accent;
  barDiv.appendChild(fillDiv);
  //c.appendChild(barDiv);
  cg.appendChild(c);
});

// Render Projects
const pg=document.getElementById('projectGrid');
projects.forEach((p,i)=>{
  const col=document.createElement('div');
  col.className='col-md-6 col-lg-6 reveal';
  col.style.transitionDelay=`${i*.08}s`;
  col.innerHTML=`<div class="project-card"><div class="project-body"><div class="project-title">${p.title}</div><p class="project-desc">${p.desc}</p><div class="project-chips">${p.chips.map(c=>`<span class="chip">${c}</span>`).join('')}</div></div></div>`;
  pg.appendChild(col);
});

// Render Timeline
const tl=document.getElementById('timeline');
timeline.forEach(t=>{
  const item=document.createElement('div');
  item.className='timeline-item reveal';
  item.innerHTML=`<div class="timeline-dot"></div><div class="timeline-period">${t.period}</div><div class="timeline-role">${t.role}</div><div class="timeline-company">${t.company}</div><ul class="timeline-bullets">${t.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`;
  tl.appendChild(item);
});

// Render Education
const eg=document.getElementById('educationGrid');
education.forEach((e,i)=>{
  const col=document.createElement('div');
  col.className='col-md-8 col-lg-6 reveal';
  col.style.transitionDelay=`${i*.1}s`;
  col.innerHTML=`<div class="edu-card"><i class="bi ${e.icon} edu-icon"></i><div><div class="edu-degree">${e.degree}</div><div class="edu-school">${e.school}</div><div class="edu-year">${e.year}</div></div></div>`;
  eg.appendChild(col);
});

// Scroll Reveal + Skill Bars
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-bar-fill').forEach(b=>{b.style.width=b.dataset.pct+'%';});
    }
  });
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// Navbar
window.addEventListener('scroll',()=>{
  document.getElementById('mainNav').classList.toggle('scrolled',window.scrollY>60);
  let current='';
  document.querySelectorAll('section[id]').forEach(s=>{if(window.scrollY>=s.offsetTop-100)current=s.id;});
  document.querySelectorAll('.nav-link').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));
});

// Canvas
(function(){
  const canvas=document.getElementById('flowCanvas');
  const ctx=canvas.getContext('2d');
  let W,H,nodes,animId;
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;init();}
  function init(){nodes=Array.from({length:40},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,r:Math.random()*2.5+1}));}
  function draw(){
    ctx.clearRect(0,0,W,H);
    for(let i=0;i<nodes.length;i++){for(let j=i+1;j<nodes.length;j++){const dx=nodes[i].x-nodes[j].x,dy=nodes[i].y-nodes[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<160){ctx.beginPath();ctx.moveTo(nodes[i].x,nodes[i].y);ctx.lineTo(nodes[j].x,nodes[j].y);ctx.strokeStyle=`rgba(0,194,224,${.18*(1-d/160)})`;ctx.lineWidth=.8;ctx.stroke();}}}
    nodes.forEach(n=>{ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle='rgba(0,194,224,0.55)';ctx.fill();n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1;});
    animId=requestAnimationFrame(draw);
  }
  window.addEventListener('resize',resize);resize();draw();
  if(window.matchMedia('(prefers-reduced-motion:reduce)').matches){cancelAnimationFrame(animId);ctx.clearRect(0,0,W,H);}
})();
//<a href="${p.link}" class="project-link">View project <i class="bi bi-arrow-right"></i></a>