=begin

You are given a list of projects and a list of dependencies (which is a list of
pairs of projects, where the second project is dependent on the first project).
All of a project's dependencies must be built before the project is. Find a build order
that will allow the projects to be built. If there is no build order, return an error

EXAMPLE

  Input

   projects: a, b, c, d, e, f

   dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)

 Output: f, e, a, b, d, c


  Ideas:
   Use topological sort to order tasks based on their dependency

  Complexities:
   N = |projects|
   M = |dependencies|
   Time: O(N+M) - this assumes that the objects and we use as hashmaps and the
   Set data type have operations that take O(1) time.
   Additional space: O(N)

=end

#NOTE: Implement this using graph classes

require "set"

# Returns a sorted list of dependencies
# @param {Array} projects
# @param {Array<Tuple>} dependencies
# @return {Array} sorted projects
def build_order(projects, dependencies)
  sorted_projects = []
  seen_nodes = Set.new()
  current_path = Set.new()

  # create adjacency list
  adj_list = projects.each_with_object({}) do |current, list|
    list[current] = []
  end

  # add dependencies to adj_list
  dependencies.each do |dependency|
    from_project, to_project = dependency
    adj_list[from_project] << to_project
  end

  adj_list.each do |project, _dependency|
    topological_sort(adj_list, seen_nodes, sorted_projects, current_path, project)
  end

  sorted_projects.reverse
end

# Toplologially sorts each node
# @param {Adjacency List} adj_list
# @param {Set} seen_nodes
# @param {Array} sorted_projects
# @param {Set} current_path
# @param {String} project
# @return {Nil}

def topological_sort(adj_list, seen_nodes, sorted_projects, current_path, project)
  return nil if seen_nodes.include?(project)

  # create the initial path and mark node as seen
  seen_nodes.add(project)
  current_path.add(project)

  # visit each neighbor and mark them and their neighbors
  adj_list[project].each do |neighbor|
    raise "dependencies are cyclic" if current_path.include?(neighbor)

    # visit and mark neighboring nodes
    topological_sort(adj_list, seen_nodes, sorted_projects, current_path, neighbor)
  end

  # backtrack through path
  current_path.delete(project)

  # push project into sorted list
  sorted_projects << project
end

projects = ["a", "b", "c", "d", "e", "f"]
dependencies = [["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"]]
p build_order(projects, dependencies) # [f, e, a, b, d, c]
