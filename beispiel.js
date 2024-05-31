// Enum für Projektstatus
const ProjectStatus = {
  NotStarted: "Not Started",
  InProgress: "In Progress",
  Completed: "Completed"
};

// Funktion zur Verwaltung von Projekten und Aufgaben

// Hinzufügen eines Projekts
function addProject(projects, project) {
  projects.push(project);
}

// Finden eines Projekts nach ID
function findProjectById(projects, projectId) {
  return projects.find(project => project.id === projectId);
}

// Hinzufügen einer Aufgabe zu einem Projekt
function addTaskToProject(projects, projectId, task) {
  const project = findProjectById(projects, projectId);
  if (project) {
      project.tasks.push(task);
  } else {
      throw new Error("Project not found!");
  }
}

// Entfernen einer Aufgabe aus einem Projekt nach ID
function removeTaskFromProject(projects, projectId, taskId) {
  const project = findProjectById(projects, projectId);
  if (project) {
      const taskIndex = project.tasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
          project.tasks.splice(taskIndex, 1);
      } else {
          throw new Error("Task not found!");
      }
  } else {
      throw new Error("Project not found!");
  }
}

// Funktion zur Aktualisierung des Projektstatus
function updateProjectStatus(projects, projectId, status) {
  const project = findProjectById(projects, projectId);
  if (project) {
      project.status = status;
  } else {
      throw new Error("Project not found!");
  }
}

function processEntries(projectsOrTasks) {
for (const entry of projectsOrTasks) {
  console.log(entry.name);
  // TODO: eigentlich sollte hier noch ein Typ (Project oder Task) ausgegeben werden, aber das ist hier nicht implementiert
}
}

// Projekte initialisieren
const projects = [
  { id: 1, name: "Project Alpha", status: ProjectStatus.NotStarted, tasks: [{ id: 1, name: "Task A1" }, { id: 2, name: "Task A2" }] },
  { id: 2, name: "Project Beta", status: ProjectStatus.InProgress, tasks: [{ id: 1, name: "Task B1" }] }
];

addProject(projects, { id: 3, name: "Project Gamma", status: ProjectStatus.Completed, tasks: [] });
console.log("Projekte nach Hinzufügen:", projects);

addTaskToProject(projects, 3, { id: 1, name: "Task G1" });
console.log("Projekte nach Aufgabe hinzufügen:", projects);

removeTaskFromProject(projects, 3, 1);
console.log("Projekte nach Aufgabe entfernen:", projects);

updateProjectStatus(projects, 2, ProjectStatus.Completed);
console.log("Projekte nach Statusaktualisierung:", projects);

addProject(projects, { projectId: 4, projectName: "Project Delta" });
console.log(projects);

addTaskToProject(projects, 99, { id: 1, name: "Task Z1" });
console.log(projects);

removeTaskFromProject(projects, 3, 99);
console.log(projects);

addTaskToProject(projects, 3, { taskId: 2, taskName: "Task G2" });
console.log(projects);


processEntries(projects);
processEntries(projects[0].tasks);