import ProjectsBackup from '../src/Content/ProjectsBackup.js';

it('has the same amount of projects', function() {
  expect(ProjectsBackup.length).toBe(32);
});
