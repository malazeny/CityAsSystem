const ecosystem = document.getElementById("ecosystem");
const tooltip = document.getElementById("tooltip");
const seasonSelect = document.getElementById("season");

const clusterPositions = {
  water: { x: 25, y: 65 },
  forest: { x: 65, y: 40 },
  trees: { x: 40, y: 25 },
  urban: { x: 75, y: 75 },
};

const predation = [
  { predator: "Fox", prey: ["Rabbit", "Rat"] },
  { predator: "Owl", prey: ["Rat"] },
  { predator: "Eagle", prey: ["Duck", "Fish", "Rat"] },
  { predator: "Raccoon", prey: ["Duck", "Chicken"] },
];

const fixedPositions = {};
animals.forEach(a => {
  const { x, y } = clusterPositions[a.cluster];
  fixedPositions[a.name] = {
    x: x + (Math.random() - 0.5) * 10,
    y: y + (Math.random() - 0.5) * 10
  };
});

function render(season) {
  ecosystem.innerHTML = "";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.style.position = "absolute";
  svg.style.inset = 0;
  ecosystem.appendChild(svg);

  const orbs = {};

  animals.forEach(a => {
    const count = a[season];
    const scaleFactor = 2;
    const size = Math.max(20, (count / 1.5) * scaleFactor);
    const pos = fixedPositions[a.name];

    const orb = document.createElement("div");
    orb.className = "animal";
    orb.style.width = `${size}px`;
    orb.style.height = `${size}px`;
    orb.style.left = `${pos.x}%`;
    orb.style.top = `${pos.y}%`;
    orb.style.background = `${a.color}cc`;
    orb.style.animationDelay = `${Math.random() * 3}s`;

    orb.addEventListener("mousemove", (e) => {
      tooltip.style.display = "block";
      tooltip.style.left = e.pageX + 15 + "px";
      tooltip.style.top = e.pageY + 15 + "px";
      tooltip.innerHTML = `<strong>${a.name}</strong><br>
        Habitat: ${a.habitat}<br>
        Food: ${a.food}<br>
        Interacts with: ${a.interact}`;
    });
    orb.addEventListener("mouseleave", () => tooltip.style.display = "none");

    ecosystem.appendChild(orb);
    orbs[a.name] = orb;
  });

  const paths = [];
  predation.forEach(({ predator, prey }) => {
    prey.forEach(p => {
      if (orbs[predator] && orbs[p]) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("stroke", "rgba(255,50,50,0.5)");
        path.setAttribute("stroke-width", "2");
        path.setAttribute("fill", "none");
        path.style.animation = "pulse 2s infinite alternate";
  
        const controlOffset = {
          x: (Math.random() - 0.5) * 50,
          y: (Math.random() - 0.5) * 50
        };
  
        svg.appendChild(path);
        paths.push({ path, predator: orbs[predator], prey: orbs[p], controlOffset });
      }
    });
  });

  function updatePaths() {
    paths.forEach(({ path, predator, prey, controlOffset }) => {
      const predRect = predator.getBoundingClientRect();
      const preyRect = prey.getBoundingClientRect();
      const x1 = predRect.left + predRect.width / 2;
      const y1 = predRect.top + predRect.height / 2;
      const x2 = preyRect.left + preyRect.width / 2;
      const y2 = preyRect.top + preyRect.height / 2;
  
      // Use the fixed offset for the curve
      const cx = (x1 + x2) / 2 + controlOffset.x;
      const cy = (y1 + y2) / 2 + controlOffset.y;
  
      path.setAttribute("d", `M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`);
    });
    requestAnimationFrame(updatePaths);
  }
  updatePaths();
}

seasonSelect.addEventListener("change", (e) => {
  document.body.className = e.target.value;
  render(e.target.value);
});

// Initial render
render("spring");
