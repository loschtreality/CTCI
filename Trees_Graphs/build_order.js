// You are given a list of projects and a list of dependencies (which is a list of
// pairs of projects, where the second project is dependent on the first project).
// All of a project's dependencies must be built before the project is. Find a build order
// that will allow the projects to be built. If there is no build order, return an error

// EXAMPLE

// Input

  // projects: a, b, c, d, e, f

  // dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)

// Output: f, e, a, b, d, c


// Clarifications:

// How are the dependencies given? Will it be a multi-dimensional array of tuples
  // where the first element is the value and the second the dependency?
// Will there ever be more than one dependency per project?

// Ideas:

// Organize data into an adjacency list. Traverse through the projects and
  // find the project with the most dependencies

// Complexities:
  // Time: o(v + e)
  // Space: o(n)

const buildOrder = (projects, dependencies) => {
  const adjList = {}
  const seenProjects = new Set()
  const path = new Set()
  const projectBuild = []


  projects.forEach((project) => { adjList[project] = [] })

  dependencies.forEach((tuple) => {
    const [variant, project] = tuple
    adjList[project].push(variant)
  })

  projects.map((project) => topologicalSort(adjList, seenProjects, path, projectBuild, project))


  return projectBuild
}

const topologicalSort = (adjList, seenProjects, path, projectBuild, project) => {
  if (seenProjects.has(project)) return;

  seenProjects.add(project)
  path.add(project)

  adjList[project].forEach((dependency) => {
    if (path.has(dependency)) {
      throw new Error('dependency is cyclic')
    }
      topologicalSort(adjList, seenProjects, path, projectBuild, dependency)
  })

  path.delete(project)
  projectBuild.push(project)
}

const projects = ['a', 'b', 'c', 'd', 'e', 'f']
const dependencies = [
    ['a', 'd'],
    ['f', 'b'],
    ['b', 'd'],
    ['f', 'a'],
    ['d', 'c']
]


console.log(buildOrder(projects, dependencies))
